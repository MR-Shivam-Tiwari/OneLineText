import React from 'react'
import Logo from './OnlineLOgo.png'
function Navbar() {
    return (
        <div>
            <header class="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-gray-300">
                <a class="mr-6 gap-1 hidden lg:flex items-center" href="/">

                    <span class="text-[#8b4513] font-bold text-xl">
                        <img src={Logo} alt='ONELINETEXT' style={{ width: "20vh" }} />
                    </span>
                </a>

                <div class="ml-auto flex gap-2">
                    <nav
                        aria-label="Main"
                        data-orientation="horizontal"
                        dir="ltr"
                        class="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
                    >
                        <div style={{ position: "relative" }}>
                            <ul
                                data-orientation="horizontal"
                                class="group flex flex-1 list-none items-center justify-center space-x-1"
                                dir="ltr"
                            >
                                <a
                                    class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                    data-radix-collection-item=""
                                    href="/"
                                >
                                    Home
                                </a>


                                <a
                                    class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                    data-radix-collection-item=""
                                    href="/about"
                                >
                                    About Us
                                </a>
                                <a
                                    class="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                                    data-radix-collection-item=""
                                    href="/contact"
                                >
                                    Contact Us
                                </a>
                            </ul>
                        </div>
                        <div class="absolute left-0 top-full flex justify-center"></div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
