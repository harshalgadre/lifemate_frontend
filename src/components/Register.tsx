import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Stethoscope, User, Mail, Lock } from "lucide-react";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white overflow-hidden">
      {/* Left Section - Register Form */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -40 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col h-screen justify-center items-center md:w-1/2 p-6 sm:p-10"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="flex items-center mb-6 space-x-2"
        >
          <div className="bg-[#8F59ED] p-2 rounded-lg shadow-md">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">DocJob</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
        >
          Create Your Account
        </motion.h2>
        <p className="text-gray-600 mb-8 text-center max-w-sm">
          Join the DocJob community and start connecting with the best doctors
          and employers.
        </p>

        {/* Register Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full max-w-sm space-y-5"
        >
          {/* Name */}
          <div className="relative group">
            <User
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#8F59ED] transition-colors"
              size={18}
            />
            <input
              type="text"
              placeholder="Full name"
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#8F59ED] focus:ring-2 focus:ring-[#cdb7f3] outline-none text-gray-700 transition-all"
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#8F59ED] transition-colors"
              size={18}
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#8F59ED] focus:ring-2 focus:ring-[#cdb7f3] outline-none text-gray-700 transition-all"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#8F59ED] transition-colors"
              size={18}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:border-[#8F59ED] focus:ring-2 focus:ring-[#cdb7f3] outline-none text-gray-700 transition-all"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-[#8F59ED] hover:bg-[#693eb4] text-white py-3 rounded-full font-medium transition shadow-md"
          >
            Register
          </motion.button>

          {/* Footer Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-[#8F59ED] hover:underline">
              Login here
            </a>
          </p>
        </motion.form>
      </motion.div>

      {/* Right Section - Image (Hidden on Mobile) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 40 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex md:w-1/2 items-center justify-center"
      >
        <img
          src="/src/assets/register.png"
          alt="Register illustration"
          className="w-3/4 h-auto hover:scale-105 transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
};

export default Register;
