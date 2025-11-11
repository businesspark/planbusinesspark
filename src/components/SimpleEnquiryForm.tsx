import React, { useState } from "react";

interface SimpleEnquiryFormProps {
  onSuccess?: () => void;
}

const SimpleEnquiryForm = ({ onSuccess }: SimpleEnquiryFormProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`Quick Enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone: ${form.phone}\n\n` +
        `This is a quick enquiry from the website.`
      );
      const mailtoLink = `mailto:sales@aaraamproperties.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      setSuccess(true);
      setForm({ name: "", email: "", phone: "" });
      
      // Call onSuccess callback after a short delay
      if (onSuccess) {
        setTimeout(() => {
          onSuccess();
        }, 2000);
      }
    } catch (err) {
      setError("Failed to open email client. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground" htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={form.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-2 text-foreground" htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          required
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 00000 00000"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-700 transition-all w-full transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Opening Email..." : "Send Enquiry"}
      </button>
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
          ✓ Opening your email client... We'll get back to you soon!
        </div>
      )}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}
    </form>
  );
};

export default SimpleEnquiryForm;