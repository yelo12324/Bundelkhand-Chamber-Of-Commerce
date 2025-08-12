// 'use client';
// import Image from 'next/image';
// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// export default function ContactPage() {
//   const scrollRef = useRef(null);
//   const { ref: headingRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
//   const ref = useRef(null);

//   const contact = [
//     {
//       img:"/contact1.jpg",
//     },
//     {
//       img:"/contact2.jpg",
//     },
//     {
//       img:"/contact3.jpg",
//     },
//     {
//       img:"/contact4.jpg",
//     },
//     {
//       img:"/contact6.jpg",
//     },
//     {
//       img:"/contact7.jpg",
//     },
//     {
//       img:"/contact8.jpg",
//     },
//     {
//       img:"/contact9.jpg",
//     },
//     {
//       img:"/contact10.jpg",
//     },
//     {
//       img:"/contact11.jpg",
//     },
//     {
//       img:"/contact12.jpg",
//     },
//     {
//       img:"/contact13.jpg",
//     },
//     {
//       img:"/contact14.jpg",
//     },
//     {
//       img:"/contact15.jpg",
//     },
//     {
//       img:"/contact16.jpg",
//     },
//     {
//       img:"/contact17.jpg",
//     },
//     {
//       img:"/contact19.jpg",
//     },
//     {
//       img:"/contact20.jpg",
//     },
//   ]

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollSpeed = 1;

//     const scroll = () => {
//       if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;
//       scrollAmount += scrollSpeed;
//       if (scrollAmount >= scrollContainer.scrollWidth) {
//         scrollAmount = 0;
//       }
//       scrollContainer.scrollLeft = scrollAmount;
//     };

//     const interval = setInterval(scroll, 10);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col md:flex-row min-h-fit bg-gray-100">
//       {/* Left auto-scrolling section */}
//       <div className="w-full md:w-1/2 p-4 overflow-hidden">
//         <div
//           ref={scrollRef}
//           className="flex flex-row justify-center items-center gap-6 overflow-x-scroll whitespace-nowrap no-scrollbar "
//         >
//          {contact.map((item, i) => (
//            <div
//              key={i}
//              className="w-80 md:h-[35rem] h-[25rem] bg-orange-500 rounded-xl shadow-md flex-shrink-0"
//              style={{
//                backgroundImage: `url(${item.img})`,
//                backgroundSize: "cover",
//                backgroundPosition: "center",
//              }}
//            />
//          ))}
//         </div>
//       </div>

//       {/* Right contact form */}
//       <div className="w-full relative md:w-1/2 p-8 bg-white shadow-lg flex flex-col overflow-hidden justify-center items-center">
//           {/* <div className="absolute right-[-40rem] top-[-15rem] inset-0 opacity-20 z-0 pointer-events-none">
//               <Image
//                 src="/bg.png"
//                 alt="Background Watermark"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//           </div> */}
//         <motion.h1
//           ref={headingRef}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="inline-block text-4xl w-full mb-8 font-extrabold text-orange-500 text-center after:content-[''] after:block after:h-[5px] after:w-[26%] md:after:w-[18%] after:bg-orange-500 after:mx-auto after:mt-0 after:rounded-full"
//         >
//           Contact Us
//         </motion.h1>

//  <motion.form
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.8, ease: 'easeOut' }}
//       className="space-y-4"
//     >
//       <input
//         type="text"
//         placeholder="Name"
//         required
//         className="w-full p-3 border text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-1 focus:ring-orange-500"
//       />

//       <div className="flex flex-col sm:flex-row gap-4">
//         <input
//           type="email"
//           placeholder="E-Mail"
//           required
//           className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//         <input
//           type="text"
//           placeholder="Phone"
//           required
//           className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
//         />
//       </div>

//       <textarea
//         placeholder="Type Message"
//         required
//         className="w-full p-3 text-black h-62 bg-orange-200 rounded-tl-xl border-none rounded-br-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
//       />

//       <button
//         type="submit"
//         className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
//       >
//         Send
//       </button>
//     </motion.form>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ContactPage() {
  const scrollRef = useRef(null);
  const { ref: headingRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const formRef = useRef(null);
  const [alert, setAlert] = useState({ show: false, message: '', isError: false });

  const contact = [
    { img: "/contact1.jpg" },
    { img: "/contact2.jpg" },
    { img: "/contact3.jpg" },
    { img: "/contact4.jpg" },
    { img: "/contact6.jpg" },
    { img: "/contact7.jpg" },
    { img: "/contact8.jpg" },
    { img: "/contact9.jpg" },
    { img: "/contact10.jpg" },
    { img: "/contact11.jpg" },
    { img: "/contact12.jpg" },
    { img: "/contact13.jpg" },
    { img: "/contact14.jpg" },
    { img: "/contact15.jpg" },
    { img: "/contact16.jpg" },
    { img: "/contact17.jpg" },
    { img: "/contact19.jpg" },
    { img: "/contact20.jpg" },
  ];

  // Animated alert component
  const CustomAlert = ({ message, isError, onClose }) => (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-lg z-50 flex items-center gap-4 max-w-md w-full ${isError ? 'bg-red-500' : 'bg-green-500'} text-white`}
    >
      <span>{isError ? '❌' : '✅'} {message}</span>
      <button
        onClick={onClose}
        className="ml-auto bg-white text-black px-2 py-1 rounded-full hover:bg-gray-200"
      >
        ×
      </button>
    </motion.div>
  );

  useEffect(() => {
    console.log('ContactPage useEffect running'); // Debug log

    // === AUTO-SCROLLING IMAGES ===
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) {
      console.error('Scroll container not found');
      return;
    }

    let scrollAmount = 0;
    const scrollSpeed = 1;

    const scroll = () => {
      if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scroll, 10);

    // === CONTACT FORM HANDLER ===
    const initializeForm = () => {
      const form = formRef.current;
      console.log('Form element:', form); // Debug log
      if (form) {
        console.log('Form event listener attached'); // Debug log
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          console.log('Form submitted'); // Debug log
          const formData = {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            phone: form.querySelector('input[name="phone"]').value,
            typeMessage: form.querySelector('textarea[name="typeMessage"]').value,
          };
          console.log('Form data:', formData); // Debug log
          if (!formData.name || !formData.email || !formData.phone || !formData.typeMessage) {
            console.log('Validation failed: All fields are required');
            setAlert({ show: true, message: 'Please fill all required fields', isError: true });
            setTimeout(() => setAlert({ show: false, message: '', isError: false }), 3000);
            return;
          }
          try {
            const res = await fetch('http://localhost:5000/contact', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            console.log('Fetch response status:', res.status); // Debug log
            const data = await res.json();
            console.log('Fetch response data:', data); // Debug log
            if (res.ok) {
              setAlert({ show: true, message: 'Message sent successfully!', isError: false });
              form.reset();
            } else {
              setAlert({ show: true, message: data.error || 'Something went wrong', isError: true });
            }
            setTimeout(() => setAlert({ show: false, message: '', isError: false }), 3000);
          } catch (err) {
            console.error('Fetch error:', err.message, err.stack); // Debug log
            setAlert({ show: true, message: 'Failed to send message. Check console for details.', isError: true });
            setTimeout(() => setAlert({ show: false, message: '', isError: false }), 3000);
          }
        });
      } else {
        console.error('Form not found'); // Debug log
      }
    };

    // Try initializing form immediately
    initializeForm();

    // Retry after a delay in case DOM isn't fully loaded
    const timer = setTimeout(initializeForm, 1000);

    return () => {
      clearInterval(interval); // Cleanup scroll interval
      clearTimeout(timer); // Cleanup form timer
    };
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-fit bg-gray-100">
      {/* Animated Alert */}
      <AnimatePresence>
        {alert.show && (
          <CustomAlert
            message={alert.message}
            isError={alert.isError}
            onClose={() => setAlert({ show: false, message: '', isError: false })}
          />
        )}
      </AnimatePresence>

      {/* Left auto-scrolling section */}
      <div className="w-full md:w-1/2 p-4 overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-row justify-center items-center gap-6 overflow-x-scroll whitespace-nowrap no-scrollbar"
        >
          {contact.map((item, i) => (
            <div
              key={i}
              className="w-80 md:h-[35rem] h-[25rem] bg-orange-500 rounded-xl shadow-md flex-shrink-0"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>

      {/* Right contact form */}
      <div className="w-full relative md:w-1/2 p-8 bg-white shadow-lg flex flex-col overflow-hidden justify-center items-center">
        <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="inline-block text-4xl w-full mb-8 font-extrabold text-orange-500 text-center after:content-[''] after:block after:h-[5px] after:w-[26%] md:after:w-[18%] after:bg-orange-500 after:mx-auto after:mt-0 after:rounded-full"
        >
          Contact Us
        </motion.h1>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="w-full p-3 border text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-1 focus:ring-orange-500"
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail"
              required
              className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              required
              className="w-full p-3 text-black bg-orange-200 rounded-tl-xl border-none rounded-br-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <textarea
            name="typeMessage"
            id="typeMessage"
            placeholder="Type Message"
            required
            className="w-full p-3 text-black h-62 bg-orange-200 rounded-tl-xl border-none rounded-br-xl resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Send
          </button>
        </motion.form>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}