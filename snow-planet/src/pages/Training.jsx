import { Link } from 'react-router-dom'
import {
  ArrowRight, Clock, Users, Award, CheckCircle, BookOpen,
  Monitor, Calendar, ChevronDown, ChevronUp
} from 'lucide-react'
import { useState } from 'react'

const courses = [
  {
    id: 'csa',
    badge: 'Most Popular',
    badgeColor: 'bg-cyan-500',
    title: 'ServiceNow System Administration (CSA)',
    level: 'Beginner',
    duration: '6 Weeks',
    mode: 'Live Online + Self-paced',
    sessions: '3 sessions/week',
    price: 'Contact for Pricing',
    desc: 'The definitive starting point for anyone entering the ServiceNow ecosystem. Covers the platform fundamentals, ITSM configuration, user management, and prepares you fully for the CSA certification exam.',
    curriculum: [
      'Introduction to the ServiceNow Platform',
      'Instance configuration and branding',
      'User administration and access control (ACLs)',
      'Tables, forms, fields, and list views',
      'Incident, Problem, and Change Management',
      'Workflow and Flow Designer basics',
      'Reporting and dashboards',
      'CSA Exam preparation & mock tests',
    ],
    outcomes: ['CSA Certification Ready', 'ITSM Module Proficiency', 'Platform Administration Skills'],
  },
  {
    id: 'cad',
    badge: 'High Demand',
    badgeColor: 'bg-violet-500',
    title: 'ServiceNow Application Developer (CAD)',
    level: 'Intermediate',
    duration: '8 Weeks',
    mode: 'Live Online',
    sessions: '4 sessions/week',
    price: 'Contact for Pricing',
    desc: 'Build custom ServiceNow applications from scratch. Master scripting, REST API integrations, and the App Engine Studio. Ideal for developers transitioning into the ServiceNow ecosystem.',
    curriculum: [
      'JavaScript in ServiceNow (GlideRecord, GlideSystem)',
      'Client Scripts, UI Policies, and Business Rules',
      'Scripted REST APIs and integration hub',
      'App Engine Studio — building custom apps',
      'Service Portal and AngularJS widgets',
      'Automated Test Framework (ATF)',
      'Performance Analytics basics',
      'CAD Exam preparation & mock tests',
    ],
    outcomes: ['CAD Certification Ready', 'Custom App Development', 'REST API Integration Skills'],
  },
  {
    id: 'itsm',
    badge: 'Enterprise Track',
    badgeColor: 'bg-emerald-500',
    title: 'CIS-ITSM: Certified Implementation Specialist',
    level: 'Advanced',
    duration: '10 Weeks',
    mode: 'Live Online + Hands-on Labs',
    sessions: '3 sessions/week + Weekend labs',
    price: 'Contact for Pricing',
    desc: 'Deep-dive into ITSM implementation for enterprise clients. Configure, customize, and deploy Incident, Problem, Change, and Service Catalog for large-scale organizations.',
    curriculum: [
      'Enterprise ITSM architecture and design',
      'Advanced Incident and Problem Management',
      'Change Management workflows and approvals',
      'Service Catalog design and Request Fulfillment',
      'SLA / OLA configuration and reporting',
      'CMDB and Asset Management fundamentals',
      'Knowledge Management and Self-Service Portal',
      'CIS-ITSM Exam prep and case study walkthroughs',
    ],
    outcomes: ['CIS-ITSM Certified', 'Enterprise Implementation Ready', 'Client-facing Consulting Skills'],
  },
  {
    id: 'hrsd',
    badge: 'New',
    badgeColor: 'bg-orange-500',
    title: 'CIS-HRSD: HR Service Delivery',
    level: 'Intermediate',
    duration: '6 Weeks',
    mode: 'Live Online',
    sessions: '2 sessions/week',
    price: 'Contact for Pricing',
    desc: 'Specialized training for HR professionals and developers implementing ServiceNow HRSD. Configure onboarding, employee document management, and HR case management.',
    curriculum: [
      'HR Service Delivery overview and setup',
      'COEs, HR Services, and HR templates',
      'Employee onboarding and offboarding journeys',
      'HR case management and SLA configuration',
      'Employee document management',
      'Integrations with Workday and SAP SuccessFactors',
      'Employee Center portal configuration',
      'CIS-HRSD Exam preparation',
    ],
    outcomes: ['CIS-HRSD Certified', 'HRSD Module Expert', 'Workday Integration Skills'],
  },
]

const learningFormats = [
  {
    icon: Monitor,
    title: 'Live Online Classes',
    desc: 'Interactive Zoom sessions with screen-share labs. Attend from anywhere — India or Australia.',
  },
  {
    icon: BookOpen,
    title: 'Self-Paced Modules',
    desc: 'Recorded sessions, written guides, and practice exams available 24/7 on our LMS.',
  },
  {
    icon: Users,
    title: 'Mentorship & Q&A',
    desc: 'Weekly 1:1 doubt-clearing sessions with senior trainers. Slack community for peer support.',
  },
  {
    icon: Calendar,
    title: 'Placement Support',
    desc: 'Resume review, mock interviews, and direct referrals to our 80+ hiring partner network.',
  },
]

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300">
      <div className="p-8">
        <div className="flex items-start justify-between gap-4 mb-4">
          <span className={`px-3 py-1 rounded-full text-white text-xs font-semibold ${course.badgeColor}`}>
            {course.badge}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
            course.level === 'Beginner' ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10' :
            course.level === 'Intermediate' ? 'border-amber-500/40 text-amber-400 bg-amber-500/10' :
            'border-red-500/40 text-red-400 bg-red-500/10'
          }`}>
            {course.level}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-3">{course.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{course.desc}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {[
            { icon: Clock, label: course.duration },
            { icon: Monitor, label: course.mode },
            { icon: Calendar, label: course.sessions },
            { icon: Award, label: 'Certification Prep' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-slate-400">
              <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {course.outcomes.map((o) => (
            <span key={o} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 text-xs font-medium border border-cyan-500/20">
              {o}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-4"
        >
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          {expanded ? 'Hide' : 'View'} Curriculum
        </button>

        {expanded && (
          <ul className="space-y-2 mb-6">
            {course.curriculum.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <Link
          to="/contact"
          className="block text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
        >
          Enroll Now
        </Link>
      </div>
    </div>
  )
}

export default function Training() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative pt-12 pb-20 grid-bg">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">Training Programs</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Get Certified.{' '}
            <span className="gradient-text">Get Hired.</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            Industry-aligned ServiceNow training programs designed by practitioners. From zero to certified in weeks — not years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Browse Courses <ArrowRight className="w-5 h-5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Talk to a Trainer
            </Link>
          </div>
        </div>
      </section>

      {/* Learning Formats */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-3">How You'll Learn</h2>
            <p className="text-slate-400">Flexible learning designed around your schedule and career goals.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFormats.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-7 text-center hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Programs</p>
            <h2 className="text-4xl font-bold text-white mb-4">ServiceNow Certification Tracks</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Choose the path that aligns with your career goals — from system administration to advanced development and implementation.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Career Path</p>
          <h2 className="text-4xl font-bold text-white mb-4">Your Learning Journey</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">Follow a structured progression from beginner to enterprise specialist.</p>

          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-violet-600 hidden lg:block" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'CSA', label: 'System Admin', color: 'from-cyan-500 to-blue-600' },
                { step: '02', title: 'CAD', label: 'App Developer', color: 'from-blue-500 to-violet-600' },
                { step: '03', title: 'CIS', label: 'Specialist', color: 'from-violet-500 to-purple-700' },
                { step: '04', title: 'CTA / CMA', label: 'Architect', color: 'from-purple-500 to-pink-600' },
              ].map(({ step, title, label, color }) => (
                <div key={step} className="flex flex-col items-center">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex flex-col items-center justify-center mb-4 shadow-lg z-10`}>
                    <span className="text-white/60 text-xs">{step}</span>
                    <span className="text-white font-bold text-lg leading-none">{title}</span>
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Placement CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5" />
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">95% Placement Rate</h2>
                <p className="text-slate-400 mb-6">
                  We don't just train you — we place you. Our dedicated placement team connects certified graduates directly with our network of 80+ hiring partners across India and Australia.
                </p>
                <ul className="space-y-2">
                  {['Resume building & LinkedIn optimization', 'Mock interview preparation', 'Direct referrals to hiring partners', '90-day post-placement support'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Enroll Today <ArrowRight className="w-5 h-5" />
                </Link>
                <p className="text-slate-500 text-xs mt-4">Next batch starts soon — limited seats available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
