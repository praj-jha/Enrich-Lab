import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Microscope, BrainCircuit, BookOpenText, ChevronRight, Award, Users, ExternalLink, Plus } from 'lucide-react';
import img1 from '../assets/enrich.png'

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const researchImagesRef = useRef(null);
  const labSectionRef = useRef(null);
  const [isLabSectionVisible, setIsLabSectionVisible] = useState(false);
  
  // Initialize font loading and handle scroll
  useEffect(() => {
    // Preload the background image for better performance
    const preloadImage = new Image();
    preloadImage.src = 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80';
    
    // Handle scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Check if laboratory section is in viewport
      if (labSectionRef.current) {
        const rect = labSectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;
        setIsLabSectionVisible(isInView);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Research images with better placeholders
  const researchImages = [
    {
      src: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Quantum computing research',
      title: 'Quantum Circuit Analysis'
    },
    {
      src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Smart materials in development',
      title: 'Self-healing Polymer Testing'
    },
    {
      src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'AI systems research',
      title: 'Neural Network Architecture'
    },
    {
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Laboratory equipment',
      title: 'Advanced Spectroscopy'
    }
  ];

  // Laboratory data with enhanced information
  const laboratories = [
    {
      title: "Quantum Computing Laboratory",
      description: "Home to our superconducting qubit research and quantum algorithm development",
      image: "https://etimg.etb2bimg.com/photo/110649397.cms",
      icon: <Award size={20} />,
      stat: "15+ Qubits",
      color: "lab-burgundy"
    },
    {
      title: "Materials Science Division",
      description: "Pioneering sustainable materials research with atomic precision engineering",
      image: "https://news.yale.edu/sites/default/files/d6_files/White-coats.jpg",
      icon: <Users size={20} />,
      stat: "12 Researchers",
      color: "lab-teal"
    },
    {
      title: "AI Ethics Research Center",
      description: "Developing frameworks for responsible AI implementation in critical domains",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQftiOYuA2RZexHgqa9BoXEW292VX9s6nIzZA&s",
      icon: <ExternalLink size={20} />,
      stat: "8 Publications",
      color: "lab-navy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-lab-gray/10">
      {/* Hero Section - With side-by-side layout */}
      <section className="relative py-12 md:py-0 overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Column - Left side */}
          <div className="relative h-64 md:h-screen md:sticky md:top-0">
            <img 
              src={img1} 
              alt="Enrich Lab Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 mix-blend-overlay" />
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex justify-center md:justify-start space-x-4">
                <FlaskConical size={32} className="text-white" />
                <Microscope size={32} className="text-white" />
                <BrainCircuit size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          {/* Content Column - Right side */}
          <div className="flex items-center justify-center p-8 md:p-16">
            <div className="max-w-xl">
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight text-lab-navy tracking-tight">
                <span className="text-lab-burgundy font-bold">ENRICH+</span> Research Lab: 
                <span className="block mt-2 bg-gradient-to-r from-lab-burgundy to-lab-teal bg-clip-text text-transparent">
                  AI that Transforms, NLP that Empowers
                </span>
              </h1>
              
              <div className="space-y-4 my-8">
                {[
                  "Emotive Analytics",
                  "Natural Language Processing",
                  "Research in AI",
                  "Intelligent Computing",
                  "Community Health",
                  "Healthcare Technologies"
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-gray-50 shadow-sm p-3 rounded-lg transform hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      index % 3 === 0 ? 'bg-lab-burgundy' : 
                      index % 3 === 1 ? 'bg-lab-teal' : 'bg-lab-navy'
                    }`}></div>
                    <span className="font-semibold text-lab-navy">{item}</span>
                  </div>
                ))}
                <div className="flex items-center bg-lab-burgundy/90 text-white p-3 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <Plus size={16} className="mr-2" />
                  <span className="font-semibold">Advanced Analytics</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/research" 
                  className="bg-lab-navy hover:bg-lab-navy/90 text-white font-sans py-3 px-8 rounded-xl hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center group text-lg"
                >
                  Explore Our Work
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENRICH+ Mission Section */}
      <section className="py-24 bg-gradient-to-r from-lab-navy/5 to-lab-burgundy/5 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-lab-burgundy/5 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-lab-teal/5 rounded-full blur-3xl transform translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              {/* Left Column - Visual representation */}
              <div className="w-full lg:w-2/5">
                <div className="relative">
                  {/* "+" symbol highlight */}
                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-gradient-to-br from-lab-burgundy to-lab-teal rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg transform rotate-12 animate-pulse">
                    +
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-serif font-bold text-lab-navy mb-4 flex items-center">
                      <span className="text-lab-burgundy mr-2">ENRICH</span>
                      <span className="text-lab-teal text-3xl">+</span>
                      <span className="ml-2">Means More</span>
                    </h3>
                    
                    <div className="space-y-4 mt-6">
                      {[
                        { text: "Beyond Conventional AI", icon: <BrainCircuit size={20} className="text-lab-burgundy" /> },
                        { text: "Data to Understanding", icon: <BookOpenText size={20} className="text-lab-teal" /> },
                        { text: "Research to Solutions", icon: <FlaskConical size={20} className="text-lab-navy" /> },
                        { text: "Innovation to Empowerment", icon: <Users size={20} className="text-lab-burgundy" /> }
                      ].map((item, index) => (
                        <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <div className="mr-3">{item.icon}</div>
                          <span className="font-medium">{item.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex items-center justify-center">
                      <img 
                        src="https://randomuser.me/api/portraits/women/65.jpg" 
                        alt="Dr. Akshi Kumar" 
                        className="w-16 h-16 rounded-full border-2 border-lab-burgundy object-cover"
                      />
                      <div className="ml-4">
                        <p className="font-semibold text-lab-navy">Dr. Akshi Kumar</p>
                        <p className="text-sm text-gray-600">Laboratory Director</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - Mission text */}
              <div className="w-full lg:w-3/5">
                <h2 className="text-4xl font-serif font-bold text-lab-navy mb-8 leading-tight">
                  Fusing AI with Insights to 
                  <span className="bg-gradient-to-r from-lab-burgundy to-lab-teal bg-clip-text text-transparent"> Enrich Lives</span>
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 leading-relaxed">
                    At ENRICH+, the "+" represents our commitment to going beyond the conventional—fusing advanced AI with deep insights to enrich lives. Our lab, led by Dr. Akshi Kumar, stands at the forefront of AI and Natural Language Processing (NLP) research, driving change across industries.
                  </p>
                  
                  <div className="bg-white/70 p-6 rounded-xl shadow-sm mb-6 backdrop-blur-sm border border-lab-burgundy/10">
                    <h3 className="text-xl font-semibold text-lab-burgundy mb-3">Transforming Data into Understanding</h3>
                    <p className="text-gray-700">
                      From analyzing social media sentiment and detecting fake news, to understanding emotions, personality traits, and sensational content, we transform data into understanding and solutions.
                    </p>
                  </div>
                  
                  <div className="bg-white/70 p-6 rounded-xl shadow-sm mb-6 backdrop-blur-sm border border-lab-teal/10">
                    <h3 className="text-xl font-semibold text-lab-teal mb-3">Revolutionizing Healthcare & Well-being</h3>
                    <p className="text-gray-700">
                      Our groundbreaking work also extends to healthcare and community well-being, where NLP and predictive modelling are revolutionizing biomedical research, life sciences, and precision health. By unlocking the power of complex data, we're not just enriching knowledge—we're creating actionable insights that foster a smarter, healthier world.
                    </p>
                  </div>
                  
                  <p className="font-semibold text-xl text-lab-navy">
                    Join us at ENRICH+ and be part of a future where AI drives real-world impact, turning innovation into empowerment.
                  </p>
                </div>
                
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Images Section - Enhanced with better layout */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-semibold text-lab-navy mb-16 text-center">
            Visualizing Our Research
          </h2>
          
          <div 
            ref={researchImagesRef} 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {researchImages.map((image, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt} 
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lab-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-lab-navy">{image.title}</h3>
                  <div className="w-12 h-1 bg-lab-burgundy mt-3 mb-4 group-hover:w-full transition-all duration-500"></div>
                  <p className="text-gray-600">Ongoing research in our state-of-the-art laboratories.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-lab-burgundy to-lab-teal rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-lab-gray p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-['Slick',serif] font-semibold text-lab-navy mb-6">
                  Interdisciplinary Excellence Since 2005
                </h2>
                <p className="font-['Montserrat',sans-serif] text-gray-700 mb-6 leading-relaxed">
                  At the forefront of scientific exploration, our laboratory combines expertise across physics, materials science, and computer engineering to solve tomorrow's challenges today. Under Professor James Wilson's leadership, we've pioneered breakthroughs impacting over 15 industries worldwide.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center mt-8">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-lab-burgundy">50+</div>
                    <div className="text-sm text-gray-600">Peer-Reviewed Papers</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-lab-teal">$15M+</div>
                    <div className="text-sm text-gray-600">Research Funding</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-lab-navy">30+</div>
                    <div className="text-sm text-gray-600">Countries Collaborating</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-lab-gray p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-3 flex items-center">
                  <BookOpenText className="mr-2 text-lab-burgundy" />
                  Academic Legacy
                </h3>
                <p className="font-['Montserrat',sans-serif] text-gray-700">
                  Our alumni lead research teams at 8 of the top 20 global universities, continuing our tradition of academic excellence.
                </p>
              </div>
              <div className="bg-lab-gray p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-3 flex items-center">
                  <FlaskConical className="mr-2 text-lab-teal" />
                  Industry Impact
                </h3>
                <p className="font-['Montserrat',sans-serif] text-gray-700">
                  Partnering with Fortune 500 companies to translate research into real-world solutions across multiple sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Inside Our Laboratories Section */}
      <section ref={labSectionRef} className="py-24 bg-gradient-to-b from-white to-lab-gray/20 overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Header with animation */}
          <div className={`mb-16 text-center transform transition-all duration-1000 ${isLabSectionVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-serif font-bold text-lab-navy mb-4">
              Inside Our Laboratories
            </h2>
            <div className="h-1 w-24 bg-lab-burgundy mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Explore our state-of-the-art facilities where innovation and discovery converge to address global challenges
            </p>
          </div>
          
          {/* Laboratory Cards with improved layout and animations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {laboratories.map((lab, index) => (
              <div 
                key={index}
                className={`transform transition-all duration-1000 ${isLabSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  {/* Image container with proper image handling */}
                  <div className="relative h-64 overflow-hidden">
                    {/* Primary image with fallback approach */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${lab.image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                      }}
                    >
                      {/* Fallback for image loading issues */}
                      <div className="absolute inset-0 bg-lab-navy/20 flex items-center justify-center opacity-0">
                        <div className="bg-white/80 p-4 rounded-full">
                          <FlaskConical size={24} className="text-lab-burgundy" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300" />
                    
                    {/* Laboratory title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                      <h3 className="text-xl font-serif font-bold text-white mb-2">{lab.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {lab.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Stats and details */}
                  <div className="p-6 bg-white">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2 text-lab-burgundy">
                        {lab.icon}
                        <span className="font-medium">{lab.stat}</span>
                      </div>
                     
                    </div>
                  </div>
                  
                  {/* Accent border bottom with animation */}
                  <div className={`h-1 w-0 ${index === 0 ? 'bg-lab-burgundy' : index === 1 ? 'bg-lab-teal' : 'bg-lab-navy'} group-hover:w-full transition-all duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional laboratories teaser - appears with delay */}
        
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-20 bg-lab-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-12 text-center">
            Cutting-Edge Research Domains
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-lab-burgundy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FlaskConical className="text-lab-burgundy mb-4" size={32} />
              <h3 className="text-2xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-3">Quantum Frontiers</h3>
              <p className="font-['Montserrat',sans-serif] text-gray-700 mb-4 leading-relaxed">
                Developing topological qubits and error-correction algorithms for practical quantum computing applications.
              </p>
              <div className="mt-6 bg-lab-burgundy/10 px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-semibold text-lab-burgundy">3 Active Projects</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-lab-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Microscope className="text-lab-teal mb-4" size={32} />
              <h3 className="text-2xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-3">Smart Materials</h3>
              <p className="font-['Montserrat',sans-serif] text-gray-700 mb-4 leading-relaxed">
                Engineering self-healing polymers and carbon-negative composites for sustainable manufacturing.
              </p>
              <div className="mt-6 bg-lab-teal/10 px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-semibold text-lab-teal">5 Patents Pending</span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-lab-navy/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BrainCircuit className="text-lab-navy mb-4" size={32} />
              <h3 className="text-2xl font-['Playfair_Display',serif] font-semibold text-lab-navy mb-3">Ethical AI Systems</h3>
              <p className="font-['Montserrat',sans-serif] text-gray-700 mb-4 leading-relaxed">
                Developing fairness-aware machine learning frameworks for responsible AI deployment in healthcare.
              </p>
              <div className="mt-6 bg-lab-navy/10 px-4 py-2 rounded-full inline-block">
                <span className="text-sm font-semibold text-lab-navy">2 Industry Partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Publications - Enhanced with better visuals */}
      
    </div>
  );
};

export default Home;