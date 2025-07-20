import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      content: "Devaura revolutionized our AI-powered platform development. Their technical expertise and innovative approach have helped us achieve remarkable results.",
      author: "John Smith",
      position: "CTO, AI Solutions Hub",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      content: "Working with Devaura has been transformative for our SaaS product. Their mastery in AI integration and web development is truly exceptional.",
      author: "Sarah Johnson",
      position: "Product Director, TechFlow AI",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      content: "The team at Devaura understands modern web architecture perfectly. They've helped us build an AI-driven platform that exceeds expectations.",
      author: "Michael Brown",
      position: "Founder, AI Ventures Pro",
      image: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600">What our clients say about us</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-8 md:mb-0 md:mr-8" data-aos="fade-right" data-aos-delay="200">
              <img 
                src={testimonials[currentTestimonial].image} 
                alt={testimonials[currentTestimonial].author}
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="300">
              <blockquote className="text-lg italic text-gray-700 mb-6">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <h4 className="font-semibold text-blue-900">{testimonials[currentTestimonial].author}</h4>
                <p className="text-gray-600">{testimonials[currentTestimonial].position}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;