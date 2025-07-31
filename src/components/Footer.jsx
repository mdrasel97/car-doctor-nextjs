import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <h2 className="text-xl font-bold text-white">Tohfa IT</h2>
          <p className="mt-2 text-sm">
            Empowering learners and institutions with modern IT education.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/courses">Courses</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#">
              <Facebook className="hover:text-white" />
            </Link>
            <Link href="#">
              <Twitter className="hover:text-white" />
            </Link>
            <Link href="#">
              <Instagram className="hover:text-white" />
            </Link>
            <Link href="#">
              <Linkedin className="hover:text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Tohfa IT Solution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
