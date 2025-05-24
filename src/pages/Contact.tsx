import { useState, ChangeEvent, FormEvent } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-navy mb-10">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded"
              />
            </div>
            <button
              type="submit"
              className="btn-primary px-6 py-3 bg-cyan text-white rounded hover:bg-navy transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Info & Map */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-lg mb-1">Office Address</h4>
              <p>Plot No. 36, Kakadeo, Govind Nagar Road, Kanpur, UP 208025</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Phone</h4>
              <p>+91 817-605-9363</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Email</h4>
              <p>info@develupers.in</p>
            </div>
            <div>
              <iframe
                title="Develupers Location"
                className="w-full h-64 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.948835987729!2d80.30138287541908!3d26.842820262121235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47d8b2a7e1ab%3A0xd1d0d3cf2fc1832f!2sDevelupers!5e0!3m2!1sen!2sin!4v1716557050444!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
