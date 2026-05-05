import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Globe, Users, Award, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    desc: 'We hold ourselves to the highest standards in every training session, consulting engagement, and support interaction.',
  },
  {
    icon: Heart,
    title: 'Passion',
    desc: 'Our trainers and consultants genuinely love ServiceNow — and that energy is contagious in every class and project.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We invest in long-term relationships with our graduates, clients, and hiring partners — not one-off transactions.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    desc: 'We grow alongside our clients and students, continuously updating our curriculum and services as the platform evolves.',
  },
]

const team = [
  {
    name: 'Ajay Krishnan',
    role: 'Founder & Lead Trainer',
    bio: '12+ years in ServiceNow platform development. Certified System Administrator and Application Developer. Previously at Deloitte and Accenture.',
    certifications: ['CSA', 'CAD', 'CIS-ITSM'],
  },
  {
    name: 'Meera Patel',
    role: 'Head of Consulting',
    bio: 'Strategic ServiceNow architect with 9 years delivering enterprise implementations across BFSI, Healthcare, and Telecom.',
    certifications: ['CSA', 'CIS-HR', 'CIS-ITSM'],
  },
  {
    name: 'James O\'Brien',
    role: 'Australia Operations Lead',
    bio: 'Based in Melbourne, James manages our ANZ client relationships and talent placement pipeline with 8 years of regional market expertise.',
    certifications: ['CSA', 'CAD', 'CIS-SecOps'],
  },
]

const milestones = [
  { year: '2018', event: 'Founded in Hyderabad with a mission to democratize ServiceNow skills' },
  { year: '2019', event: 'First batch of 50 graduates — 48 placed within 60 days' },
  { year: '2020', event: 'Launched online live training to serve students across India' },
  { year: '2021', event: 'Expanded consulting arm; first enterprise ITSM implementation' },
  { year: '2022', event: 'Opened Australia operations in Melbourne; partnered with 20+ ANZ firms' },
  { year: '2024', event: '1,200+ professionals trained, 80+ hiring partners, 200+ projects delivered' },
]

export default function About() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative pt-12 pb-20 grid-bg">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
              Born to Build{' '}
              <span className="gradient-text">ServiceNow Careers</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              SNOW Planet Services was founded with one belief: the best way to close the global ServiceNow skills gap is to create a place where passionate learners meet real-world expertise. We're not just a training company — we're a career accelerator and a talent ecosystem.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To empower every professional — from freshers to seasoned experts — with the ServiceNow skills, certifications, and industry connections needed to thrive in the digital economy.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 border border-violet-500/20 hover:border-violet-500/40 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To become the most trusted ServiceNow talent and solutions partner in Asia-Pacific — connecting enterprises with the certified talent they need and students with the careers they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-7 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-4xl font-bold text-white mb-4">From Idea to Impact</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500 to-violet-600" />
            <div className="space-y-10">
              {milestones.map(({ year, event }) => (
                <div key={year} className="relative flex items-start gap-8 pl-20">
                  <div className="absolute left-0 w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 flex flex-col items-center justify-center flex-shrink-0">
                    <div className="absolute left-full ml-0 w-8 h-px bg-gradient-to-r from-cyan-500 to-transparent" />
                    <span className="text-cyan-400 font-bold text-sm">{year}</span>
                  </div>
                  <div className="glass-card rounded-xl p-5 flex-1 hover:border-cyan-500/20 transition-colors duration-300">
                    <p className="text-slate-300">{event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">The Team</p>
            <h2 className="text-4xl font-bold text-white mb-4">Meet the Experts Behind SNOW Planet</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Practitioners first, educators second. Our team brings real consulting and implementation experience into every engagement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, certifications }) => (
              <div key={name} className="glass-card rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-5">
                  <span className="text-2xl font-bold text-white">{name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{bio}</p>
                <div className="flex flex-wrap gap-2">
                  {certifications.map((cert) => (
                    <span key={cert} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5" />
            <div className="relative">
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Global Reach, Local Expertise</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                With operations in India and Australia, we bridge the talent gap across Asia-Pacific, placing certified ServiceNow professionals with leading enterprises worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
                {[
                  { country: '🇮🇳 India', city: 'Hyderabad (HQ)', desc: 'Training, consulting & development hub' },
                  { country: '🇦🇺 Australia', city: 'Melbourne', desc: 'ANZ operations, talent placement & client services' },
                ].map(({ country, city, desc }) => (
                  <div key={city} className="glass-card rounded-2xl p-6">
                    <div className="text-2xl mb-2">{country}</div>
                    <div className="text-white font-semibold mb-1">{city}</div>
                    <div className="text-slate-400 text-sm">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
