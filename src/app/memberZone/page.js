'use client'

import React, { useEffect, useState } from "react";
import { ChevronDown } from 'lucide-react';
import Nav from '@/components/sections/Nav';
import Footer from '@/components/sections/Footer';
import { AnimatePresence , motion } from 'framer-motion';
import toast, { Toaster } from "react-hot-toast";


const tabs = ['Service Members', 'Industry Members', 'Business Members', 'Enroll Now'];

export default function Page() {
  const [activeTab, setActiveTab] = useState('Service Members');
  const [isOpen, setIsOpen] = useState(false);
  // const [data, setData] = useState([]);             //  nominee
  const [service, setService] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [business, setBusiness] = useState([]);
   const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Select Department");

  const departments = ["Service", "Industry", "Business"];

  // ------------------- fetch nominated members --------------------

// useEffect(() => {
//   fetch("https://backend-bcoc.onrender.com/memberZone/nominee")
//     .then(res => res.json())
//     .then(rawData => {
//       const formatted = rawData.map((row, index) => {
//         const execKey = Object.keys(row).find(
//           k => k.toLowerCase().includes("executive head")
//         );
//         return {
//           id: row["S. No"] || index + 1,
//           name: row["Name"] || "",
//           executive: execKey ? row[execKey] : ""
//         };
//       });
//       setData(formatted);
//     })
//     .catch(err => console.error("Error loading members:", err));
// }, []);


  // ---------------- Fetch service members -------------
  useEffect(() => {
    fetch("https://backend-bcoc.onrender.com/memberZone/service")
      .then(res => res.json())
      .then(rawData => {
        const formatted = rawData.map((row, index) => ({
          id: row["Reg. No."] || index + 1,
          Name: row["Name of Representative"] || "",
          Organization: row["Member Organization"] || "",
          MobNo: row["Mob. No."] || ""
        }));
        setService(formatted);
      })
      .catch(err => console.error("Error loading service members:", err));
  }, []);

  // ----------------- Fetch industry members ---------------

  useEffect(() => {
    fetch("https://backend-bcoc.onrender.com/memberZone/industry")
      .then(res => res.json())
      .then(rawData => {
        const formatted = rawData.map((row, index) => ({
          id: row["Reg. No."] || index + 1,
          Name: row["Name of Representative"] || "",
          Organization: row["Member Organization"] || "",
          MobNo: row["Mob. No."] || ""
        }));
        setIndustry(formatted);
      })
      .catch(err => console.error("Error loading industry members:", err));
  }, []);

  // ----------- Fetch business members --------------

  useEffect(() => {
    fetch("https://backend-bcoc.onrender.com/memberZone/business")
      .then(res => res.json())
      .then(rawData => {
        const formatted = rawData.map((row, index) => ({
          id: row["Reg. No."] || index + 1,
          Name: row["Name"] || "",
          FirmName : row["Firm Name"] || "",
          Mobile: row["Mobile No."] || ""
        }));
        setBusiness(formatted);
      })
      .catch(err => console.error("Error loading business members:", err));
  }, []);

  // ---------------Enroll Now ----------------------


const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    mobile: e.target.mobile.value,
    department: selected,
    business: e.target.business?.value || "",
  };

  try {
    const res = await fetch("https://backend-bcoc.onrender.com/memberZone/enrollNow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success(data.message || "Details sent successfully!");
      e.target.reset();
      setSelected("Select Department"); // reset department
    } else {
      toast.error(data.error || "Something went wrong, please try again.");
    }
  } catch (err) {
    toast.error("Failed to send details. Try again later.");
  }
};


  const fadeInProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
        <Toaster position="top-right" reverseOrder={false} />   {/* ✅ Add this */}
      <div>
        <Nav/>
      </div>

      {/* Hero Section */}
      <div className="px-10">
        <div
          className="hidden w-full min-h-[400px] lg:flex flex-col items-center rounded-2xl justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/memberZone.jpg')" }}
        ></div>

        <motion.h1
          {...fadeInProps}
          className="inline-block md:text-6xl text-2xl w-full font-bold md:font-extrabold text-orange-500 text-center mt-40 md:mt-10 md:mb-10 mb-10 after:content-[''] after:block md:after:h-[5px] after:h-[3px] after:w-[30%] md:after:w-[20%] after:bg-orange-500 after:mx-auto after:mt-0 md:after:mt-1 after:rounded-full"
        >
          Members Zone
        </motion.h1>
      </div>

      {/* Content Section */}
      <div className="flex-1 container mx-auto px-4 sm:px-10 font-sans">

        {/* Mobile dropdown */}
        <div className="relative block md:hidden w-full max-w-full mb-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-3 rounded-lg bg-orange-500 text-white font-medium shadow-md focus:outline-none"
          >
            <span>{activeTab}</span>
            <ChevronDown
              size={22}
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>

          <div
            className={`absolute z-50 mt-1 w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[300px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
            }`}
          >
            <div className="overflow-y-auto max-h-[300px]">
              {tabs.map((tab, index) => (
                <div key={tab}>
                  <button
                    onClick={() => {
                      setActiveTab(tab);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 transition-colors ${
                      activeTab === tab
                        ? 'bg-orange-500 text-white font-semibold'
                        : 'text-black hover:bg-orange-100'
                    }`}
                  >
                    {tab}
                  </button>
                  {index !== tabs.length - 1 && (
                    <div className="border-t border-gray-200"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop tabs */}
        <div className="hidden md:flex justify-center flex-wrap gap-3 border-b border-gray-300 pb-3">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-5 py-2 text-md font-semibold transition-all duration-300 rounded-md 
                ${activeTab === tab 
                  ? 'text-orange-500 font-semibold' 
                  : 'text-gray-600 hover:text-orange-400'
                }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-orange-500 rounded-full animate-[slideIn_0.3s_ease-in-out]"></span>
              )}
            </button>
          ))}
        </div>

        {/* Nominated Member Table */}

        {/* {activeTab === 'Nominated Members' && (
          <div className="mt-8 overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white animate-fadeIn">
            <table className="min-w-full text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
                <tr>
                  <th className="p-4">S. No</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Executive Head</th>
                </tr>
              </thead>
              <tbody>
                {data.map((member, idx) => (
                  <tr
                    key={member.id ?? idx}
                    className={`transition-colors duration-200 ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-orange-50`}
                  >
                    <td className="p-4">{member.id}</td>
                    <td className="p-4 text-blue-600 cursor-pointer hover:underline">
                      {member.name}
                    </td>
                    <td className="p-4">{member.executive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}

        
{/* Service Members Table */}
{activeTab === 'Service Members' && (
  <div className="mt-8 overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white animate-fadeIn">
    <table className="min-w-full text-left text-gray-700">
      <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
        <tr>
          <th className="p-4">Reg. No</th>
          <th className="p-4">Name</th>
          <th className="p-4">Member Organization</th>
          <th className="p-4">Mobile No.</th>
        </tr>
      </thead>
      <tbody>
        {service.map((member, idx) => (
          <tr
            key={member.id ?? idx}
            className={`transition-colors duration-200 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-orange-50`}
          >
            <td className="p-4">{member.id}</td>
            <td className="p-4">{member.Name}</td>
            <td className="p-4">{member.Organization}</td>
            <td className="p-4">{member.MobNo}</td> 
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}



{/* Industry Members Table */}
{activeTab === 'Industry Members' && (
  <div className="mt-8 overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white animate-fadeIn">
    <table className="min-w-full text-left text-gray-700">
      <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
        <tr>
          <th className="p-4">Reg. No</th>
          <th className="p-4">Name</th>
          <th className="p-4">Member Organization</th>
          <th className="p-4">Mobile No.</th>
        </tr>
      </thead>
      <tbody>
        {industry.map((member, idx) => (
          <tr
            key={member.id ?? idx}
            className={`transition-colors duration-200 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-orange-50`}
          >
            <td className="p-4">{member.id}</td>
            <td className="p-4">{member.Name}</td>
            <td className="p-4">{member.Organization}</td>
            <td className="p-4">{member.MobNo}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{/* Business Members Table */}
{activeTab === 'Business Members' && (
  <div className="mt-8 overflow-x-auto shadow-lg rounded-lg border border-gray-200 bg-white animate-fadeIn">
    <table className="min-w-full text-left text-gray-700">
      <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
        <tr>
          <th className="p-4">Reg. No</th>
          <th className="p-4">Name</th>
          <th className="p-4">Firm Name</th>
          <th className="p-4">Mobile No.</th>
        </tr>
      </thead>
      <tbody>
        {business.map((member, idx) => (
          <tr
            key={member.id ?? idx}
            className={`transition-colors duration-200 ${
              idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            } hover:bg-orange-50`}
          >
            <td className="p-4">{member.id}</td>
            <td className="p-4">{member.Name}</td>
            <td className="p-4">{member.FirmName}</td>
            <td className="p-4">{member.Mobile}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{/* Enroll Now Form */}

{activeTab === "Enroll Now" && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="mt-8 shadow-xl rounded-2xl border border-orange-200 bg-white p-8 max-w-2xl mx-auto"
  >
    <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
      Enroll Now
    </h2>
   
   <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text" name="name"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email" name="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Mobile No.
        </label>
        <input
          type="tel" name="mobile"
          placeholder="Enter your mobile number"
          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
        />
      </div>

      {/* Department with animated dropdown */}
<div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Department
      </label>

      {/* Button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition bg-white text-gray-700"
      >
        {selected}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Animated dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border border-orange-200 rounded-lg mt-2 bg-white shadow-md"
          >
            {departments.map((dept) => (
              <li
                key={dept}
                onClick={() => {
                  setSelected(dept);
                  setOpen(false);
                }}
                className="px-4 py-2 cursor-pointer hover:bg-orange-100 transition"
              >
                {dept}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
      {/* Business Info */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Business Details
        </label>
        <textarea
          placeholder="Tell us more about your business..."
          rows={4}
          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition"
        ></textarea>
      </div>

      {/* Submit */}
      <div className="flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="bg-orange-500 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:bg-orange-600 transition-all"
        >
          Submit
        </motion.button>
      </div>
    </form>
  </motion.div>
)}


      </div>

      <div className='mt-20 md:mt-10'>
        <Footer />
      </div>

      {/* Animation style */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
}
