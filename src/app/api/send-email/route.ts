import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import client from "../../../../client";
// import { data } from "framer-motion/client";

// Define interfaces for form submissions
interface QuotationFormData {
  _key: string;
  _type: "quotationFormDetails";
  submittedAt: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  shipmentsPerMonth?: string;
  mode?: string;
  originPort?: string;
  destinationPort?: string;
  enquiry?: string;
}

interface ContactFormData {
  _key: string;
  _type: "contactFormDetails";
  submittedAt: string;
  name: string;
  email: string;
  contactNumber: string;
  company: string;
  website?: string;
  address?: string;
  city?: string;
  province?: string;
  topic?: string;
  message?: string;
}


export async function POST(req: NextRequest) {

  // const query_for_email_settings = `*[_type == "EmailSettings"][0]`;
  // const fetchEmailSettings = async () => {
  //   try {
  //     const data = await client.fetch(query_for_email_settings);

  //     console.log("Fetched email settings:", data);
  //     return data || null;
  //   } catch (error) {
  //     console.error("Error fetching email settings:", error);
  //     return null;
  //   }
  // };



  const settingsQuery = `*[_type == "EmailSettings"][0]{recipientEmail,email,password,host}`;
        const settings = await client.fetch(settingsQuery);
        const host = settings?.host || process.env.SMTP_HOST;
        const recipientEmail = settings?.recipientEmail || "info.learn.edwin@gmail.com";
        const appEmail = settings?.email || process.env.EMAIL_USER;
        const appPassword = settings?.password || process.env.EMAIL_PASS;
        console.log("Email settings:", {
          recipientEmail,
          appEmail,
          appPassword
        });

  try {

    const body = await req.json();
    console.log("Received form data:", body);
    const {
      formType,
      firstName,
      lastName,
      companyName,
      email,
      phone,
      shipmentsPerMonth,
      mode,
      originPort,
      destinationPort,
      enquiry,
      companyEmail,
      website,
      address,
      city,
      province,
      topic,
      message,
    } = body;

    // Basic validation
    if (
      !formType ||
      !firstName ||
      !lastName ||
      !(email || companyEmail) ||
      !phone ||
      !companyName
    ) {
      return NextResponse.json(
        { message: "Required fields are missing." },
        { status: 400 }
      );
    }
    console.log("Form data is valid:", body);
    // Map frontend formType to Sanity schema formType values
    let schemaFormType = "";
    if (formType === "freightQuote") schemaFormType = "quotation";
    else if (formType === "contactUs") schemaFormType = "contact";
    else
      return NextResponse.json(
        { message: "Invalid formType." },
        { status: 400 }
      );

    // Prepare submissionData based on form type
    let submissionData: QuotationFormData | ContactFormData = {
      submittedAt: new Date().toISOString(),
    } as QuotationFormData | ContactFormData;

    if (schemaFormType === "quotation") {
      submissionData = {
        _key: Date.now().toString(),
        _type: "quotationFormDetails",
        submittedAt: submissionData.submittedAt,
        firstName,
        lastName,
        companyName,
        email,
        phone,
        shipmentsPerMonth: shipmentsPerMonth || "",
        mode: mode || "",
        originPort: originPort || "",
        destinationPort: destinationPort || "",
        enquiry: enquiry || "",
      };
    } else if (schemaFormType === "contact") {
      submissionData = {
        _key: Date.now().toString(),
        _type: "contactFormDetails",
        submittedAt: submissionData.submittedAt,
        name: `${firstName} ${lastName}`.trim(),
        email: companyEmail || email,
        contactNumber: phone,
        company: companyName,
        website: website || "",
        address: address || "",
        city: city || "",
        province: province || "",
        topic: topic || "",
        message: message || "",
      };
    }

    // Find existing document for this formType
    const existingDoc = await client.fetch(
      `*[_type == "formSubmission" && formType == $formType][0]`,
      { formType: schemaFormType }
    );
    console.log("Existing document found:", existingDoc);

    if (existingDoc) {

      await client
        .patch(existingDoc._id)
        .setIfMissing({ submissions: [] })
        .append("submissions", [submissionData])
        .commit();
      console.log("Existing document updated with new submission:", submissionData);
    } else {
      // Create new document for this formType
      await client.create({
        _type: "formSubmission",
        formType: schemaFormType,
        submissions: [submissionData],
      });
      console.log("New document created for form submission:", submissionData);
    }

    console.log("Submission data processed successfully:", submissionData);

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host:  host,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: appEmail,
        pass: appPassword,
      },
    });

    // Compose email HTML content
    let emailContent = "";
    if (formType === "freightQuote") {
      emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #162F65; text-align: center;">New Freight Quote Request</h2>
            <p>Dear Admin,</p>
            <p>You have received a new freight quote request from Nexus Logix website. Details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td><strong>First Name:</strong></td><td>${firstName}</td></tr>
              <tr><td><strong>Last Name:</strong></td><td>${lastName}</td></tr>
              <tr><td><strong>Company Name:</strong></td><td>${companyName}</td></tr>
              <tr><td><strong>Email:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td><strong>Shipments per Month:</strong></td><td>${shipmentsPerMonth || "N/A"}</td></tr>
              <tr><td><strong>Mode:</strong></td><td>${mode || "N/A"}</td></tr>
              <tr><td><strong>Origin:</strong></td><td>${originPort || "N/A"}</td></tr>
              <tr><td><strong>Destination:</strong></td><td>${destinationPort || "N/A"}</td></tr>
              <tr><td><strong>Enquiry:</strong></td><td>${enquiry || "N/A"}</td></tr>
            </table>
            <p style="font-size: 0.9em; color: #777; margin-top: 30px;">
              This email was sent automatically from the Nexus Logix website contact form.
            </p>
          </div>
        </div>
      `;
    } else if (formType === "contactUs") {
      emailContent = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #162F65; text-align: center;">New Contact Us Submission</h2>
            <p>Dear Admin,</p>
            <p>You have received a new contact submission from Nexus Logix website. Details:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td><strong>Name:</strong></td><td>${(submissionData as ContactFormData).name}</td></tr>
              <tr><td><strong>Email:</strong></td><td><a href="mailto:${(submissionData as ContactFormData).email}">${(submissionData as ContactFormData).email}</a></td></tr>
              <tr><td><strong>Phone:</strong></td><td><a href="tel:${phone}">${phone}</a></td></tr>
              <tr><td><strong>Company:</strong></td><td>${companyName}</td></tr>
              <tr><td><strong>Website:</strong></td><td>${website || "N/A"}</td></tr>
              <tr><td><strong>Address:</strong></td><td>${address || "N/A"}</td></tr>
              <tr><td><strong>City:</strong></td><td>${city || "N/A"}</td></tr>
              <tr><td><strong>Province:</strong></td><td>${province || "N/A"}</td></tr>
              <tr><td><strong>Topic:</strong></td><td>${topic || "N/A"}</td></tr>
              <tr><td><strong>Message:</strong></td><td>${message || "N/A"}</td></tr>
            </table>
            <p style="font-size: 0.9em; color: #777; margin-top: 30px;">
              This email was sent automatically from the Nexus Logix website contact form.
            </p>
          </div>
        </div>
      `;
    }

    // Send email
    await transporter.sendMail({
      from: appEmail,
      to: recipientEmail,
      subject:
        formType === "freightQuote"
          ? "New Freight Quote Request from Website"
          : "New Contact Us Submission from Website",
      html: emailContent,
    });

    return NextResponse.json(
      { message: "Submission saved and email sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to process submission.", error: (error as Error).message },
      { status: 500 }
    );
  }
}