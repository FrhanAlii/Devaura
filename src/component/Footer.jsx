import { FaFacebook, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SiFiverr, SiUpwork } from 'react-icons/si';
import img1 from "../assets/Images/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Institute Info */}
          <div data-aos="fade-right" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <a href="#" className="text-white px-4 py-2 rounded-md font-bold text-xl relative">
                <img 
                  src={img1} 
                  alt="Devaura Logo" 
                  className="h-11 w-auto"
                />
              </a>
              <h2 className="text-2xl font-bold text-white-800">Devaura</h2>
            </div>
            <p className="text-gray-200 mb-4">
              Premier IT education institute providing cutting-edge technology courses and certifications.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                <SiFiverr className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                <SiUpwork className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                <FaGithub className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl text-white-800 font-semibold mb-6 pb-2 border-b border-white/20">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Courses', 'About', 'Faculty', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-200 hover:text-white transition flex items-center"
                  >
                    <span className="w-2 h-2 bg-white rounded-full mr-3 opacity-0 group-hover:opacity-100 transition"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20 text-white-800">Our Courses</h3>
            <ul className="space-y-3">
              {[
                'AI & Machine Learning',
                'Web Development',
                'Mobile App Development',
                'Virtual Assistance',
                'AI Automation'
              ].map((course) => (
                <li key={course}>
                  <a href="#courses" className="text-gray-200 hover:text-white transition">
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-white/20 text-white-800">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-300" />
                <span className="text-gray-200">Johar town, Lahore</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-blue-300" />
                <span className="text-gray-200">+92 317 0947712</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-300" />
                <span className="text-gray-200">contact@devaura.info</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center" data-aos="fade-up" data-aos-delay="500">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Devaura Institute. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;