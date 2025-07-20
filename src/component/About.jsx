// import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
  const features = [
    "AI & Machine Learning Integration",
    "Custom Web & App Development",
    "Workflow & Business Process Automation",
    "Scalable Cloud-based Deployments"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <h2 className="text-4xl font-bold text-blue-900 mb-6">About Devaura</h2>
            <p className="text-gray-600 mb-6">
              At <strong>Devaura</strong>, we are committed to empowering businesses through intelligent digital transformation. As a leading innovator in AI-powered solutions, we specialize in developing cutting-edge web and mobile applications, advanced machine learning models, and automation workflows that streamline operations and drive measurable results.
            </p>
            <p className="text-gray-600 mb-6">
              Our team brings together expertise in artificial intelligence, software engineering, and business strategy to deliver end-to-end digital experiences tailored to your unique needs. From intelligent customer engagement tools to scalable backend architectures, Devaura provides the technological edge modern businesses demand.
            </p>
            <p className="text-gray-600 mb-8">
              With a focus on innovation, quality, and long-term value, we help organizations across industries unlock efficiency, enhance decision-making, and stay ahead in an increasingly digital world.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center" data-aos="fade-up" data-aos-delay={150 + (index * 50)}>
                  <span className="text-blue-600 mr-3">🔹</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="fade-left" data-aos-delay="200">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="About Devaura" 
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;