import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { LinkedInIcon, YouTubeIcon, FacebookIcon } from '../components/SocialIcons'

const offices = [
  {
    country: '🇮🇳 India',
    city: 'Hyderabad (HQ)',
    address: 'HITEC City, Hyderabad, Telangana 500081',
    phone: '+91 847 096 7420',
    email: 'info@servicenowplanet.com',
    hours: 'Mon–Sat, 9 AM – 7 PM IST',
  },
  {
    country: '🇦🇺 Australia',
    city: 'Melbourne',
    address: 'CBD, Melbourne, VIC 3000',
    phone: '+61 481 603 573',
    email: 'au@servicenowplanet.com',
    hours: 'Mon–Fri, 9 AM – 6 PM AEST',
  },
]

const inquiryTypes = [
  'Training Enrollment',
  'Corporate Training',
  'Consulting Services',
  'Hiring Partnership',
  'Career Placement',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', type: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative pt-12 pb-16 grid-bg">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Let's{' '}
            <span className="gradient-text">Start a Conversation</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            Whether you have a question about training, need a consulting quote, or want to hire certified talent — we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              {offices.map(({ country, city, address, phone, email, hours }) => (
                <div key={city} className="glass-card rounded-2xl p-7 border border-white/10 hover:border-cyan-500/20 transition-colors duration-300">
                  <div className="text-2xl mb-1">{country}</div>
                  <h3 className="text-white font-bold text-lg mb-5">{city}</h3>

                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-400 text-sm">{address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <a href={`tel:${phone.replace(/\s/g, '')}`} className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">{phone}</a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <a href={`mailto:${email}`} className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">{email}</a>
                    </li>
                  </ul>

                  <div className="mt-5 pt-5 border-t border-white/5">
                    <p className="text-xs text-slate-500">{hours}</p>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="glass-card rounded-2xl p-7 border border-white/10">
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: LinkedInIcon, label: 'LinkedIn', href: '#' },
                    { icon: YouTubeIcon, label: 'YouTube', href: '#' },
                    { icon: FacebookIcon, label: 'Facebook', href: '#' },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex-1 py-3 rounded-xl glass-card border border-white/10 flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs">{label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 sm:p-10 border border-white/10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6 animate-pulse-ring">
                      <CheckCircle className="w-10 h-10 text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-3">Message Sent!</h2>
                    <p className="text-slate-400 max-w-sm">
                      Thank you for reaching out. One of our team members will get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', type: '', message: '' }) }}
                      className="mt-8 px-6 py-2.5 rounded-xl glass-card border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                    <p className="text-slate-400 text-sm mb-8">We respond to every inquiry within 24 hours on business days.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Full Name *</label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Ajay Kumar"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Email Address *</label>
                          <input
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Phone Number</label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm"
                          />
                        </div>
                        <div>
                          <label className="text-slate-400 text-sm block mb-2">Inquiry Type *</label>
                          <select
                            name="type"
                            value={form.type}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm appearance-none"
                          >
                            <option value="" disabled>Select an inquiry type</option>
                            {inquiryTypes.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="text-slate-400 text-sm block mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us how we can help you..."
                          className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-colors text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              {
                title: 'Quick Call — India',
                desc: 'Speak directly with a training advisor',
                action: '+91 847 096 7420',
                href: 'tel:+918470967420',
              },
              {
                title: 'Quick Call — Australia',
                desc: 'Speak directly with our ANZ team',
                action: '+61 481 603 573',
                href: 'tel:+61481603573',
              },
              {
                title: 'Email Us',
                desc: 'We reply within one business day',
                action: 'info@servicenowplanet.com',
                href: 'mailto:info@servicenowplanet.com',
              },
            ].map(({ title, desc, action, href }) => (
              <a
                key={title}
                href={href}
                className="glass-card rounded-2xl p-7 hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group block"
              >
                <h3 className="text-white font-bold mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
                <p className="text-slate-500 text-sm mb-3">{desc}</p>
                <p className="text-cyan-400 font-medium text-sm">{action}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
