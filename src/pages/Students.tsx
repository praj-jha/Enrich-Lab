import React, { useState, useEffect, useCallback } from 'react';
import img1 from '../assets/RAVLEENKAUR.jpeg'
import img2 from '../assets/VikasSharma.jpg'
import img3 from '../assets/Dipika Jain.jpg'
import img4 from '../assets/aditi sharma.jpeg'
import img5 from '../assets/Sahil Raheja.jpg'
import img6 from '../assets/arunima jaiswal.jpg'
import img7 from '../assets/geetanjali.png'
import img8 from '../assets/Nitin Sachdeva.jpg'
import img9 from '../assets/Ravi Ranjan.jpeg'
import img10 from '../assets/Rohit Beniwal.jpg'

const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Simplified student data with only required fields
  const allStudents = [
    {
      id: 1,
      name: "RAVLEEN KAUR",
      email: "ravleen.kaur@university.edu",
      phdStatus: "Completed",
      phdTenure: "2021-2025",
      thesisTitle: "Quantum error correction algorithms for fault-tolerant quantum computing",
      currentDesignation: "Research Assistant",
      currentOrganization: "Quantum Computing Lab, University",
      biography: "Ravleen is focused on developing next-generation quantum error correction algorithms. She has presented her work at several international conferences and received recognition for her innovative approach to quantum computing challenges.",
      imgUrl: img1,
      type: "phd"
    },
    {
      id: 2,
      name: "Vikas Sharma",
      email: "vikassharma12387@gmail.com",
      phdStatus: "Ongoing",
      phdTenure: "2020-2024",
      thesisTitle: "Design and Development of Healthcare Solution using Digital Twin",
      currentDesignation: "Research Scholar",
      currentOrganization: "Delhi Technological University, India",
      biography: "Vikas Sharma is a research scholar in the Department of Information Technology at Delhi Technological University, Delhi, India. He received his M. Tech & B. Tech degree in Information Technology from SRM Institute of Science and Technology University. His research interests are the Digital Twin, Cloud computing, Malware Analysis, IoT & HCI.",
      imgUrl: img2,
      type: "phd"
    },
    {
      id: 3,
      name: "Dipika Jain",
      email: "dipikajain12.24@gmail.com",
      phdStatus: "Completed",
      phdTenure: "2022-2026",
      thesisTitle: "Automatic Personality Detection using Deep Learning Models in User-Generated Content",
      currentDesignation: "Assistant Professor",
      currentOrganization: "Bennett University, Greater Noida",
      biography: "Dipika Jain is an assistant professor in Bennett University. She has completed her PhD from Delhi Technological University in August 2024. She has worked as guest faculty at Netaji Subhas University of Technology from August 2017 till June 2020. She has her M.Tech and B.Tech from Maharshi Dayanand University, Rohtak.",
      imgUrl: img3,
      type: "phd"
    },
    {
      id: 4,
      name: "Dr Aditi Sharma",
      email: "aditi.sharma@thapar.edu",
      phdStatus: "Completed",
      phdTenure: "2021-2025",
      thesisTitle: "Modelling and Application of Biomarkers for Affective State Mining using Soft Computing Techniques",
      currentDesignation: "Assistant Professor",
      currentOrganization: "Thapar Institute of Engineering and Technology",
      biography: "Dr. Aditi Sharma is currently working as Assistant Professor at Thapar Institute of Engineering and Technology. She has more than 5 years of teaching experience. Dr. Sharma has received her PhD in Computer Science and Engineering from Delhi Technological University. Her area of interest is Affective Computing, Text Summarization, Machine Learning. She has multiple publications in reputed journals of Web of Science index.",
      imgUrl: img4,
      type: "phd"
    },
    {
      id: 5,
      name: "Sahil Raheja",
      email: "sahilraheja78@gmail.com",
      phdStatus: "Completed",
      phdTenure: "2019-2023",
      thesisTitle: "Edge detection in Digital Images using soft computing techniques",
      currentDesignation: "TGT computer science in Govt. School Delhi",
      currentOrganization: "Sarvodya Kanya Vidyalaya, Ballimaran Chandni chowk Delhi",
      biography: "I had completed my PhD from Delhi Technological University. I have completed M.Tech in Information systems from Delhi Technological University in 2012. I had also worked as an assistant professor in School of computing science and engineering at Galgotias University, Greater Noida, India and have a total teaching experience of 15 years. My area of interests are Image and Video Processing, Machine Vision and Soft computing. I have published 6 research papers in reputed journals and conferences. I am also a member of IEEE and IETE. I am also a life member of Indian Society for Technical Education (ISTE). I am also a member of International Association of Engineers (IAENG). I am also a member of International Association of Computer Science and Information Technology (IACSIT). I am also a member of International Association of Engineers (IAENG). I am also a member of International Association of Computer Science and Information Technology (IACSIT).",
      imgUrl: img5,
      type: "phd"
    },
    {
      id: 6,
      name: "Arunima Jaiswal",
      email: "arunimajaiswal@igdtuw.ac.in",
      phdStatus: "Completed",
      phdTenure: "2023-2027",
      thesisTitle: "Sentiment analysis on social media using soft computing techniques",
      currentDesignation: "Assistant professor",
      currentOrganization: "IGDTUW",
      biography: "Arunima Jaiswal is a Ph.D in Computer Science & Engineering from Delhi Technological University, Delhi, India. She has received her M.Tech (Master of Technology) degree from Delhi Technological University, Delhi, India and B.Tech (Bachelor of Technology) in Information Technology from University School of Information Technology, Guru Gobind Singh Indraprastha University, Delhi, India. Currently, she is working as a University Assistant Professor in Dept. of Computer Science & Engineering at the Indira Gandhi Delhi Technical University for Women, Delhi, India. She has many publications to her credit in various Journals with high impact factor and International Conferences. Her research interests are in the area of Sentiment Analysis, Social Media Analytics, Soft Computing, Machine Learning, Deep Learning, Social & Semantic Web.",
      imgUrl: img6,
      type: "phd"
    },
    {
      id: 7,
      name: "Geetanjali",
      email: "geeta.anjali.garg@gmail.com",
      phdStatus: "Completed",
      phdTenure: "N/A",
      thesisTitle: "Modelling of context-based sentiment analysis and its applications",
      currentDesignation: "Graduate Student",
      currentOrganization: "University Materials Department",
      biography: "Dr. Geetanjali Garg is an Assistant Professor in the Department of Software Engineering at Delhi Technological University. She has received her Ph.D. in Computer Engineering from the Department of Computer Engineering, Delhi Technological University in 2020. Her research interests include Social media analytics, soft computing, context aware computing and intelligent systems.",
      imgUrl: img7,
      type: "phd"
    },
    {
      id: 8,
      name: "Nitin Sachdeva",
      email: "nits.usit@gmail.com",
      phdStatus: "Completed",
      phdTenure: "2023-2027",
      thesisTitle: "CYBERBULLYING DETECTION ON SOCIAL MEDIA USING DEEP LEARNING MODELS",
      currentDesignation: "Assistant Professor",
      currentOrganization: "GCET",
      biography: "Dr Nitin Sachdeva is a Ph.D in CSE from DTU, Delhi, India. He has received his M.Tech from NIT-J and B.Tech from USIT, GGSIPU, Delhi. He has many publications to his credit in various Journals with high impact factor and International Conferences. His research interests are in the area of Cyberbullying, Social Media Analytics, Soft Computing, Machine Learning, Deep Learning.",
      imgUrl: img8,
      type: "phd"
    },
    {
      id: 9,
      name: "Ravi Ranjan",
      email: "raviranjan_23phdit502@dtu.ac.in",
      phdStatus: "Completed",
      phdTenure: "2024-2028 (planned)",
      thesisTitle: "Design and Development of Framework for Financial Market Surveillance using Social Media Analytics",
      currentDesignation: "Research Scholar",
      currentOrganization: "Delhi Technological University",
      biography: "Ravi Ranjan is currently pursuing PhD in Information Technology from Delhi Technological University under the supervision of Prof. Kapil Sharma, and Dr. Akshi Kumar. He has experience of both Academia and Industry. He has done his B.Tech in Computer Science and Engineering from NIT Suarthkal, and M.Tech in Software Engineering from Delhi Technological University.",
      imgUrl: img9,
      type: "phd"
    },
    {
      id: 10,
      name: "Rohit Beniwal",
      email: "dr.rohitbeniwal@gmail.com",
      phdStatus: "Completed",
      phdTenure: "2022-2026",
      thesisTitle: "Social and Semantic Web Capabilities for Improving Software Development Activities",
      currentDesignation: "Assistant Professor",
      currentOrganization: "Delhi Technological University",
      biography: "Dr. Rohit Beniwal has received his Ph.D. (Computer Engineering) from University of Delhi, India. He did his M.Tech (Master of Technology) and B.Tech (Bachelor of Technology) degrees in Information Technology from Guru Gobind Singh Indraprastha University, Delhi. He is currently working as a University Assistant Professor in Department of Computer Science & Engineering at the Delhi Technological University, Delhi, India.",
      imgUrl: img10,
      type: "phd"
    },
    {
      id: 11,
      name: "Abhilasha Sharma",
      email: "abhilasha's email",
      phdStatus: "Completed",
      phdTenure: "2022-2026",
      thesisTitle: "Opinion Mining of Big data for Digital Governance. ",
      currentDesignation: "Assistant Professor",
      currentOrganization: "Delhi Technological University",
      biography: "Dr. Abhilasha Sharma is an assistant professor in the department of software engineering department in DTU. She has completed her PhD in 2019.",
      imgUrl: "/api/placeholder/150/150",
      type: "phd"
    },
  ];

  // Memoize filtered students to prevent unnecessary recalculations
  const filteredStudents = React.useMemo(() => {
    return activeFilter === 'all' 
      ? allStudents 
      : allStudents.filter(student => student.type === activeFilter);
  }, [activeFilter]);

  // Memoize displayed students to fix flickering issue
  const displayedStudents = React.useMemo(() => {
    return showAll ? filteredStudents : filteredStudents.slice(0, 8);
  }, [filteredStudents, showAll]);

  // Handle opening modal with useCallback to prevent recreation
  const openModal = useCallback((student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  // Handle closing modal with useCallback
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedStudent(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Clean up when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle clicking outside modal to close
  const handleOutsideClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen, closeModal]);

  // Toggle between showing all students and showing fewer
  const toggleShowAll = useCallback(() => {
    setShowAll(prev => !prev);
  }, []);

  // Change active filter
  const setFilter = useCallback((filter) => {
    setActiveFilter(filter);
    setShowAll(false); // Reset to showing fewer students when filter changes
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-lab-navy to-lab-navy/80">
      {/* Hero Section */}
      <section className="text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-lab-navy opacity-80"></div>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-black text-white rounded-full text-xs font-medium uppercase tracking-wider mb-4">
              Research Community
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center">
              Meet Our <span className="text-transparent bg-clip-text text-white">Brilliant Minds</span>
            </h1>
            <p className="text-lg md:text-xl font-sans font-light mb-8 text-center max-w-3xl mx-auto">
              Our diverse community of researchers is pushing the boundaries of science and technology, 
              making discoveries that shape the future across multiple disciplines.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'all' 
                    ? 'bg-lab-burgundy text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                All Students
              </button>
              <button 
                onClick={() => setFilter('phd')} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'phd' 
                    ? 'bg-lab-burgundy text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                PhD Candidates
              </button>
              <button 
                onClick={() => setFilter('masters')} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === 'masters' 
                    ? 'bg-lab-burgundy text-white' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Masters Students
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Students Gallery */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center mb-12">
            {displayedStudents.map((student) => (
              <div 
                key={student.id}
                className="group cursor-pointer w-full max-w-xs"
                onClick={() => openModal(student)}
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <div className="aspect-w-1 aspect-h-1 w-full h-72">
                      <img 
                        src={student.imgUrl} 
                        alt={student.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = `/api/placeholder/150/150`;
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white px-4 py-2 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        View Profile
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-serif font-semibold text-lab-navy">{student.name}</h3>
                    <p className="font-sans text-lab-burgundy text-sm font-medium">{student.currentDesignation}</p>
                    <p className="font-sans text-gray-500 text-sm">{student.currentOrganization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStudents.length > 8 && (
            <div className="text-center mb-6">
              <button 
                onClick={toggleShowAll}
                className="px-6 py-2 bg-lab-navy text-white rounded-md hover:bg-lab-navy/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-lab-navy focus:ring-opacity-50"
              >
                {showAll ? "Show Less" : `Show All ${filteredStudents.length} Students`}
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Join the Lab */}
      <section className="py-16 bg-lab-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-serif font-semibold text-lab-navy mb-6 text-center">Join Our Laboratory</h2>
            
            <p className="font-sans text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              We're always looking for passionate, curious minds to join our research community. 
              Explore opportunities for students at all academic levels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="bg-lab-navy/5 rounded-lg p-5 hover:bg-lab-navy/10 transition-colors">
                <h3 className="text-xl font-serif font-semibold text-lab-burgundy mb-3">PhD Positions</h3>
                <p className="font-sans text-gray-700 text-sm mb-3">
                  Join our doctoral program to conduct cutting-edge research with world-class faculty mentorship.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Full funding available</li>
                  <li>Access to advanced facilities</li>
                  <li>Interdisciplinary collaboration</li>
                </ul>
                <a href="#" className="text-lab-navy font-medium text-sm hover:text-lab-burgundy">Learn more →</a>
              </div>
              
              <div className="bg-lab-navy/5 rounded-lg p-5 hover:bg-lab-navy/10 transition-colors">
                <h3 className="text-xl font-serif font-semibold text-lab-burgundy mb-3">Masters Positions</h3>
                <p className="font-sans text-gray-700 text-sm mb-3">
                  Gain research experience through thesis projects or research assistantships.
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4 space-y-1">
                  <li>Project-based opportunities</li>
                  <li>Industry connections</li>
                  <li>Competitive funding available</li>
                </ul>
                <a href="#" className="text-lab-navy font-medium text-sm hover:text-lab-burgundy">Learn more →</a>
              </div>
            </div>
            
            <div className="text-center">
              <button className="px-8 py-3 bg-lab-burgundy text-white font-medium rounded-md hover:bg-opacity-90 transition-colors shadow-md">
                Apply Now
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Questions? Contact <a href="mailto:research@university.edu" className="text-lab-navy hover:text-lab-burgundy">research@university.edu</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modal with student details */}
      {isModalOpen && selectedStudent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4" 
          onClick={handleOutsideClick}
          aria-modal="true"
          role="dialog"
        >
          <div 
            className="bg-white text-black rounded-xl max-w-3xl w-full relative overflow-hidden animate-fadeIn shadow-xl" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors z-10 text-gray-800"
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-lab-navy/10">
                <div className="p-6 flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                    <img 
                      src={selectedStudent.imgUrl}
                      alt={selectedStudent.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `/api/placeholder/150/150`;
                        e.target.onerror = null;
                      }}
                    />
                  </div>
                  
                  <h2 className="text-2xl font-bold text-center mb-1">{selectedStudent.name}</h2>
                  <p className="text-lab-burgundy mb-3 text-center">{selectedStudent.currentDesignation}</p>
                  <p className="text-gray-700 text-center mb-4">{selectedStudent.currentOrganization}</p>
                  
                  <div className="w-full p-3 bg-white rounded-lg shadow-inner mt-2">
                    <p className="text-sm text-gray-600 mb-1">
                      <span className="font-medium">Email:</span> {selectedStudent.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">PhD Status:</span> {selectedStudent.phdStatus}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3 p-6">
                <div className="mb-6">
                  <h3 className="text-lab-navy font-medium mb-2">PhD Tenure</h3>
                  <p className="text-gray-800">{selectedStudent.phdTenure}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lab-navy font-medium mb-2">Thesis Title</h3>
                  <p className="text-gray-800">{selectedStudent.thesisTitle}</p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lab-navy font-medium mb-2">Biography</h3>
                  <p className="text-gray-800">{selectedStudent.biography}</p>
                </div>
                
                <div className="mt-8">
                  <a 
                    href={`mailto:${selectedStudent.email}`}
                    className="px-4 py-2 bg-lab-burgundy text-white rounded-md hover:bg-lab-burgundy/90 transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation Definitions */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }
        
        @supports not ((backdrop-filter: blur(4px)) or (-webkit-backdrop-filter: blur(4px))) {
          .backdrop-blur-sm {
            background-color: rgba(0, 0, 0, 0.7);
          }
        }
      `}</style>
    </div>
  );
};

export default Students;