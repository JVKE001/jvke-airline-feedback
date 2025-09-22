import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">JVKE Airline</h2>
          <p className="text-gray-400 p-2">
            Fly with comfort and safety. Share your feedback to help us improve.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 flex justify-center">
            Quick Links
          </h3>
          <ul className="space-y-2 flex flex-col justify-center items-center">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-gray-300">
                Flights
              </a>
            </li>
            <li>
              <a href="/feedback" className="hover:text-gray-300">
                Feedback
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400 ">
            <li>Email: support@jvkeairline.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Address: 456 Market Street, San Francisco, CA</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-secondary">JVKE</span> Airline All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
