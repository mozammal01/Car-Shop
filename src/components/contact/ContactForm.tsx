"use client";

import { useState } from "react";

export default function Contact() {
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      setFormError("One or more fields have an error. Please check and try again.");
      return;
    }
    setFormError("");
  };

  return (
    <section className=" flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold text-black mb-6">CONTACT AMY WALKER</h2>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              placeholder="Name"
              required
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-base focus:border-black focus:outline-none transition-all duration-1000 ease-in-out"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-base focus:border-black focus:outline-none transition-all duration-1000 ease-in-out"
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
              required
              className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2 text-base focus:border-black focus:outline-none transition-all duration-1000 ease-in-out"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              id="message"
              placeholder="Message"
              required
              className="peer w-full border-2 rounded-md p-2 border-gray-300 bg-transparent text-base focus:border-black focus:outline-none resize-none h-24 transition-all duration-1000 ease-in-out"
            />
            {/* <label
              htmlFor="message"
              className="absolute left-0 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500"
            >
              Message
            </label> */}
            {/* <p className="text-sm text-red-500 mt-1 hidden peer-invalid:block">Please fill out this field.</p> */}
          </div>

          {/* Checkbox */}
          <div>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" required className="w-4 h-4 border border-gray-400" />I agree with the site’s{" "}
              <a href="#" className="text-primary underline">
                privacy policy
              </a>
            </label>
            <p className="text-sm text-red-500 mt-1 hidden peer-invalid:block">Please fill out this field.</p>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-white font-semibold px-6 py-3 hover:bg-blue-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 4.26a2 2 0 001.94 0L21 8M3 8v8a2 2 0 002 2h14a2 2 0 002-2V8M3 8l9-5 9 5"
              />
            </svg>
            GET IN TOUCH
          </button>

          {/* Error message */}
          {formError && <div className="mt-4 border border-red-300 bg-red-50 text-red-700 text-sm p-3 rounded">{formError}</div>}
        </form>
      </div>
    </section>
  );
}
