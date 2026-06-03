// import cover from "../assets/images/aboutnew.jpeg";


// export default function Contact() {
//   return (
//     <div className="w-full bg-[#F6F3EC]">

//       {/* TOP COVER IMAGE */}
//       <div>
//         <img
//           src={cover}
//           alt="cover"
//           className="
//             w-full
//             h-[50vh]       /* Mobile → half screen */
//             md:h-screen    /* Desktop → full screen */
//             object-cover
//           "
//         />
//       </div>

//       {/* CONTACT FORM SECTION */}
//       <section className="px-6 py-16 max-w-4xl mx-auto">
//         {/* HEADING */}
//         <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-6">
//           Contact us
//         </h1>
//         {/* DESCRIPTION */}
//         <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
//           Please provide detailed information in the form below to help us tailor an accurate quote.
//           We typically respond within 24 hours, but if it's urgent or you haven't heard from us,
//           don't hesitate to reach out via the contact details below.
//         </p>
//         {/* EMAIL + PHONE */}
//         <p className="text-center text-gray-900 font-medium">
//           vividsnaps141@gmail.com
//         </p>
//         <p className="text-center text-gray-900 font-medium mb-10">
//           +91 9908850542 &nbsp;|&nbsp; 
//         </p>

//         {/* FORM */}
//         <form className="bg-{#F8F5EF} p-10 rounded-xl shadow-lg space-y-6">

//           {/* Name */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Name</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Email Address */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Email Address</label>
//             <input
//               type="email"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Contact Number */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Contact Number</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Event Details */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Event Details</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Location</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Date/Duration */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Date/Duration</label>
//             <input
//               type="text"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             />
//           </div>

//           {/* Preferred form of contact */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">
//               Preferred Form of Contact
//             </label>
//             <select
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             >
//               <option>Select</option>
//               <option>Call</option>
//               <option>E-mail</option>
//               <option>WhatsApp Message</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block text-gray-800 font-medium mb-1">Message</label>
//             <textarea
//               rows="5"
//               className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:border-black outline-none"
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg text-lg hover:bg-opacity-80 transition"
//           >
//             Submit
//           </button>

//         </form>
//       </section>
//     </div>
//   );
// // }

// import { useState } from "react";
// import cover from "../assets/images/aboutnew.jpeg";

// export default function Contact() {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     eventDetails: "",
//     location: "",
//     date: "",
//     preferredContact: "",
//     message: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log(formData);

//     // Example API call
//     try {
//       const response = await fetch("http://localhost:5000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       alert(data.message);

//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="w-full bg-[#F6F3EC]">

//       {/* TOP COVER IMAGE */}
//       <div>
//         <img
//           src={cover}
//           alt="cover"
//           className="w-full h-[50vh] md:h-screen object-cover"
//         />
//       </div>

//       {/* CONTACT FORM SECTION */}
//       <section className="px-6 py-16 max-w-4xl mx-auto">

//         <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-6">
//           Contact us
//         </h1>

//         <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
//           Please provide detailed information in the form below.
//         </p>

//         <form
//           onSubmit={handleSubmit}
//           className="bg-[#F8F5EF] p-10 rounded-xl shadow-lg space-y-6"
//         >

//           {/* Name */}
//           <div>
//             <label className="block mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-1">Contact Number</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Event Details */}
//           <div>
//             <label className="block mb-1">Event Details</label>
//             <input
//               type="text"
//               name="eventDetails"
//               value={formData.eventDetails}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Location */}
//           <div>
//             <label className="block mb-1">Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Date */}
//           <div>
//             <label className="block mb-1">Date/Duration</label>
//             <input
//               type="text"
//               name="date"
//               value={formData.date}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Preferred Contact */}
//           <div>
//             <label className="block mb-1">
//               Preferred Form of Contact
//             </label>

//             <select
//               name="preferredContact"
//               value={formData.preferredContact}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             >
//               <option value="">Select</option>
//               <option value="Call">Call</option>
//               <option value="Email">E-mail</option>
//               <option value="WhatsApp">WhatsApp Message</option>
//             </select>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block mb-1">Message</label>

//             <textarea
//               rows="5"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full border px-4 py-3 rounded-lg"
//             />
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg"
//           >
//             Submit
//           </button>

//         </form>
//       </section>
//     </div>
//   );
// }

import { useState } from "react";
import emailjs from "@emailjs/browser";
import cover from "../assets/images/aboutnew.jpeg";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDetails: "",
    location: "",
    date: "",
    preferredContact: "",
    message: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await emailjs.send(
        "service_grvlq24",
        "template_vp1pell",
        formData,
        "FsUkaFRqh-gd9wXDD"
      );

      alert("Message Sent Successfully!");

      // Clear form after submit
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDetails: "",
        location: "",
        date: "",
        preferredContact: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Failed to send message");

    }
  };

  return (
    <div className="w-full bg-[#F6F3EC]">

      {/* COVER IMAGE */}
      <div>
        <img
          src={cover}
          alt="cover"
          className="w-full h-[50vh] md:h-screen object-cover"
        />
      </div>

      {/* CONTACT SECTION */}
      <section className="px-6 py-16 max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-6">
          Contact us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
          Please provide detailed information in the form below.
        </p>

        <p className="text-center font-medium">
          vividsnaps141@gmail.com
        </p>

        <p className="text-center font-medium mb-10">
          +91 9908850542
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-[#F8F5EF] p-10 rounded-xl shadow-lg space-y-6"
        >

          {/* NAME */}
          <div>
            <label className="block mb-1 font-medium">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-1 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* PHONE */}
          <div>
            <label className="block mb-1 font-medium">
              Contact Number
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* EVENT DETAILS */}
          <div>
            <label className="block mb-1 font-medium">
              Event Details
            </label>

            <input
              type="text"
              name="eventDetails"
              value={formData.eventDetails}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* LOCATION */}
          <div>
            <label className="block mb-1 font-medium">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* DATE */}
          <div>
            <label className="block mb-1 font-medium">
              Date / Duration
            </label>

            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* PREFERRED CONTACT */}
          <div>
            <label className="block mb-1 font-medium">
              Preferred Form of Contact
            </label>

            <select
              name="preferredContact"
              value={formData.preferredContact}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            >
              <option value="">Select</option>
              <option value="Call">Call</option>
              <option value="Email">E-mail</option>
              <option value="WhatsApp">WhatsApp Message</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-1 font-medium">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg hover:opacity-80 transition"
          >
            Submit
          </button>

        </form>
      </section>
    </div>
  );
}