import React from 'react';
import { ArrowDown, Target, TrendingUp, Users, Zap, Shield, CheckCircle } from 'lucide-react';

const About = () => {
  const scrollToNextSection = () => {
    const missionSection = document.getElementById('mission-section');
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    "Supporting 500+ startups across 30 countries",
    "Facilitating over $200M in venture capital funding",
    "92% startup satisfaction rate with platform services",
    "Industry-leading success rate for funded companies"
  ];

  const features = [
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Accelerated Connections",
      description: "Our AI-powered matching system connects you with the right investors, mentors, and partners based on your specific needs and goals.",
      color: "bg-blue-600"
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-green-600" />,
      title: "Data-Driven Insights",
      description: "Access comprehensive market analytics and competitor intelligence to make informed decisions and optimize your growth strategy.",
      color: "bg-green-600"
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-600" />,
      title: "Secure Transactions",
      description: "Our platform ensures secure document sharing, investment processes, and communications with enterprise-grade security.",
      color: "bg-purple-600"
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      title: "Global Network",
      description: "Tap into our worldwide community of founders, investors, and industry experts to expand your reach and opportunities.",
      color: "bg-orange-600"
    }
  ];

  return (
    <div className="flex flex-col w-full ">
      <main className="flex-grow">
      
        <section className="relative min-h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-blue-900 opacity-90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
                Empowering Tomorrow's Tech Innovators
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-up">
                VentureSlate connects visionary founders with the resources, 
                investors, and partners they need to transform ideas into 
                industry-changing solutions.
              </p>
              <div className="flex justify-center animate-bounce mt-10">
                <button 
                  onClick={scrollToNextSection}
                  aria-label="Scroll down"
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  <ArrowDown size={32} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission-section" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                At VentureSlate, we're on a mission to democratize innovation by creating the most 
                powerful ecosystem for founders, investors, and industry partners to collaborate, 
                grow, and succeed together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation Focus</h3>
                <p className="text-gray-700">
                  We believe in the power of innovation to solve the world's most pressing challenges. 
                  Our platform accelerates breakthrough ideas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-green-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Growth Enablement</h3>
                <p className="text-gray-700">
                  We provide the tools, connections, and resources that emerging companies need to scale 
                  rapidly and sustainably.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Building</h3>
                <p className="text-gray-700">
                  We foster a diverse, collaborative community where founders, investors, and industry 
                  experts can connect and create value together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why VentureSlate
              </h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our platform offers unique advantages that empower startups to achieve their full potential and help investors discover the next big opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className={`${feature.color} h-2`}></div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-5">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About TeMetaTech
                </h2>
                <div className="w-20 h-1 bg-blue-600 mb-8"></div>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  TeMetaTech is a subsidiary of Hay Good Enterprises LLC, dedicated to building innovative 
                  solutions that bridge the gap between technology and business. Founded in 2021, 
                  we've quickly established ourselves as a leader in the startup ecosystem space.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Our team combines decades of experience in venture capital, technology development, 
                  and startup operations. We've been in your shoes, and we've built VentureSlate 
                  to address the real challenges we've experienced firsthand.
                </p>
                <div className="space-y-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-md">
                  Learn More About Our Team
                </button>
              </div>
              <div className="relative">
                <div className="aspect-w-3 aspect-h-2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Team collaboration at TeMetaTech" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-600 rounded-2xl -z-10"></div>
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-600 rounded-xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
