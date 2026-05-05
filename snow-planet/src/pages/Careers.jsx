import { Link } from 'react-router-dom'
import {
  ArrowRight, Briefcase, MapPin, Clock, ChevronRight,
  Users, Award, TrendingUp, CheckCircle, Building2, Star
} from 'lucide-react'

const openRoles = [
  {
    title: 'ServiceNow Developer (CAD Certified)',
    type: 'Full-time',
    location: 'Hyderabad / Remote',
    experience: '1–3 Years',
    skills: ['GlideRecord', 'Flow Designer', 'REST API', 'Scripted APIs'],
    tag: 'Hot',
    tagColor: 'bg-red-500',
  },
  {
    title: 'ServiceNow ITSM Consultant',
    type: 'Full-time',
    location: 'Melbourne, AU',
    experience: '3–6 Years',
    skills: ['ITSM', 'CSA', 'CIS-ITSM', 'Client engagement'],
    tag: 'Urgent',
    tagColor: 'bg-orange-500',
  },
  {
    title: 'ServiceNow System Administrator',
    type: 'Full-time / Contract',
    location: 'Bangalore / Remote',
    experience: '0–2 Years',
    skills: ['CSA', 'User Admin', 'Incident Mgmt', 'CMDB basics'],
    tag: 'Fresher Friendly',
    tagColor: 'bg-emerald-500',
  },
  {
    title: 'HRSD Implementation Specialist',
    type: 'Full-time',
    location: 'Hyderabad / Sydney',
    experience: '2–5 Years',
    skills: ['HRSD', 'Workday Integration', 'Employee Center', 'CIS-HRSD'],
    tag: 'New',
    tagColor: 'bg-violet-500',
  },
  {
    title: 'ServiceNow Trainer (Part-time)',
    type: 'Part-time',
    location: 'Remote (India)',
    experience: '4+ Years',
    skills: ['CSA', 'CAD', 'Curriculum Design', 'Communication'],
    tag: 'Internal',
    tagColor: 'bg-cyan-500',
  },
  {
    title: 'IT Project Manager — ServiceNow',
    type: 'Full-time',
    location: 'Hyderabad / Melbourne',
    experience: '5+ Years',
    skills: ['Agile', 'ITSM', 'Stakeholder mgmt', 'PMP preferred'],
    tag: 'Senior',
    tagColor: 'bg-slate-500',
  },
]

const hiringProcess = [
  {
    step: '01',
    title: 'Submit Your Profile',
    desc: 'Apply via our form or email your resume. Our team reviews every application within 48 hours.',
  },
  {
    step: '02',
    title: 'Skill Assessment',
    desc: 'A short 30-minute online test or case study to verify your ServiceNow knowledge and problem-solving skills.',
  },
  {
    step: '03',
    title: 'Interview Round',
    desc: 'Technical + HR interview with one of our senior consultants. We focus on real-world scenarios, not theory.',
  },
  {
    step: '04',
    title: 'Offer & Onboarding',
    desc: 'Receive your offer and get placed with one of our enterprise clients or join the SNOW Planet team.',
  },
]

const partnerBenefits = [
  'Pre-vetted and certified ServiceNow talent pool',
  'Reduce time-to-hire from months to weeks',
  'Tailored candidate matching based on your stack',
  'Replacement guarantee within 90 days',
  'Dedicated account manager for enterprise hiring',
  'Access to freshers, mid-level, and senior profiles',
]

const hiringPartners = [
  'Accenture', 'Deloitte', 'Infosys', 'Wipro', 'TCS',
  'Capgemini', 'HCL', 'Optus AU', 'Telstra', 'ANZ Bank'
]

export default function Careers() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative pt-12 pb-20 grid-bg">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Careers & Placement</p>
              <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
                Your Next Career{' '}
                <span className="gradient-text">Move Starts Here</span>
              </h1>
              <p className="text-slate-400 text-xl leading-relaxed mb-8">
                Whether you're a certified graduate seeking your first role or a recruiter looking for battle-tested ServiceNow talent — SNOW Planet connects the dots.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#roles" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200">
                  View Open Roles <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#recruiters" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200">
                  I'm a Recruiter <Building2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '1,200+', label: 'Certified Professionals', icon: Users },
                { value: '80+', label: 'Hiring Partners', icon: Building2 },
                { value: '95%', label: 'Placement Rate', icon: TrendingUp },
                { value: '90 days', label: 'Avg. Time to Hire', icon: Clock },
              ].map(({ value, label, icon: Icon }) => (
                <div key={label} className="glass-card rounded-2xl p-6 hover:border-cyan-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-cyan-400 mb-3" />
                  <div className="text-2xl font-extrabold gradient-text mb-1">{value}</div>
                  <div className="text-slate-400 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="roles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Open Positions</p>
            <h2 className="text-4xl font-bold text-white mb-4">Current Job Openings</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Opportunities across India and Australia with our enterprise clients and within SNOW Planet itself.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {openRoles.map(({ title, type, location, experience, skills, tag, tagColor }) => (
              <div key={title} className="glass-card rounded-2xl p-7 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-lg font-bold text-white leading-snug">{title}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-white text-xs font-semibold flex-shrink-0 ${tagColor}`}>
                    {tag}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 mb-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-cyan-400" />{type}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-cyan-400" />{location}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-cyan-400" />{experience}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {skills.map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 text-xs border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 group-hover:gap-2.5 transition-all"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-400 mb-4">Don't see a role that fits? We always want to hear from talented ServiceNow professionals.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/10 text-white font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Submit Your CV <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Process</p>
            <h2 className="text-4xl font-bold text-white mb-4">How the Placement Works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hiringProcess.map(({ step, title, desc }) => (
              <div key={step} className="relative glass-card rounded-2xl p-7 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl font-extrabold text-white/5 absolute top-4 right-4">{step}</div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mb-5">
                  <span className="text-white font-bold text-sm">{step}</span>
                </div>
                <h3 className="text-white font-bold mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Recruiters */}
      <section id="recruiters" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">For Employers & Recruiters</p>
              <h2 className="text-4xl font-bold text-white mb-5">Hire Certified ServiceNow Talent — Fast</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Our talent pipeline is trained, certified, and interview-ready. Stop sifting through unqualified applications — partner with SNOW Planet and access candidates who are proven on the platform.
              </p>
              <ul className="space-y-3 mb-8">
                {partnerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Partner With Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="glass-card rounded-3xl p-8 border border-white/10">
              <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                Trusted by Leading Organizations
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {hiringPartners.map((partner) => (
                  <div key={partner} className="px-4 py-3 rounded-xl bg-slate-800/60 text-slate-300 text-sm font-medium border border-white/5 hover:border-cyan-500/20 hover:text-cyan-400 transition-all duration-200">
                    {partner}
                  </div>
                ))}
              </div>
              <p className="text-slate-500 text-xs mt-6 text-center">
                + 70 more companies across India and Australia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
