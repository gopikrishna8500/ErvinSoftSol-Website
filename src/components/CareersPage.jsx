import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, ChevronDown, ChevronUp, X } from 'lucide-react';
// import Footer from './Footer'; // Ensure you have a Footer component

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState({ location: true, technology: true });
  const [filters, setFilters] = useState({ location: [], technology: [] });
  const [selectedJob, setSelectedJob] = useState(null); // For Read More modal
  const [applyJob, setApplyJob] = useState(null); // For Apply Job modal

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      if (current.includes(value)) return { ...prev, [category]: current.filter(item => item !== value) };
      return { ...prev, [category]: [...current, value] };
    });
  };

  const locations = [
    "Milwaukee", "REMOTE", "St Louis, MO", "Charlotte, NC", "Sunnyvale, CA", 
    "Remote", "New York City, NY", "Ann Arbor, MI", "New York, NYC", 
    "Chicago", "Houston", "Temple Terrace, FL", "Alpharetta, GA", 
    "Bedminster, NJ", "Levittown", "NYC"
  ];

  const technologies = [
    "Java", "J2EE", "UI", "CSS", "HTML5", "SDET", "Agile", "APIs", "REST", 
    "JDBC", "JUnit", "Devops", "Python", "CI/CD", "Pyspark", "Data Engineers", 
    "Azure Stack", "Databricks", "Data Lake", "DevOps", "Functions", "SQL", 
    "Spark", "advanced SQL", "Data Visualization", "Looker", "Proptech", 
    "Mortgage space", "Azure", "Data Factory", "API", "HTTP/HTTPS", 
    "Hadoop/MapReduce", "MongoDB", "MongoDB OpenID", "TLS", "OAuth", "SAML", 
    "Real estate Integration", "C#", "MVC", "JavaScript", "jQuery", "Angular(2/4/5)", 
    "Redux", "Object Oriented concepts", "Asynch Messaging", 
    "Multi-threading", "Spring Boot/ Spring MVC framework / REST Web Services", 
    "Bagdata", "Redshift", "AWS", "Scala", "S3", "C++", "Python", 
    "HDFS", "Hive", "HBase", "Kafka", "NiFi", "Oozie", "Splunk", "SM", "HR", 
    "ITBM", "ITOM", "Performance Analytics", "agile", "E2E systems", "SAFe", 
    "Digital", "Marketing", "AWS cloud", "Linux OS", "RFP", "Peoplesoft", 
    "Sql", "Hadoop", "Spring", "Spring-Boot"
  ];

  const jobs = [
    { id: 1, title: 'Full Stack Web Developer', location: 'Levittown, NY', technology: 'Full Stack', type: 'Fulltime', experience: '9+ Years', duration: 'Fulltime', description: 'We are developing a mobile application for Restaurant Specials compatible with devices such as iOS and Android.', postedTime: '12-08-2021' },
    { id: 2, title: 'Sr. Bigdata Developer', location: 'Temple Terrace, FL', technology: 'Big Data', type: 'Contract', experience: '9+ Years', duration: '12+ Months', description: 'Looking for a Senior Big Data Data Engineer to work with a small team.', postedTime: '12-08-2021' },
    { id: 3, title: 'Business Data Analyst', location: 'Charlotte, NC', technology: 'Data Analysis', type: 'Contract', experience: '', duration: '12+ Months', description: 'MUST HAVE SKILLS: Strong background in Excel. Experience with hybrid remote work.', postedTime: '02-08-2021' },
    { id: 4, title: '.NET Fullstack Lead Developer', location: 'NYC', technology: '.NET', type: 'Contract', experience: '', duration: '12+ Months', description: 'Demonstrated ability to learn new technologies and lead a remote team.', postedTime: '02-08-2021' },
    { id: 5, title: 'Sr. Bigdata Engineer', location: 'Temple Terrace, FL', technology: 'Big Data', type: 'Contract', experience: '', duration: '12+ Months', description: 'Client is a Telecom company focused on creating powerful and intelligent enterprises through deep data awareness, data integration and advanced data analytics.', postedTime: '02-08-2021' },
    { id: 6, title: 'Certified Java Developer with AWS Exp', location: 'Bedminster, NJ', technology: 'Java, AWS', type: 'Contract', experience: '', duration: '12+ Months', description: 'Who we are: BlueJeans Advanced Collaboration Team (ACT). We push the limits of collaboration technology.', postedTime: '29-07-2021' },
    { id: 7, title: 'AI/ML Engineer', location: 'Alpharetta, GA', technology: 'AI, ML', type: 'Contract', experience: '', duration: '12+ Months', description: 'This position will drive profitable growth and business innovation by applying cutting edge AI/ML techniques.', postedTime: '28-07-2021' },
    { id: 8, title: 'Lead / Sr. Bigdata Engineer', location: 'Chicago, Houston', technology: 'Big Data', type: 'Contract', experience: '', duration: '12+ Months', description: 'Client is a software products and services company focused on creating powerful and intelligent enterprises.', postedTime: '28-07-2021' },
    { id: 9, title: 'Systems Analyst', location: 'Temple Terrace, FL', technology: 'Systems Analysis', type: 'Contract', experience: '', duration: '12 Months', description: 'As a senior member of our Service Assurance team, responsible for telecom projects.', postedTime: '28-07-2021' },
    { id: 10, title: 'ServiceNow Solution Architect', location: 'New York City', technology: 'ServiceNow', type: 'Contract', experience: '', duration: '12+ Months', description: 'Required Qualifications: Proven consulting experience as a key technical resource.', postedTime: '13-07-2021' },
    { id: 11, title: 'Sr. Python / C++ Developer', location: 'Remote', technology: 'Python, C++', type: 'Contract', experience: '9-10 Years', duration: '12+ Months', description: 'Sr. Developer with experience of Python and C++ to migrate an on-prem solution to the Cloud.', postedTime: '07-07-2021' },
    { id: 12, title: 'Back End Java Developer', location: 'Remote', technology: 'Java', type: 'Contract', experience: '', duration: 'Ongoing', description: 'Backend Java Developers for 7-Eleven. Rate: 50-60/hr W2. Visa Restrictions apply.', postedTime: '07-07-2021' },
    { id: 13, title: 'Enterprise Architect', location: 'Milwaukee', technology: 'Enterprise Architecture', type: 'Contract', experience: '15-20 Years', duration: '12+ Months', description: 'Immediate need for Enterprise Architect with large scale experience.', postedTime: '09-06-2021' },
    { id: 14, title: 'Senior Data Analyst', location: 'New York', technology: 'Data Analysis', type: 'Contract', experience: '', duration: '12+ Months', description: 'A real estate company with expansion goals. Support the expansion with data team.', postedTime: '08-06-2021' },
    { id: 15, title: 'API Architect', location: 'Ann Arbor, MI', technology: 'API, Software Engineering', type: 'Contract', experience: '', duration: '12+ Months', description: 'Senior Software Engineer for API Architecture. Started in 1911 as a small company in Michigan.', postedTime: '01-06-2021' },
    { id: 16, title: 'Sr. Data Engineer with Azure Exp', location: 'Remote', technology: 'Azure, Data Engineering', type: 'Contract', experience: '10+ Years', duration: '12+ Months', description: 'Immediate Need - Sr. Data Engineer with Azure Experience (100% Remote).', postedTime: '31-05-2021' },
    { id: 17, title: 'Devops Engineer with Python Development', location: 'Charlotte, NC', technology: 'Python, DevOps', type: 'Contract', experience: '', duration: 'Long Term', description: 'Implements cloud technology solutions requested by business units.', postedTime: '31-05-2021' },
    { id: 18, title: 'Python - Pyspark Data Engineer', location: 'Remote', technology: 'Python, Pyspark', type: 'Contract', experience: '', duration: '12+ Months', description: 'Immediate Need for Python-Pyspark Data Engineer (100% Remote). Required: Azure Stack, SQL, DevOps.', postedTime: '31-05-2021' },
    { id: 19, title: 'Android Developer', location: 'Sunnyvale, CA', technology: 'Android', type: 'Contract', experience: '', duration: '12+ Months', description: 'Android Developer for mobile app development. Remote till COVID ends.', postedTime: '31-05-2021' },
    { id: 20, title: 'Python/Pyspark Data Engineers', location: 'Remote', technology: 'Python, Pyspark', type: 'Contract', experience: '', duration: '12+ Months', description: 'Must Have: Azure stack (Databricks, Data Lake, DevOps, Functions), SQL, Python, Pyspark, Spark. End to end data pipeline build.', postedTime: '31-05-2021' },
    { id: 21, title: 'Data Analyst', location: 'New York City, NY', technology: 'SQL, Data Visualization', type: 'Contract', experience: '', duration: '12+ Months', description: 'Must have skills: advanced SQL, Data Visualization, Looker, good domain knowledge of Proptech and Mortgage space.', postedTime: '27-05-2021' },
    { id: 22, title: 'SDET Engineer', location: 'St Louis, MO', technology: 'SDET', type: 'Contract', experience: '', duration: '12+ Months', description: 'Position for SDET Engineer. Remote till COVID ends.', postedTime: '27-05-2021' },
    { id: 23, title: 'Lead UI Developer', location: 'Remote', technology: 'UI, Frontend', type: 'Contract', experience: '', duration: '1+ Year', description: 'Understand, prioritize, and translate the client situation and goals into effectively designed products.', postedTime: '27-05-2021' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = filters.location.length ? filters.location.includes(job.location) : true;
    const matchesTechnology = filters.technology.length ? filters.technology.some(tech => job.technology.includes(tech)) : true;
    return matchesSearch && matchesLocation && matchesTechnology;
  });

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="relative text-white py-24">
        <div className="absolute inset-0 " style={{
          backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Ervinsoft India Pvt Ltd</h1>
            <p className="text-blue">Explore exciting IT Staffing & Recruitment opportunities</p>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Jobs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-blue-900 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Search className="w-5 h-5" /> Find Job
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-3/12 w-full space-y-4">
            {/* Location Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button onClick={() => toggleSection('location')} className="flex items-center justify-between w-full mb-4">
                <h3 className="font-semibold text-lg text-gray-900">Location</h3>
                {expandedSections.location ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.location && (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {locations.map(loc => (
                    <label key={loc} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                        checked={filters.location.includes(loc)}
                        onChange={() => handleCheckboxChange('location', loc)}
                      />
                      <span className="text-gray-700">{loc}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Technology Filter */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <button onClick={() => toggleSection('technology')} className="flex items-center justify-between w-full mb-4">
                <h3 className="font-semibold text-lg text-gray-900">Technology</h3>
                {expandedSections.technology ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {expandedSections.technology && (
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {technologies.map(tech => (
                    <label key={tech} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-400"
                        checked={filters.technology.includes(tech)}
                        onChange={() => handleCheckboxChange('technology', tech)}
                      />
                      <span className="text-gray-700">{tech}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Job Listings */}
          <main className="lg:w-8/12 w-full space-y-6">
            {filteredJobs.map(job => (
              <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-3">{job.title}</h2>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1"><MapPin className="w-4 h-4" /><span>{job.location}</span></div>
                      <div className="flex items-center gap-1"><Briefcase className="w-4 h-4" /><span>{job.technology}</span></div>
                      <div className="flex items-center gap-1">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${job.type.includes('Remote') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700 text-sm">
                      {job.description.substring(0, 150)}...
                      <button onClick={() => setSelectedJob(job)} className="text-blue-600 font-medium ml-1">Read More</button>
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <button onClick={() => setApplyJob(job)} className="bg-blue-900 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors">
                      Apply
                    </button>
                    <span className="text-gray-400 text-xs">Posted on: {job.postedTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>

      {/* Read More Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button onClick={() => setSelectedJob(null)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold mb-4">{selectedJob.title}</h2>
            <p className="text-gray-700 mb-2">{selectedJob.description}</p>
            <p className="text-gray-500 text-sm">Location: {selectedJob.location}</p>
            <p className="text-gray-500 text-sm">Technology: {selectedJob.technology}</p>
            <p className="text-gray-500 text-sm">Type: {selectedJob.type}</p>
            <p className="text-gray-500 text-sm">Experience: {selectedJob.experience}</p>
            <p className="text-gray-500 text-sm">Duration: {selectedJob.duration}</p>
          </div>
        </div>
      )}

      {/* Apply Job Modal */}
      {applyJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button onClick={() => setApplyJob(null)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Apply for {applyJob.title}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Email</label>
                <input type="email" placeholder="email@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Phone Number</label>
                <input type="text" placeholder="+123456789" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1">Your Resume</label>
                <input type="file" className="w-full" />
              </div>
              <button type="submit" className="w-full bg-blue-900 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      {/* <Footer /> */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-900 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center"
      >
        ↑
      </button>
    </div>
  );
};

export default CareersPage;
