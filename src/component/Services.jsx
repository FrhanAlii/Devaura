const Services = () => {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Progress</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to grow your business in the digital world
            </p>
          </div>
  
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {/* AI Models Deployed */}
            <div className="bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4 group-hover:bg-indigo-200 transition-colors">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-800">150+</h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">AI Models Deployed</p>
              <p className="text-sm text-gray-500 mt-2">Deployed intelligent AI/ML systems for real-world impact</p>
            </div>
  
            {/* Web Development */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4 group-hover:bg-blue-200 transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-800">200+</h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Websites Built</p>
              <p className="text-sm text-gray-500 mt-2">Responsive, fast, and scalable</p>
            </div>
  
            {/* Client Services */}
            <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 p-3 rounded-full mr-4 group-hover:bg-teal-200 transition-colors">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-800">500+</h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Happy Clients</p>
              <p className="text-sm text-gray-500 mt-2">Satisfied with our services</p>
            </div>
  
            {/* Automations Delivered */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 group" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4 group-hover:bg-purple-200 transition-colors">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-4xl font-bold text-gray-800">300+</h3>
              </div>
              <p className="text-lg text-gray-600 font-medium">Automations Delivered</p>
              <p className="text-sm text-gray-500 mt-2">Streamlined workflows and boosted productivity</p>
            </div>
          </div>
  
          {/* Services Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* AI & Machine Learning Service */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-right" data-aos-delay="100">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">AI & Machine Learning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Custom AI solutions and predictive analytics to transform your business intelligence and decision-making.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom AI model development
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Predictive analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  NLP & computer vision
                </li>
              </ul>
            </div>
  
            {/* Web Development Service */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-left" data-aos-delay="200">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Web Development</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We build responsive, high-performance websites and web applications tailored to your business needs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Custom website development
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  E-commerce solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  CMS integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;