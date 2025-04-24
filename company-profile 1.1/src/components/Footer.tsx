// import React icons
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-400 pb-10">

                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-yellow-400">Company</h2>
                    <p className="text-gray-300 mt-4">
                        Kami Adalah Perusahaan Produsen Energi Kelas Dunia Yang Andal, Efisien dan Terbaik di Indonesia.
                    </p>
                </div>

                {/* Quick Links with Smooth Scroll */}
                <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <button onClick={() => scrollToSection("about")} className="text-left text-gray-300 hover:text-yellow-400 transition w-full">
                                About Us
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("services")} className="text-left text-gray-300 hover:text-yellow-400 transition w-full">
                                Services
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("portfolio")} className="text-left text-gray-300 hover:text-yellow-400 transition w-full">
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("news")} className="text-left text-gray-300 hover:text-yellow-400 transition w-full">
                                News
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("award")} className="text-left text-gray-300 hover:text-yellow-400 transition w-full">
                                Awards
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-semibold text-yellow-400 mb-4">Contact Us</h3>
                    <p className="text-gray-300">📍 Jl.Rawagelam I No. 9, Kawasan Industri Pulogadung, Jakarta 13930, Indonesia</p>
                    <p className="text-gray-300">📞 (+62 21) 460 2015</p>
                    <p className="text-gray-300">✉  pamapersada.com</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-gray-300 hover:text-yellow-400 transition"><FaFacebookF size={20} /></a>
                        <a href="#" className="text-gray-300 hover:text-yellow-400 transition"><FaTwitter size={20} /></a>
                        <a href="#" className="text-gray-300 hover:text-yellow-400 transition"><FaInstagram size={20} /></a>
                        <a href="#" className="text-gray-300 hover:text-yellow-400 transition"><FaLinkedin size={20} /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-300 text-sm mt-8">
                © {new Date().getFullYear()} PT Pamapersada Nusantara. All Rights Reserved.
            </div>
        </footer>
    );
}
