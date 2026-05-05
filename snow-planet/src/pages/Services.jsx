import { Link } from 'react-router-dom'
import { ArrowRight, Settings, Code2, HeadphonesIcon, CheckCircle, BarChart3, Shield, Clock, Zap } from 'lucide-react'

const services = [
  {
    id: 'consulting',
    icon: Settings,
    title: 'ServiceNow Consulting',
    tagline: 'Strategy-first. Platform-native.',
    desc: 'We help enterprises define, design, and execute their ServiceNow roadmap — aligning the platform with business goals and setting the foundation for long-term success.',
    color: 'from-violet-500 to-purple-700',
    border: 'border-violet-500/30',
    features: [
      'ServiceNow platform health assessment',
      'ITSM / HRSD / CSM strategy workshops',
      'Process design and workflow optimization',
      'Architecture review and governance setup',
      'License advisory and instance planning',
      'Change management and stakeholder enablement',
    ],
  },
  {
    id: 'implementation',
    icon: Code2,
    title: 'Project Implementation',
    tagline: 'Delivered on time. Configured to last.',
    desc: 'From discovery to go-live, our certified implementation team manages the full lifecycle — ensuring your ServiceNow deployment is scalable, compliant, and user-adopted.',
    color: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-500/30',
    features: [
      'ITSM, ITOM, HRSD, CSM, SecOps modules',
      'Agile / sprint-based delivery model',
      'Integration with JIRA, SAP, Salesforce, Azure',
      'Custom application development on the platform',
      'Data migration and legacy system cutover',
      'User acceptance testing (UAT) support',
    ],
  },
  {
    id: 'support',
    icon: HeadphonesIcon,
    title: 'Managed Support & AMS',
    tagline: 'Always on. Always optimized.',
    desc: 'Our Application Management Services (AMS) team keeps your ServiceNow instance healthy, updated, and continuously improved — so your team can focus on business, not platform maintenance.',
    color: 'from-orange-500 to-red-600',
    border: 'border-orange-500/30',
    features: [
      'L1 / L2 / L3 incident and problem management',
      'Patch and upgrade management (every 2 releases)',
      'Performance monitoring and SLA reporting',
      'Enhancement delivery (enhancements backlog)',
      'Configuration audit and technical debt reduction',
      'Dedicated ServiceNow developer on demand',
    ],
  },
]

const modules = [
  'IT Service Management (ITSM)',
  'IT Operations Management (ITOM)',
  'HR Service Delivery (HRSD)',
  'Customer Service Management (CSM)',
  'Security Operations (SecOps)',
  'Governance, Risk & Compliance (GRC)',
  'Field Service Management (FSM)',
  'App Engine Studio (AES)',
  'Strategic Portfolio Management (SPM)',
  'IT Asset Management (ITAM)',
]

const whyConsult = [
  { icon: Shield, label: 'All consultants are ServiceNow Certified Professionals' },
  { icon: BarChart3, label: 'Proven delivery track record across 200+ projects' },
  { icon: Clock, label: 'Agile delivery — go-live in weeks, not months' },
  { icon: Zap, label: 'Blended onshore/offshore model for cost efficiency' },
]

export default function Services() {
  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative pt-12 pb-20 grid-bg">
        <div className="absolute inset-0 hero-glow opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-4">What We Offer</p>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight mb-6">
            Enterprise ServiceNow{' '}
            <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
            From strategy to support, our certified experts deliver end-to-end ServiceNow services that drive real business outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
          >
            Request a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {services.map(({ id, icon: Icon, title, tagline, desc, color, border, features }, i) => (
            <div
              key={id}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider mb-2">{tagline}</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">{desc}</p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className={`${i % 2 === 1 ? 'lg:order-1' : ''} glass-card rounded-3xl p-8 border ${border}`}>
                <h3 className="text-white font-semibold mb-5">What's Included</h3>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modules We Cover */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="text-4xl font-bold text-white mb-4">ServiceNow Modules We Specialize In</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {modules.map((mod) => (
              <span
                key={mod}
                className="px-5 py-2.5 rounded-full glass-card border border-white/10 text-slate-300 text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 cursor-default"
              >
                {mod}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Enterprises Trust SNOW Planet</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyConsult.map(({ icon: Icon, label }) => (
              <div key={label} className="glass-card rounded-2xl p-7 text-center hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your ServiceNow Journey?</h2>
              <p className="text-slate-400 mb-8">Talk to one of our certified consultants today — no obligation, just expert advice.</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                Talk to an Expert <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
