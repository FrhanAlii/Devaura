import { useState } from 'react';
// import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">Get in touch with our experts</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8" data-aos="fade-up" data-aos-delay="100">
          <form 
            action="https://formsubmit.co/contact@devaura.info" 
            method="POST" 
            className="contact-form space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div data-aos="fade-right" data-aos-delay="200">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              ></textarea>
            </div>

            <div className="text-center" data-aos="fade-up" data-aos-delay="400">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>

            {/* Hidden FormSubmit options */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://devaura.info/thank-you" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;