import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    termsAccepted: false,
  });

  const [submitted, setSubmitted] = useState(false);
   const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions.");
      return;
    }
  
    try {
      const response = await axios.post("http://localhost:2600/api/users", {
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        agreedToTerms: formData.termsAccepted,
      });
  
      console.log("Response:", response.data);
      setSubmitted(true);
  
      // Navigate only after successful submission and terms accepted
      setTimeout(() => navigate("/home"), 2000);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Submission failed.");
      } else {
        alert("Network error or server not running.");
      }
      console.error("Axios error:", error);
    }
  };
  

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6 text-center">Welcome To Ventureslate</h2>
      {submitted ? (
        <div className="text-green-600 text-center">
          Form submitted successfully!
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact
            </label>
            <input
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-start">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2 mt-1"
              required
            />
            <label className="text-sm text-gray-600">
              I agree to the{" "}
              <a
                href="/terms"
                className="text-blue-600 underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}
