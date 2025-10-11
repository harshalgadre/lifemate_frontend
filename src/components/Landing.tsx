import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Building2, Users, FileText, Clock, DollarSign, Heart, Stethoscope, Hospital, Activity, Syringe, Pill, Brain, Baby, Eye, Bone } from 'lucide-react';

export default function Landing() {
    const [searchQuery, setSearchQuery] = useState('');


    // const stats = [
    //     { icon: <Briefcase className="w-8 h-8" />, count: '45,234', label: 'Live Jobs' },
    //     { icon: <Building2 className="w-8 h-8" />, count: '12,458', label: 'Hospitals' },
    //     { icon: <Users className="w-8 h-8" />, count: '1,24,567', label: 'Doctors' },
    //     { icon: <FileText className="w-8 h-8" />, count: '8,923', label: 'New Jobs' }
    // ];

    // const categories = [
    //     { name: 'General Medicine', icon: <Stethoscope />, jobs: 4234 },
    //     { name: 'Surgery', icon: <Activity />, jobs: 2156 },
    //     { name: 'Pediatrics', icon: <Baby />, jobs: 1845 },
    //     { name: 'Cardiology', icon: <Heart />, jobs: 1623 },
    //     { name: 'Orthopedics', icon: <Bone />, jobs: 1456 },
    //     { name: 'Neurology', icon: <Brain />, jobs: 1234 },
    //     { name: 'Ophthalmology', icon: <Eye />, jobs: 987 },
    //     { name: 'Emergency Medicine', icon: <Syringe />, jobs: 1567 }
    // ];

    const recentJobs = [
        {
            id: 1,
            title: 'Senior Cardiologist',
            hospital: 'Apollo Hospitals',
            location: 'Mumbai, Maharashtra',
            type: 'Full time',
            salary: '₹15,00,000-₹25,00,000',
            posted: '2 days ago',
            department: 'Cardiology'
        },
        {
            id: 2,
            title: 'Consultant Pediatrician',
            hospital: 'Fortis Healthcare',
            location: 'Delhi, NCR',
            type: 'Full time',
            salary: '₹12,00,000-₹18,00,000',
            posted: '3 days ago',
            department: 'Pediatrics'
        },
        {
            id: 3,
            title: 'Emergency Medicine Specialist',
            hospital: 'Max Super Speciality',
            location: 'Bangalore, Karnataka',
            type: 'Full time',
            salary: '₹10,00,000-₹16,00,000',
            posted: '5 days ago',
            department: 'Emergency'
        },
        {
            id: 4,
            title: 'Orthopedic Surgeon',
            hospital: 'Manipal Hospitals',
            location: 'Pune, Maharashtra',
            type: 'Full time',
            salary: '₹18,00,000-₹28,00,000',
            posted: '1 week ago',
            department: 'Orthopedics'
        },
        {
            id: 5,
            title: 'General Physician',
            hospital: 'Narayana Health',
            location: 'Chennai, Tamil Nadu',
            type: 'Part time',
            salary: '₹8,00,000-₹12,00,000',
            posted: '1 week ago',
            department: 'General Medicine'
        }
    ];

    // const trustedHospitals = [
    //     'Apollo Hospitals',
    //     'Fortis Healthcare',
    //     'Max Healthcare',
    //     'Manipal Hospitals',
    //     'Narayana Health',
    //     'Medanta'
    // ];

    return (
        <div className="min-h-screen text bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="bg-emerald-600 p-2 rounded-lg">
                                <Stethoscope className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold text-gray-900">DocJob</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button className="text-gray-700 hover:text-emerald-600 font-medium transition hidden sm:block">
                                Sign In
                            </button>
                            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-medium transition">
                                Post A Job
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center md:gap-12 justify-between px-6 md:px-12 py-10">
                {/* Left: Image */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img
                        src="/src/assets/undraw_medicine_hqqg (1).svg"
                        alt="Doctor illustration"
                        className="w-3/4 md:w-full max-w-sm md:max-w-5xl"
                    />
                </div>

                {/* Right: Text + Search */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl md:text-5xl font-bold text-emerald-700 mb-3">
                        Find a medical role that matches your passion and expertise.
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Discover opportunities that align with your interests and skills, and take the next step in your medical career.
                    </p>

                    {/* Search Bar */}
                    <div className="relative flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                        <div className="relative w-full sm:w-80">
                            <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search job titles"
                                className="pl-10 pr-4 py-3 rounded-lg border border-gray-300 w-full focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition w-full sm:w-auto">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Recent Jobs Available</h2>
                            <p className="text-gray-600">Latest opportunities from top healthcare institutions</p>
                        </div>
                        <button className="text-emerald-600 font-medium hover:underline hidden sm:block">
                            View all
                        </button>
                    </div>

                    <div className="space-y-4">
                        {recentJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-2">
                                            <div>
                                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                                                <p className="text-gray-600">{job.hospital}</p>
                                            </div>
                                            <button className="text-gray-400 hover:text-emerald-600">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <Briefcase className="w-4 h-4" />
                                                <span>{job.department}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <DollarSign className="w-4 h-4" />
                                                <span>{job.salary}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{job.location}</span>
                                            </div>
                                        </div>

                                        <div className="mt-3">
                                            <span className="text-xs text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                                                {job.posted}
                                            </span>
                                        </div>
                                    </div>

                                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-lg font-medium transition whitespace-nowrap">
                                        Job Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 sm:hidden">
                        <button className="text-emerald-600 font-medium hover:underline">
                            View all jobs
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}