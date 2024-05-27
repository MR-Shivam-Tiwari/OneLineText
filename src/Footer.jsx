import React from 'react';

function Footer() {
    return (


        <footer class="bg-gray-900 text-white py-8 pt-12  ">
            <div class="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                <div class="space-y-4">
                    <div class="flex items-center space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="h-8 w-8 text-indigo-500"
                        >
                            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                        </svg>
                        <span class="text-2xl font-bold">OneLineText</span>
                    </div>
                    {/* <p class="text-gray-400">
                        Explore the rich Hindu scriptures and texts on VedicHub. Dive into the wisdom of the Vedas, Upanishads,
                        Puranas, and more.
                    </p> */}
                </div>
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold">Popular Tag</h4>
                    <ul class="space-y-2">
                        {/* <li>
                            <a class="hover:text-indigo-500" href="#">
                                Vedas
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Upanishads
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Bhagavad Gita
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Puranas
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Epics (Ramayana, Mahabharata)
                            </a>
                        </li> */}
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold">Important Pages</h4>
                    <ul class="space-y-2">
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                About
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-indigo-500" href="#">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="space-y-4">
                    <h4 class="text-lg font-semibold">Follow Us</h4>
                    <div class="flex space-x-4">
                        <a class="text-gray-400 hover:text-indigo-500" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-6 w-6"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-400 hover:text-indigo-500" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-6 w-6"
                            >
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                        </a>
                        <a class="text-gray-400 hover:text-indigo-500" href="#">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="h-6 w-6"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-10 border-t border-gray-800 pt-4 text-center  text-gray-500">
                <p>© 2024 OneLineText. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
