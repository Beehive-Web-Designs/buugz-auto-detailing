"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import { Calendar, Clock, Car, Mail, Phone, User, CheckCircle, AlertCircle } from "lucide-react";

type FormState = {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  service: string;
  date: string;
  time: string;
  message: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

export default function BookPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    message: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });

    const form = e.currentTarget;
    const formDataObj = new FormData(form);

    if (formDataObj.get("bot-field")?.toString().trim()) {
      setFormData(initialFormData);
      setFormState({
        status: "success",
        message: "We'll contact you within 24 hours to confirm your appointment.",
      });
      return;
    }

    const params = new URLSearchParams();
    params.append("form-name", "booking");

    formDataObj.forEach((value, key) => {
      if (key !== "bot-field") {
        params.append(key, value.toString());
      }
    });

    try {
      const response = await fetch("/book", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
        redirect: "manual",
      });

      if (response.ok || response.status === 302 || response.status === 0) {
        setFormData(initialFormData);
        setFormState({
          status: "success",
          message: "We'll contact you within 24 hours to confirm your appointment.",
        });
      } else {
        throw new Error(`Form submission failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormState({
        status: "error",
        message: "Something went wrong. Please try again or call us directly.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="text-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto max-w-5xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-focus text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
              BOOK YOUR DETAIL
            </div>
            <h1 className="hero-title font-bold text-white mb-6 text-center">
              <span className="gradient-text">SECURE</span>
              <br />
              <span className="italic">YOUR SPOT</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-normal">
              Ready to transform your vehicle? Fill out the form below and
              we&apos;ll get back to you within 24 hours to confirm your
              appointment.
            </p>
          </div>

          {/* Booking Form */}
          <div className="glass-panel p-5 sm:p-8 md:p-12 border-2 border-focus/50">
            {formState.status === "success" ? (
              <div className="text-center py-20">
                <CheckCircle className="w-20 h-20 text-focus mx-auto mb-6" />
                <h2 className="brand-font font-black text-4xl mb-4">
                  BOOKING RECEIVED!
                </h2>
                <p className="text-gray-400 text-lg">{formState.message}</p>
              </div>
            ) : (
              <>
                <h2 className="sr-only">Booking Form</h2>
                <form
                name="booking"
                method="POST"
                action="/book"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6 md:space-y-8"
              >
                <input type="hidden" name="form-name" value="booking" />
                <div
                  className="absolute left-[-9999px] h-px w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <label htmlFor="bot-field">
                    Don&apos;t fill this out if you&apos;re human
                  </label>
                  <input
                    id="bot-field"
                    type="text"
                    name="bot-field"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {formState.status === "error" && (
                  <div className="flex items-start gap-3 border border-red-500/30 bg-red-500/10 p-4">
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400 mt-0.5" />
                    <p className="text-sm text-red-400">{formState.message}</p>
                  </div>
                )}
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
                      placeholder="2020 Tesla Model 3"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                {/* <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-2">
                    <CheckCircle className="w-4 h-4" />
                    SERVICE
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* Date and Time */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
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
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div> */}

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
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 focus:outline-none focus:border-focus transition-colors resize-none"
                    placeholder="Any special requests or additional information..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    disabled={formState.status === "submitting"}
                    className="items-center justify-center cursor-pointer px-16 py-6 gradient-bg text-black font-black text-xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(23,201,244,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {formState.status === "submitting" ? "SENDING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto">
            <div className="glass-panel p-6 text-center">
              <Phone className="w-8 h-8 text-focus mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">PHONE</p>
              <p className="font-bold">(555) 123-4567</p>
            </div>
            {/* <div className="glass-panel p-6 text-center">
              <Mail className="w-8 h-8 text-focus mx-auto mb-3" />
              <p className="text-sm text-gray-400 mb-1">EMAIL</p>
              <p className="font-bold">info@buugz.com</p>
            </div> */}
            <div className="glass-panel p-6 text-center">
              <Clock className="w-8 h-8 text-focus mx-auto mb-3" />
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
