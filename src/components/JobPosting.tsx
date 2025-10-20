import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bookmark, 
  Share2, 
  Clock, 
  DollarSign, 
  Moon, 
  CheckSquare,
  MapPin,
  GraduationCap,
  Award,
  Briefcase,
  ChevronLeft,
  Building2
} from 'lucide-react';

export default function JobPosting() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  
  const toggleCheck = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const responsibilities = [
    "Assess patient health status and develop nursing care plans.",
    "Administer medications and treatments as prescribed.",
    "Monitor and record patient progress and vital signs.",
    "Collaborate with healthcare team members to ensure comprehensive care."
  ];

  const facilities = [
    "State-of-the-art emergency department",
    "Advanced monitoring equipment",
    "Dedicated support staff"
  ];

  const similarJobs = [
    { title: "ICU Nurse", hospital: "City General Hospital", posted: "3 days ago", image: "🏥" },
    { title: "Pediatric Nurse", hospital: "Children's Hospital of the City", posted: "1 week ago", image: "🏥" },
    { title: "Operating Room Nurse", hospital: "City Surgical Center", posted: "2 weeks ago", image: "🏥" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">CareMate</span>
            </div>
            <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="hover:text-gray-900 transition">Find Jobs</a>
              <a href="#" className="hover:text-gray-900 transition">Find Candidates</a>
              <a href="#" className="hover:text-gray-900 transition">Career Advice</a>
              <a href="#" className="hover:text-gray-900 transition">Resources</a>
              <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Post a Job</a>
            </nav>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sm text-gray-500 mb-6 flex items-center space-x-2"
        >
          <span>Jobs</span>
          <span>/</span>
          <span>Nursing</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Registered Nurse</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
            >
              {/* Job Title & Actions */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Registered Nurse - Emergency Department
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">St. Luke's Medical Center</span>
                    <span>•</span>
                    <span>Posted 2 days ago</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleBookmark}
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Bookmark 
                      className={`w-5 h-5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`}
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition"
                  >
                    Apply
                  </motion.button>
                </div>
              </motion.div>

              {/* Job Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-6">
                {[
                  { icon: Clock, text: "Full-time" },
                  { icon: Moon, text: "Night Shift" },
                  { icon: CheckSquare, text: "Benefits Eligible" },
                  { icon: DollarSign, text: "40K/month" }
                ].map((tag, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700"
                  >
                    <tag.icon className="w-4 h-4" />
                    {tag.text}
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="mb-8">
                <p className="text-gray-600 leading-relaxed">
                  Join our dynamic Emergency Department team at St. Luke's Medical Center, where you'll provide critical care to patients in urgent situations. As a Registered Nurse, you'll assess patient conditions, administer treatments, and collaborate with physicians to ensure optimal patient outcomes. This role requires a compassionate approach, quick decision-making skills, and the ability to thrive in a fast-paced environment. We offer a supportive team atmosphere and opportunities for professional growth.
                </p>
              </motion.div>

              {/* Responsibilities */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <div className="space-y-3">
                  {responsibilities.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 group cursor-pointer"
                      onClick={() => toggleCheck(`resp-${idx}`)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition ${
                          checkedItems[`resp-${idx}`] 
                            ? 'bg-blue-600 border-blue-600' 
                            : 'border-gray-300 group-hover:border-blue-400'
                        }`}
                      >
                        {checkedItems[`resp-${idx}`] && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </motion.div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Shift Information */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Shift Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Schedule", value: "Flexible, including weekends" },
                    { label: "Hours per week", value: "22 hours" },
                    { label: "Shift", value: "Night shift (7 PM - 7 AM)" }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4 }}
                      className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100"
                    >
                      <div className="text-sm text-gray-600 mb-1">{item.label}</div>
                      <div className="font-semibold text-gray-900">{item.value}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Facilities */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Facilities</h2>
                <div className="space-y-3">
                  {facilities.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="flex items-start gap-3 group cursor-pointer"
                      onClick={() => toggleCheck(`fac-${idx}`)}
                    >
                      <motion.div
                        whileTap={{ scale: 0.9 }}
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition ${
                          checkedItems[`fac-${idx}`] 
                            ? 'bg-blue-600 border-blue-600' 
                            : 'border-gray-300 group-hover:border-blue-400'
                        }`}
                      >
                        {checkedItems[`fac-${idx}`] && (
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-3 h-3 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M5 13l4 4L19 7" />
                          </motion.svg>
                        )}
                      </motion.div>
                      <span className="text-gray-700">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Requirements */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Education</div>
                      <div className="text-gray-600">Bachelor of Science in Nursing (BSN)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Certifications</div>
                      <div className="text-gray-600">Registered Nurse (RN) license, Basic Life Support (BLS), Advanced Cardiovascular Life Support (ACLS)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">Experience</div>
                      <div className="text-gray-600">Minimum 2 years of experience in an emergency department setting</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* About */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About St. Luke's Medical Center</h2>
                <p className="text-gray-600 leading-relaxed">
                  St. Luke's Medical Center is a leading healthcare provider committed to delivering exceptional patient care. Our mission is to improve the health and well-being of our community through innovative medical practices and compassionate service. We offer a supportive work environment, opportunities for professional development, and a commitment to work-life balance.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition flex items-center justify-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition"
                >
                  Apply Now
                </motion.button>
              </motion.div>
            </motion.div>
          </div>

          {/* Similar Jobs Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Similar Jobs</h3>
              <div className="space-y-4">
                {similarJobs.map((job, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200 cursor-pointer group"
                  >
                    <div className="flex gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        {job.image}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-1">Posted {job.posted}</div>
                        <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition">{job.title}</h4>
                        <div className="text-sm text-gray-600">{job.hospital}</div>
                        <motion.button
                          whileHover={{ x: 4 }}
                          className="text-sm text-blue-600 font-medium mt-2 inline-flex items-center gap-1"
                        >
                          View
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}