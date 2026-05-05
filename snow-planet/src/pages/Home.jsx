import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronRight, GraduationCap, Briefcase, Users, Award,
  Star, CheckCircle, TrendingUp, Globe, Shield, Zap, Code2, BarChart3,
  HeadphonesIcon, Settings
} from 'lucide-react'

const stats = [
  { label: 'Professionals Trained', value: '1,200+' },
  { label: 'Hiring Partners', value: '80+' },
  { label: 'Projects Delivered', value: '200+' },
  { label: 'Years Experience', value: '6+' },
]

const services = [
  {
    icon: GraduationCap,
    title: 'Training Programs',
    desc: 'Industry-aligned ServiceNow courses from fundamentals to advanced specializations — designed to get you certified and job-ready.',
    color: 'from-cyan-500 to-blue-600',
    link: '/training',
  },
  {
    icon: Settings,
    title: 'Consulting',
    desc: 'Strategic advisory services to help enterprises align ServiceNow with their business goals and digital transformation vision.',
    color: 'from-violet-500 to-purple-700',
    link: '/services',
  },
  {
    icon: Code2,
    title: 'Project Implementation',
    desc: 'End-to-end ServiceNow implementation — from scoping and design to deployment and go-live support.',
    color: 'from-emerald-500 to-teal-600',
    link: '/services',
  },
  {
    icon: HeadphonesIcon,
    title: 'Managed Support',
    desc: 'Ongoing platform maintenance, enhancements, and 24/7 support to keep your ServiceNow instance running at peak performance.',
    color: 'from-orange-500 to-red-600',
    link: '/services',
  },
]

const audiences = [
  {
    icon: GraduationCap,
    title: 'Fresh Graduates',
    desc: 'Kickstart your IT career with a globally in-demand skill. Our structured learning paths take you from zero to certified — fast.',
    cta: 'Explore Training',
    to: '/training',
    gradient: 'from-cyan-500/20 to-blue-600/20',
    border: 'border-cyan-500/30',
  },
  {
    icon: Briefcase,
    title: 'Recruiters & Employers',
    desc: 'Access our pool of pre-vetted, certified ServiceNow professionals. Reduce time-to-hire with talent that\'s ready from day one.',
    cta: 'Hire Talent',
    to: '/careers',
    gradient: 'from-violet-500/20 to-purple-600/20',
    border: 'border-violet-500/30',
  },
  {
    icon: Globe,
    title: 'Enterprises',
    desc: 'Transform your IT operations with expert ServiceNow consulting and implementation services tailored to your industry.',
    cta: 'Our Services',
    to: '/services',
    gradient: 'from-emerald-500/20 to-teal-600/20',
    border: 'border-emerald-500/30',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'ServiceNow Developer — TCS',
    text: 'SNOW Planet\'s training was a game-changer for me. I went from a fresher to landing a developer role within 3 months of completing the course.',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'IT Manager — Infosys',
    text: 'The consulting team helped us implement ITSM in record time. Their deep knowledge of ServiceNow workflows saved us months of effort.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'HR Director — Optus (AU)',
    text: 'We\'ve hired 12 certified professionals through SNOW Planet. The talent quality is exceptional — they hit the ground running every time.',
    rating: 5,
  },
]

const whyUs = [
  { icon: Award, label: 'Certified Trainers with 10+ years industry experience' },
  { icon: TrendingUp, label: 'Industry-aligned curriculum updated every quarter' },
  { icon: Users, label: 'Dedicated placement support and career mentoring' },
  { icon: Shield, label: 'Hands-on labs on real ServiceNow instances' },
  { icon: Globe, label: 'Global presence — India & Australia' },
  { icon: CheckCircle, label: '95% placement rate within 90 days of certification' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 animate-fade-in">
            <Zap className="w-4 h-4" />
            <span>#1 ServiceNow Training & Consulting Partner</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight mb-6 animate-slide-up">
            Power Your Career with{' '}
            <span className="gradient-text">ServiceNow</span>
            <br />Excellence
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            From training fresh graduates to transforming enterprises — SNOW Planet Services is your trusted partner for ServiceNow training, consulting, implementation, and hiring.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link
              to="/training"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              Our Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {stats.map(({ label, value }) => (
              <div key={label} className="glass-card rounded-2xl p-6 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="text-3xl font-extrabold gradient-text mb-1">{value}</div>
                <div className="text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Who We Serve</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Built for Every Stakeholder</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">Whether you're starting your career, scaling your team, or transforming your enterprise — we have a solution for you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {audiences.map(({ icon: Icon, title, desc, cta, to, gradient, border }) => (
              <div key={title} className={`group relative rounded-3xl p-8 bg-gradient-to-br ${gradient} border ${border} hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-300 leading-relaxed mb-6">{desc}</p>
                <Link
                  to={to}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  {cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">A comprehensive suite of ServiceNow services to accelerate your digital transformation.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc, color, link }) => (
              <Link to={link} key={title} className="group glass-card rounded-2xl p-8 hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-slate-400 leading-relaxed mb-4">{desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Why SNOW Planet</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">The Edge That Sets Us Apart</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                We don't just teach ServiceNow — we live it. Our trainers are active practitioners who bring real-world projects into the classroom.
              </p>
              <ul className="space-y-4">
                {whyUs.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <span className="text-slate-300">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Learn About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="relative glass-card rounded-3xl p-8 border border-white/10">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500 to-violet-600 rounded-2xl opacity-20 blur-xl" />
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white">95%</div>
                    <div className="text-slate-400 text-sm">Placement Rate</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Curriculum Completion', pct: 92 },
                    { label: 'Certification Pass Rate', pct: 88 },
                    { label: 'Employer Satisfaction', pct: 97 },
                    { label: 'Career Progression', pct: 91 },
                  ].map(({ label, pct }) => (
                    <div key={label}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{label}</span>
                        <span className="text-cyan-400 font-semibold">{pct}%</span>
                      </div>
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-violet-600"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Testimonials</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">What Our Community Says</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(({ name, role, text, rating }) => (
              <div key={name} className="glass-card rounded-2xl p-8 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6 italic">"{text}"</p>
                <div>
                  <div className="text-white font-semibold">{name}</div>
                  <div className="text-cyan-400 text-sm">{role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative glass-card rounded-3xl p-12 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-600/10 rounded-3xl" />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Ready to Transform?
              </h2>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
                Join thousands of professionals who have accelerated their careers and businesses with SNOW Planet Services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/training"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
                >
                  Explore Training <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass-card border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
