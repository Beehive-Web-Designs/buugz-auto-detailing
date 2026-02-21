"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Calendar, Clock, Car, Mail, Phone, User, CheckCircle } from "lucide-react";

export default function BookPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    "Deep Extraction (Interior)",
    "Ceramic Shield (Paint Lab)",
    "Paint Correction",
    "Water Repellent (Nano Coating)",
    "Engine Bay Detail",
    "Full Detail Package",
  ];

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Booking submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        vehicle: "",
        service: "",
        date: "",
        time: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="text-white selection:bg-blue-500 min-h-screen">
      <Nav />
      <section className="pt-32 pb-20 px-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-600 text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
              BOOK YOUR DETAIL
            </div>
            <h1 className="hero-title text-white mb-6">
              <span className="gradient-text">SECURE</span>
              <br />
              <span className="pl-20 italic">YOUR SPOT</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Ready to transform your vehicle? Fill out the form below and
              we&apos;ll get back to you within 24 hours to confirm your
              appointment.
            </p>
          </div>

          {/* Booking Form */}
          <div className="glass-panel p-12 border-2 border-blue-500/50">
            {submitted ? (
              <div className="text-center py-20">
                <CheckCircle className="w-20 h-20 text-blue-500 mx-auto mb-6" />
                <h2 className="brand-font font-black text-4xl mb-4">
                  BOOKING RECEIVED!
                </h2>
                <p className="text-gray-400 text-lg">
                  We&apos;ll contact you within 24 hours to confirm your
                  appointment.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <User className="w-4 h-4" />
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <Mail className="w-4 h-4" />
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <Phone className="w-4 h-4" />
                      PHONE
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <Car className="w-4 h-4" />
                      VEHICLE
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      value={formData.vehicle}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="2020 Tesla Model 3"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    SERVICE
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      PREFERRED DATE
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                      <Clock className="w-4 h-4" />
                      PREFERRED TIME
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                    ADDITIONAL NOTES
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Any special requests or additional information..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full px-16 py-6 gradient-bg text-black font-black text-xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)]"
                  >
                    SUBMIT BOOKING REQUEST
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-panel p-6 text-center">
              <Phone className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">PHONE</p>
              <p className="font-bold">(555) 123-4567</p>
            </div>
            <div className="glass-panel p-6 text-center">
              <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">EMAIL</p>
              <p className="font-bold">info@buugz.com</p>
            </div>
            <div className="glass-panel p-6 text-center">
              <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">HOURS</p>
              <p className="font-bold">Mon-Sat: 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
