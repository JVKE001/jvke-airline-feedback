import React from "react";
import Layout from "../../components/layout/Layout";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <Layout withSpacing>
      {/* Header Section */}
      <section className="px-8">
        <h1 className="text-center text-3xl font-bold my-8">Contact Us</h1>
        <p className="text-steel mx-auto text-[15px] md:text-[17px] max-w-3xl text-justify">
          Have a question, suggestion, or feedback? At JVKE Airline, we believe
          that every passenger’s voice matters. Whether you want to share a
          positive travel experience, highlight an area where we can improve, or
          simply ask a question about our services, we are here to listen. Our
          dedicated support team is committed to providing clear, timely
          responses to ensure that your concerns are addressed and your journey
          with us is as smooth as possible. You can reach out using the contact
          form below, or connect with us directly through phone or email. Your
          input helps us refine our services, enhance comfort, and continue
          delivering safe and enjoyable flights for travelers around the world.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-20 my-16">
        <div className="bg-white p-10 rounded-2xl shadow-md max-w-2xl mx-auto">
          <figcaption className="mb-4 text-sm text-blue-600 italic text-center">
            Dedicated to listening to every passenger’s journey ✈️
          </figcaption>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 text-center">
            Send Us a Message
          </h2>
          <p className="text-gray-500 text-center mb-8 text-sm md:text-base">
            Have a question, suggestion, or feedback? Fill out the form below
            and our support team will get back to you shortly.
          </p>

          {/* NOTE: Form is currently not functional */}
          <p className="text-center text-gray-400 text-xs mb-4">
            Right now this form is not functional, but I can make it work soon.
          </p>

          {/* Form Fields */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-blue-700 focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-12 mb-16">
        <div className="bg-midnight p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <MapPin className="mx-auto mb-2 text-blue-600" size={24} />
          <h3 className="font-semibold text-lg text-gray-700">Address</h3>
          <p className="text-gray-500 mt-2 text-sm">
            JVKE Airline HQ <br /> 123 Skyway Avenue <br /> San Francisco, CA
          </p>
        </div>
        <div className="bg-midnight p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <Phone className="mx-auto mb-2 text-blue-600" size={24} />
          <h3 className="font-semibold text-lg text-gray-700">Phone</h3>
          <p className="text-gray-500 mt-2 text-sm">
            +1 (555) 123-4567 <br /> Mon–Fri, 9am–6pm (PST)
          </p>
        </div>
        <div className="bg-midnight p-6 rounded-xl shadow hover:shadow-md transition text-center">
          <Mail className="mx-auto mb-2 text-blue-600" size={24} />
          <h3 className="font-semibold text-lg text-gray-700">Email</h3>
          <p className="text-gray-500 mt-2 text-sm">
            support@jvkeairline.com <br /> feedback@jvkeairline.com
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
