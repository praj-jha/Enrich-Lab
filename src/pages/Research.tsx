import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Research = () => {
  const researchProject = {
    title: "NLP-Driven Optimization for Blue-Collar Job Matching: Research and Implementation",
    client: "Hirers, India (Hirers.co.in)",
    duration: "August 2023 - August 2024",
    overview: "The project focused on integrating Natural Language Processing (NLP) and Artificial Intelligence (AI) technologies to enhance blue-collar job matching efficiency. The main aim was to analyze vast job descriptions and candidate profiles, using NLP to automate and optimize the matching process.",
    challenges: [
      "Analyzing unstructured job postings and resumes using NLP techniques",
      "Developing and refining NLP-based algorithms for intelligent job-candidate matching",
      "Improving the semantic understanding of job descriptions and applicant profiles through aspect-based sentiment analysis and intent detection"
    ],
    contributions: [
      "Conducted research on applying NLP to extract insights from job listings and candidate applications",
      "Provided consultancy for the design and implementation of NLP models that improved the accuracy and speed of job matching",
      "Contributed to enhancing the platform's ability to interpret user inputs, leading to the development of customized job recommendations and better communication tools",
      "Delivered reports on integrating fine-grained sentiment analysis and emotion detection to optimize user engagement on the Hirers.co.in platform"
    ],
    techStack: ["Natural Language Processing", "Sentiment Analysis", "Machine Learning", "Text Mining", "Information Retrieval"],
    impact: [
      { metric: "Matching Accuracy", value: "42%", description: "Improvement in job-candidate matching accuracy" },
      { metric: "Processing Time", value: "65%", description: "Reduction in time required to process job applications" },
      { metric: "User Engagement", value: "38%", description: "Increase in user engagement with the platform" },
      { metric: "Successful Placements", value: "47%", description: "Growth in successful job placements" }
    ]
  };

  const researchImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "NLP Research",
      caption: "Analyzing language patterns for job matching algorithms"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2788&q=80",
      alt: "Blue-collar workers",
      caption: "Connecting skilled workers with appropriate job opportunities"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Data Analysis",
      caption: "Extracting insights from unstructured job data"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Job Matching",
      caption: "AI-powered job recommendation systems in action"
    }
  ];

  const NumberTicker = ({ endValue, duration = 2000, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: true,
    });
    
    const countRef = useRef(count);
    const isStringValue = typeof endValue === 'string';
    
    const numericValue = isStringValue 
      ? parseFloat(endValue.replace(/[^0-9.]/g, ''))
      : endValue;
    
    useEffect(() => {
      countRef.current = count;
    }, [count]);
    
    useEffect(() => {
      let startTime;
      let animationFrameId;
      
      if (inView) {
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          const nextCount = Math.floor(progress * numericValue);
          
          if (countRef.current !== nextCount) {
            setCount(nextCount);
          }
          
          if (progress < 1) {
            animationFrameId = requestAnimationFrame(step);
          } else {
            setCount(numericValue);
          }
        };
        
        animationFrameId = requestAnimationFrame(step);
      }
      
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }, [inView, numericValue, duration]);
    
    return (
      <span ref={ref} className="transition-all duration-500">
        {isStringValue ? `${prefix}${count}${suffix}` : `${prefix}${count.toLocaleString()}${suffix}`}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-lab-navy to-blue-900 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-xs font-medium uppercase tracking-wider mb-4">
              Funded Research Project
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              NLP-Driven Optimization for <span className="text-blue-300">Blue-Collar Job Matching</span>
            </h1>
            <p className="text-lg md:text-xl font-sans font-light mb-8 text-white/80">
              Research and Implementation for Hirers.co.in | August 2023 - August 2024
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#overview" className="bg-white text-lab-navy font-sans py-2 px-6 rounded-full transition-colors duration-200 hover:bg-blue-100">
                Project Overview
              </a>
              <a href="#contributions" className="bg-transparent border border-white text-white font-sans py-2 px-6 rounded-full transition-colors duration-200 hover:bg-white/10">
                Key Contributions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              <div className="w-full md:w-1/3">
                <div className="sticky top-20">
                  <h2 className="text-2xl font-serif font-semibold text-lab-navy mb-6">Project Details</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm uppercase font-medium text-gray-500">Client</h3>
                      <p className="font-sans text-gray-800">{researchProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase font-medium text-gray-500">Duration</h3>
                      <p className="font-sans text-gray-800">{researchProject.duration}</p>
                    </div>
                    <div>
                      <h3 className="text-sm uppercase font-medium text-gray-500">Technologies</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {researchProject.techStack.map((tech, index) => (
                          <span key={index} className="inline-block px-3 py-1 bg-blue-100 text-lab-navy rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-serif font-semibold text-lab-navy mb-6">Project Overview</h2>
                <p className="font-sans text-gray-700 mb-8 leading-relaxed text-lg">
                  {researchProject.overview}
                </p>

                <h3 className="text-xl font-serif font-semibold text-lab-navy mb-4">Research Challenges</h3>
                <ul className="list-none space-y-3 mb-8">
                  {researchProject.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-200 text-lab-navy flex items-center justify-center mt-0.5 mr-3 font-medium">
                        {index + 1}
                      </div>
                      <p className="font-sans text-gray-700">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research in Action */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-lab-navy mb-8 text-center">Research in Action</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-sans">
            Visual insights into our NLP research and implementation for the Hirers.co.in platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {researchImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-2 group">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="text-gray-700 text-sm font-sans">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Contributions */}
      <section id="contributions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold text-lab-navy mb-8 text-center">Key Contributions</h2>
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12 font-sans">
            Our research team provided several critical insights and implementations to enhance the Hirers.co.in platform.
          </p>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl p-8 shadow-sm">
            <div className="space-y-6">
              {researchProject.contributions.map((contribution, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-lab-navy text-white flex items-center justify-center mr-4 text-lg font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-sans text-gray-800 leading-relaxed">{contribution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="py-16 bg-gradient-to-r from-lab-navy to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-semibold mb-8 text-center">Research Impact</h2>
          <p className="text-center max-w-3xl mx-auto mb-12 font-sans text-white/80">
            Our work delivered measurable improvements to the Hirers.co.in platform and its users.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {researchProject.impact.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center hover:bg-white/15 transition-all duration-300 hover:shadow-glow">
                <div className="text-5xl font-serif font-bold text-white mb-4">
                  <NumberTicker endValue={item.value} suffix="%" />
                </div>
                <h3 className="text-xl font-serif mb-3">{item.metric}</h3>
                <p className="font-sans text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-semibold text-lab-navy mb-6">Interested in Our Research?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8 font-sans">
            Connect with our research team to learn more about our NLP-driven job matching project or to explore potential collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-lab-navy text-white font-sans py-3 px-8 rounded-md transition-colors duration-200 hover:bg-blue-800">
              Contact Research Team
            </button>
            <a href="https://hirers.co.in" target="_blank" rel="noopener noreferrer" className="bg-white border border-lab-navy text-lab-navy font-sans py-3 px-8 rounded-md transition-colors duration-200 hover:bg-gray-50">
              Visit Hirers.co.in
            </a>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .hover\:shadow-glow:hover {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Research;