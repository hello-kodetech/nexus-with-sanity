import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="bg-[#F6F6F6]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-4 lg:py-6">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Nexus Logo"
                                width={60}
                                height={60}
                                className="h-14 lg:h-20 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Navigation - Hidden on mobile */}
                    <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
                        <Link
                            href="/whyNexus"
                            className="text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors"
                        >
                            Why Nexus
                        </Link>
                        <Link
                            href="/leadership"
                            className="text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors"
                        >
                            Leadership Team
                        </Link>
                        <Link
                            href="#"
                            className="text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="#"
                            className="text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors"
                        >
                            Insights
                        </Link>
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <button
                            className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-8 py-2 text-sm rounded-lg font-normal">
                            Track and Trace
                        </button>
                        <button
                            className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-8 py-2 text-sm rounded-lg font-normal">
                            Contact Us
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button
                            className="bg-[#e6b333] text-gray-800 hover:bg-[#e6b333]/90 px-6 py-2 text-sm rounded-lg font-normal">
                            Menu
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar;