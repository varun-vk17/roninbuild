import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export function TechStackSection() {
  const technologies = [
    "Next.js",
    "Figma",
    "Tailwind",
    "Supabase",
    "Linear",
    "Stripe",
    "Vercel"
  ];

  return (
    <section
      className="bg-white/[0.02] sm:bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative border-t border-white/[0.03] sm:border-white/5"
      aria-labelledby="tech-stack-heading"
    >
      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-10">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-6 relative mt-20 mb-6 sm:mt-8">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

            <p
              id="tech-stack-heading"
              className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10"
            >
              Built on Reliable Infrastructure
            </p>
          </div>

          <p className="font-['Poppins',sans-serif] font-medium text-[clamp(14px,1.6vw,16px)] text-white/70 leading-[1.6] max-w-[600px] mx-auto mb-8">
            We use the same tools that power the world's leading startups.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-30">
          {technologies.map((tech, index) => (
            <div key={index} className="text-white/80 font-['Poppins',sans-serif] font-semibold text-[clamp(16px,1.8vw,20px)] tracking-wide">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Can you improve an existing website?",
      answer: "Yes. We audit your current site, identify friction points, and rebuild or optimize the key pages that drive revenue. Most improvements show results within weeks."
    },
    {
      question: "Is this right for new startups with no website?",
      answer: "Absolutely. We specialize in helping new businesses launch fast with a clear, conversion-focused site that validates your offer and starts generating leads immediately."
    },
    {
      question: "Why a 10-day timeline?",
      answer: "Speed matters. We use a proven framework and pre-tested patterns to move quickly without sacrificing quality. You get to market faster while competitors are still in revision cycles."
    },
    {
      question: "Do I own the website?",
      answer: "Yes, 100%. You own all code, designs, and content. We provide full documentation and can train your team if needed."
    },
    {
      question: "How do I know if my website is the real problem?",
      answer: "If you're getting traffic but not conversions, or if visitors leave quickly, your site is likely the issue. We analyze your metrics in the strategy call to confirm."
    },
    {
      question: "Will this help with paid ads or SEO later?",
      answer: "Yes. A fast, clear website improves ad conversion rates and SEO performance. We build with technical SEO best practices and conversion optimization from day one."
    }
  ];

  return (
    <section
      className="bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="faq-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-15 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-[#6B5FFF]/30 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[900px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            id="faq-heading"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,56px)] text-white leading-[1.15] mb-6 tracking-tight"
          >
            Strategic Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-6 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white/8 to-white/[0.02] backdrop-blur-lg rounded-[24px] border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <h3 className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(16px,1.8vw,18px)] leading-[1.4] tracking-tight pr-6 transition-colors ${openIndex === index ? 'text-[#6B5FFF]' : 'text-white'
                  }`}>
                  {faq.question}
                </h3>
                <div className={`shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''
                  }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="font-['Poppins',sans-serif] font-medium text-[clamp(14px,1.6vw,16px)] text-white/70 leading-[1.7]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BookingSection() {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null);
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [bookingStep, setBookingStep] = React.useState<'date' | 'details' | 'success'>('date');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    website: ''
  });

  const availableTimes = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM"
  ];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const isDateAvailable = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const handleDateClick = (day: number) => {
    if (isDateAvailable(day)) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
      setSelectedDate(date);
      setSelectedTime(null);
    }
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      setBookingStep('details');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = 'service_zxwooyd';
    const templateId = 'template_24tbztm';
    const publicKey = '0Xt04NLSeeh-mk9Ha';

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      user_name: formData.name,
      email: formData.email,
      user_email: formData.email,
      from_email: formData.email,
      company: formData.company,
      company_name: formData.company,
      website: formData.website || 'Not provided',
      website_link: formData.website || 'Not provided',
      date: selectedDate?.toLocaleDateString(),
      selected_date: selectedDate?.toLocaleDateString(),
      time: selectedTime,
      selected_time: selectedTime,
    };

    console.log('Sending EmailJS with params:', templateParams);

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setBookingStep('success');
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="booking"
      className="bg-white/[0.015] sm:bg-black w-full py-28 sm:py-28 lg:py-35 px-4 sm:px-6 relative overflow-hidden border-t border-white/[0.03] sm:border-t-0"
      aria-labelledby="booking-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-radial from-[#1D2CF3]/25 to-transparent blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/5 backdrop-blur-sm rounded-[20px] px-6 py-2 border border-white/10 mb-8 relative mt-20 mb-4 sm:mt-8">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-t from-[#6B5FFF]/25 via-[#6B5FFF]/10 to-transparent blur-lg" aria-hidden="true" />

            <p className="font-['Poppins',sans-serif] font-semibold text-[11px] tracking-[0.2em] uppercase text-white/60 relative z-10">
              START NOW
            </p>
          </div>


          <h2
            id="booking-heading"
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(36px,5.5vw,64px)] text-white leading-[1.15] mb-6 tracking-tight"
          >
            Book Your Strategy Call.
          </h2>

          <p className="font-['Poppins',sans-serif] font-medium text-[clamp(16px,1.8vw,18px)] text-white/70 leading-[1.7] max-w-[700px] mx-auto">
            No sales pressure. Just a clear conversation about your revenue goals.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-[1100px] mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-xl rounded-[40px] p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
            {/* Bottom glow effect */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#6B5FFF] to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-[#6B5FFF]/30 via-[#6B5FFF]/10 to-transparent blur-xl" aria-hidden="true" />

            <div className="grid grid-cols-1 lg:grid-cols-[380px,1fr] gap-8 lg:gap-12 relative z-10">

              {/* Left side - What happens next */}
              <div className="space-y-6">
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(20px,2.5vw,24px)] text-white leading-[1.2] tracking-tight mb-8">
                  What happens next?
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#6B5FFF]/30 to-[#1D2CF3]/20 border border-[#6B5FFF]/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6B5FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-white mb-2 tracking-tight">
                        Strategy Deep Dive
                      </h4>
                      <p className="font-['Poppins',sans-serif] font-medium text-[14px] text-white/60 leading-[1.6]">
                        We analyze your business goals and current gaps.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#6B5FFF]/30 to-[#1D2CF3]/20 border border-[#6B5FFF]/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6B5FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-white mb-2 tracking-tight">
                        Find Hidden Revenue
                      </h4>
                      <p className="font-['Poppins',sans-serif] font-medium text-[14px] text-white/60 leading-[1.6]">
                        Identify leaks or planning blindspots.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-[12px] bg-gradient-to-br from-[#6B5FFF]/30 to-[#1D2CF3]/20 border border-[#6B5FFF]/40 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[#6B5FFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-white mb-2 tracking-tight">
                        10-Day Roadmap
                      </h4>
                      <p className="font-['Poppins',sans-serif] font-medium text-[14px] text-white/60 leading-[1.6]">
                        Walk through the exact build timeline.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-[#6B5FFF]/30 border-2 border-white/10">
                      <img
                        src="/founder-face.jpg"
                        alt="Founder"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-white">
                        Founder-Led Call
                      </p>
                      <p className="font-['Poppins',sans-serif] font-medium text-[12px] text-white/60">
                        You speak directly with the engineer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - Calendar */}
              <div className="space-y-6">

                {bookingStep === 'date' && (
                  <>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(18px,2vw,20px)] text-white leading-[1.2] tracking-tight">
                      Select a Date & Time
                    </h3>

                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Calendar */}
                      <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-[24px] p-6 border border-white/10">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-6">
                          <button
                            onClick={prevMonth}
                            className="w-8 h-8 rounded-[8px] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Previous month"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] text-white">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                          </h4>
                          <button
                            onClick={nextMonth}
                            className="w-8 h-8 rounded-[8px] bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                            aria-label="Next month"
                          >
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        {/* Day Headers */}
                        <div className="grid grid-cols-7 gap-2 mb-3">
                          {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map(day => (
                            <div key={day} className="text-center font-['Poppins',sans-serif] font-semibold text-[10px] text-white/40 py-2">
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-2">
                          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
                            <div key={`empty-${index}`} />
                          ))}

                          {Array.from({ length: daysInMonth }).map((_, index) => {
                            const day = index + 1;
                            const isAvailable = isDateAvailable(day);
                            const isSelected = selectedDate?.getDate() === day &&
                              selectedDate?.getMonth() === currentMonth.getMonth() &&
                              selectedDate?.getFullYear() === currentMonth.getFullYear();

                            return (
                              <button
                                key={day}
                                onClick={() => handleDateClick(day)}
                                disabled={!isAvailable}
                                className={`aspect-square rounded-[8px] font-['Poppins',sans-serif] font-medium text-[14px] transition-all ${isSelected
                                  ? 'bg-gradient-to-br from-[#6B5FFF] to-[#1D2CF3] text-white shadow-lg shadow-[#6B5FFF]/30'
                                  : isAvailable
                                    ? 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                    : 'bg-transparent text-white/20 cursor-not-allowed'
                                  }`}
                              >
                                {day}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Available Times */}
                      <div className="flex-1 bg-white/5 backdrop-blur-sm rounded-[24px] p-6 border border-white/10">
                        <h4 className="font-['Poppins',sans-serif] font-semibold text-[11px] text-white/50 mb-4 uppercase tracking-wider">
                          Available Times
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                          {availableTimes.map((time) => (
                            <button
                              key={time}
                              onClick={() => setSelectedTime(time)}
                              disabled={!selectedDate}
                              className={`w-full py-3 px-4 rounded-[12px] font-['Poppins',sans-serif] font-medium text-[14px] transition-all ${selectedTime === time
                                ? 'bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] text-white shadow-lg shadow-[#6B5FFF]/30 border-2 border-[#6B5FFF]'
                                : selectedDate
                                  ? 'bg-white/5 text-white/80 border-2 border-white/10 hover:bg-white/10 hover:border-white/20'
                                  : 'bg-white/5 text-white/30 border-2 border-white/10 cursor-not-allowed'
                                }`}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Continue Button */}
                    <button
                      onClick={handleContinue}
                      disabled={!selectedDate || !selectedTime}
                      className={`w-full py-4 rounded-[20px] font-['Poppins',sans-serif] font-semibold text-[16px] transition-all ${selectedDate && selectedTime
                        ? 'bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] text-white shadow-lg shadow-[#6B5FFF]/40 hover:shadow-[#6B5FFF]/60 hover:scale-[1.02]'
                        : 'bg-white/5 text-white/40 cursor-not-allowed border border-white/10'
                        }`}
                    >
                      Continue
                    </button>
                  </>
                )}

                {bookingStep === 'details' && (
                  <form onSubmit={handleBookingSubmit} className="animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-white tracking-tight">
                        Your Details
                      </h3>
                      <button
                        type="button"
                        onClick={() => setBookingStep('date')}
                        className="text-white/50 hover:text-white text-[14px] flex items-center gap-2 transition-colors cursor-pointer"
                      >
                        ← Back
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-white/60 text-[12px] font-medium mb-2 uppercase tracking-wide">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6B5FFF] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-[12px] font-medium mb-2 uppercase tracking-wide">Work Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6B5FFF] transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-[12px] font-medium mb-2 uppercase tracking-wide">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6B5FFF] transition-colors"
                          placeholder="Acme Inc."
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-[12px] font-medium mb-2 uppercase tracking-wide">Website (Optional)</label>
                        <input
                          type="url"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-[#6B5FFF] transition-colors"
                          placeholder="https://acme.com"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8 py-4 rounded-[20px] bg-gradient-to-r from-[#6B5FFF] to-[#1D2CF3] text-white font-semibold text-[16px] disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Confirming...
                        </>
                      ) : "Confirm Booking"}
                    </button>
                  </form>
                )}

                {bookingStep === 'success' && (
                  <div className="text-center py-12 animate-in fade-in zoom-in duration-300 bg-white/5 backdrop-blur-sm rounded-[24px] border border-white/10 p-6">
                    <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] text-white mb-2">Booking Confirmed!</h3>
                    <p className="text-white/60 mb-8">We've sent a confirmation email to {formData.email}.</p>
                    <button
                      onClick={() => {
                        setBookingStep('date');
                        setSelectedDate(null);
                        setSelectedTime(null);
                        setFormData({ name: '', email: '', company: '', website: '' });
                      }}
                      className="text-[#6B5FFF] font-medium hover:text-white transition-colors cursor-pointer"
                    >
                      Book another call
                    </button>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


export function FinalCTASection() {
  return (
    <section className="bg-black w-full py-28 sm:pt-28 px-4 sm:px-6 relative overflow-hidden mt-8 sm:mt-0 border-t border-white/[0.03] sm:border-t-0">
      {/* Gradient CTA Card */}
      <div className="max-w-[1100px] mx-auto relative">
        <div className="relative rounded-[48px] overflow-hidden">
          {/* Purple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#6B5FFF] via-[#5848CC] to-[#1D2CF3]" />

          {/* Ambient glow effects */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-8 sm:px-16 py-16 sm:py-20">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[clamp(42px,6vw,64px)] text-white leading-[1.1] tracking-tight mb-6">
              Ready to turn your website into a sales asset this month?
            </h2>
            <p className="font-['Poppins',sans-serif] text-[clamp(16px,1.8vw,19px)] text-white/90 leading-[1.6] mb-10 max-w-[650px] mx-auto">
              Stop losing revenue to bad design. Let's build a site that actually converts.
            </p>
            <button
              onClick={() => {
                const bookingSection = document.getElementById('booking');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="bg-white hover:bg-white/95 text-black rounded-full px-8 py-4 font-['Poppins',sans-serif] font-semibold text-[15px] transition-all hover:scale-105 inline-flex items-center gap-3 group shadow-2xl cursor-pointer"
            >
              Get My Revenue-Focused Site Plan
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-black w-full py-12 px-4 sm:px-6 border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">

        {/* Main Footer Grid - Horizontal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10">

          {/* Brand Column */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[20px] text-white mb-3 tracking-tight">
              RONIN
            </h3>
            <p className="font-['Poppins',sans-serif] text-[13px] text-white/50 leading-[1.6] max-w-[280px]">
              Revenue-first engineering for ambitious brands. Building high-performance sites that turn visitors into customers.
            </p>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-[0.1em] text-white/40 mb-4">
              SOLUTIONS
            </h4>
            <ul className="space-y-2">
              {['Book Free Strategy Call', 'Startup Launch', 'Growth Scaling'].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-['Poppins',sans-serif] text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-[0.1em] text-white/40 mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Methodology', href: '#' },
                { label: 'Terms', href: '/terms.html' },
                { label: 'Privacy', href: '/privacy.html' }
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-['Poppins',sans-serif] text-[13px] text-white/60 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-['Poppins',sans-serif] font-semibold text-[11px] uppercase tracking-[0.1em] text-white/40 mb-4">
              CONNECT
            </h4>
            <ul className="space-y-2">
              {[
                {
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/varun-kumaran/',
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )
                }
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-['Poppins',sans-serif] text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2 group"
                    aria-label={item.label}
                  >
                    <span className="group-hover:text-[#0077b5] transition-colors duration-300">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Poppins',sans-serif] text-[11px] text-white/40 uppercase tracking-[0.05em]">
            © 2025 RONIN DIGITAL. ENGINEERING FOR GROWTH.
          </p>
          <p className="font-['Poppins',sans-serif] text-[11px] text-white/40 uppercase tracking-[0.05em]">
            ⚡ FOCUSED ON REVENUE CLARITY
          </p>
        </div>

      </div>
    </footer>
  );
}