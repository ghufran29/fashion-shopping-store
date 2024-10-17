import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-8 lg:py-20 lg:px-16">
      <div className=" flex flex-col lg:flex-row justify-between">
        {/* First section: Brand and social links */}
        <section className="mb-12 lg:mb-0">
          <h5 className="text-white text-2xl font-extrabold uppercase tracking-wider">
            Fashion
          </h5>
          <p className="text-neutral-400 my-5">
            Complete your style with awesome <br /> clothes from us.
          </p>
          <div className="flex gap-2">
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaFacebookF className="w-4 h-4" />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaInstagram />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaTwitter />
            </div>
            <div className="bg-yellow-300 w-8 h-8 rounded-lg p-2 hover:bg-white">
              <FaLinkedinIn />
            </div>
          </div>
        </section>

        {/* Second section: Links */}
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-28">
          <div>
            <h3 className="text-md text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/">
                  Contact us
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/">
                  Support
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  Share Location
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  Orders Tracking
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="#">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Developer Credit */}
      <section className="mt-8 lg:mt-0 text-center lg:text-left">
        <p className="text-neutral-400">
          Fashion © 2024 All rights reserved.<br /> Developed and maintained by{" "}
          <Link
            href="https://github.com/ghufran29"
            className="text-yellow-300 hover:text-white"
            target="_blank"
          >
            Ghufran
          </Link>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
