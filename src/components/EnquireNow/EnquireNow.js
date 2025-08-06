import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosRefresh } from "react-icons/io";
import axios from 'axios';
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

// Captcha generator function
const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
};

const EnquireNow = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [captcha, setCaptcha] = useState('');
  const [userCaptcha, setUserCaptcha] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
   else if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i.test(formData.email)) {
  newErrors.email = 'Invalid email format';
}
 if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (userCaptcha.trim() !== captcha) newErrors.captcha = 'Captcha does not match';
    return newErrors;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const newErrors = validate();

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
  } else {
    try {
      setIsSubmitting(true); 

      await axios.post('http://localhost:5000/api/contact', formData);

      setSuccessMessage('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setUserCaptcha('');
      setCaptcha(generateCaptcha());
      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setTimeout(() => {
        setIsSubmitting(false); 
      }, 1000); 
      setTimeout(() => setSuccessMessage(''), 4000);
    }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg p-4 mt-10 rounded-[25px] w-[90%] max-w-md shadow-lg relative">
        
        {/* Header with Close Icon */}
        <div className="flex justify-center items-center mb-6 relative">
          <h2 className="text-blue-300 text-3xl font-bold text-center">Get in touch.</h2>
          {onClose && (
            <button
              onClick={onClose}
              className="absolute right-0 top-1 text-white hover:text-red-400"
            >
              <FaTimes size={20} />
            </button>
          )}
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="text-green-400 text-sm mb-4 text-center">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-white text-sm block mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 "
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-white text-sm block mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-white text-sm block mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="text-white text-sm block mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Captcha */}
          <div>
            <div className="flex items-center gap-4 mb-2">
              <span className="bg-white text-black px-4 py-0 rounded font-mono tracking-widest text-lg select-none">
                {captcha}
              </span>
              <button
                type="button"
                onClick={() => {
                  setCaptcha(generateCaptcha());
                  setUserCaptcha('');
                }}
                className="text-sm text-blue-300 hover:text-blue-500"
              >
                <IoIosRefresh />
              </button>
            </div>
            <input
              type="text"
              placeholder="Enter above captcha"
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.captcha && <p className="text-red-400 text-sm mt-1">{errors.captcha}</p>}
          </div>

          {/* Submit */}
         <button
  type="submit"
  disabled={isSubmitting}
  className={`w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
  }`}
>
  {!isSubmitting ? (
    <>
      Submit
    </>
  ) : (
    <>
      Sending
      <motion.span
        initial={{ x: 0, opacity: 1 }}
        animate={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <FaPaperPlane className="inline-block" />
      </motion.span>
    </>
  )}
</button>

        </form>
      </div>
    </div>
  );
};

export default EnquireNow;
