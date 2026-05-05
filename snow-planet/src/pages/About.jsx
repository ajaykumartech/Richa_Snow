import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Heart, Globe, Users, TrendingUp, Phone, Quote } from 'lucide-react'
import profileImage from '../assets/richa_director.png';

const values = [
  {
    icon: Target,
    title: 'Trust',
    desc: 'We sell trust. Professionalism, quality services, and enhancing customer experience are at the core of everything we do.',
  },
  {
    icon: Heart,
    title: 'Empowerment',
    desc: 'We open doors for women re-entering the workforce and youth stepping into IT — removing bottlenecks, not adding them.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We are building a global community of IT professionals who inspire others to learn technologies easily.',
  },
  {
    icon: TrendingUp,
    title: 'Growth',
    desc: 'Agile, sprint-driven delivery and continuously updated curricula ensure our students and clients always stay ahead.',
  },
]

const milestones = [
  { year: '2018', event: 'Founded with a mission to democratize IT skills and spread technology to the very basic roots of the world' },
  { year: '2019', event: 'First batch of graduates placed — 95%+ placement rate achieved from day one' },
  { year: '2020', event: 'Launched fully online, interactive live training accessible from anywhere — no commute, no compromise' },
  { year: '2021', event: 'Expanded consulting arm; first enterprise ServiceNow implementation delivered end-to-end' },
  { year: '2022', event: 'Opened Australia operations in Sydney; partnered with 20+ ANZ enterprises' },
  { year: '2024', event: '1,200+ professionals trained, 80+ hiring partners, 200+ projects delivered across India & Australia' },
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
              Born to{' '}
              <span className="gradient-text">Expand the IT Horizon</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed mb-8">
              SNOW Planet Services Pvt. Ltd. is an organization offering training, consulting, support, and project implementation services — focused on preparing IT professionals for administration and implementation activities across the globe.
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

      {/* Director Profile */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Leadership</p>
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Director</h2>
          </div>

          <div className="glass-card rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Photo side */}
             <div className="lg:col-span-2 relative">
                <div className="aspect-square lg:aspect-auto lg:h-full min-h-72 relative overflow-hidden">
                  
                  <img
                    src={profileImage}
                    alt="Mrs. Richa Arora — Director, SNOW Planet Services"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />

                  <div className="hidden absolute inset-0 items-center justify-center bg-gradient-to-br from-cyan-500/20 to-violet-600/20">
                    <span className="text-7xl font-extrabold gradient-text">RA</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/30" />
                </div>
              </div>

              {/* Content side */}
              <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-8 h-8 text-cyan-400/40 flex-shrink-0 mt-1" />
                  <p className="text-slate-300 text-lg italic leading-relaxed">
                    "The key purpose of the board of directors is to expand the IT horizon."
                  </p>
                </div>

                <h3 className="text-3xl font-extrabold text-white mb-1">Mrs. Richa Arora</h3>
                <p className="text-cyan-400 font-semibold mb-1">Director</p>
                <p className="text-slate-500 text-sm mb-6">SNOW Planet Services Pvt. Ltd.</p>

                <p className="text-slate-400 leading-relaxed mb-6">
                  Richa Arora founded SNOW Planet Services with a singular mission — to spread IT knowledge to women and youth without bottlenecks. Her vision empowers women returning from career gaps, freshers entering the IT domain, and professionals seeking growth, all through accessible, online, live training and world-class consulting.
                </p>

                <p className="text-slate-400 leading-relaxed mb-8">
                  Under her leadership, SNOW Planet has grown into a trusted partner for enterprises across India and Australia, delivering training, consulting, project implementation, and placement services with a commitment to agility, quality, and results.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="tel:+61481603573"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card border border-white/10 text-slate-300 text-sm hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    +61 481 603 573
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Connect <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Our Purpose</p>
            <h2 className="text-4xl font-bold text-white mb-4">Vision, Mission & Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-3xl p-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To create a community of IT professionals who inspire others to learn technologies easily — spreading IT into the very basic roots of the world.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 border border-violet-500/20 hover:border-violet-500/40 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">Mission</h2>
              <p className="text-slate-400 leading-relaxed">
                Providing IT knowledge through virtual training and consulting — without bottlenecks. Bringing liberty to talented women and career-ready opportunities to youth, wherever they are.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white mb-4">Values</h2>
              <p className="text-slate-400 leading-relaxed">
                We sell trust. We believe in professionalism, delivering quality services, and enhancing the customer experience in every interaction — from training to consulting to placement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Principles</h2>
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

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">Why SNOW Planet</p>
            <h2 className="text-4xl font-bold text-white mb-4">What Sets Us Apart</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'IT Training Curriculum',
                desc: 'Exposure to all IT components and building a solid foundation — from ServiceNow to AI, Blockchain, IoT, Machine Learning, and more.',
              },
              {
                title: 'Cutting-Edge Tools',
                desc: 'Learn advanced technologies and enhance your skills with hands-on labs on real platforms and live environments.',
              },
              {
                title: 'Expert Faculty',
                desc: 'Experienced subject matter experts and industry practitioners who bring real-world projects into every session.',
              },
              {
                title: 'Ease of Learning',
                desc: 'All trainings are online, interactive, and recorded live. Access sessions and materials through our portal anytime — free demos regularly organized.',
              },
              {
                title: 'Learning Support',
                desc: 'Get answers to any queries through our SNOW forum. Weekly doubt-clearing sessions and a peer community keep you never stuck.',
              },
              {
                title: 'Placement Assistance',
                desc: 'We assist in placing students directly with our enterprise hiring partners across India and Australia — your career doesn\'t end at certification.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="glass-card rounded-2xl p-7 hover:border-cyan-500/20 hover:-translate-y-1 transition-all duration-300">
                <div className="w-2 h-8 rounded-full bg-gradient-to-b from-cyan-500 to-violet-600 mb-5" />
                <h3 className="text-white font-bold mb-3">{title}</h3>
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

      {/* Global Presence */}
      <section className="py-20 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-violet-600/5" />
            <div className="relative">
              <Globe className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">Global Reach, Local Expertise</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Based in India and Australia, we work remotely as well as on-site — bridging the talent gap across Asia-Pacific and placing certified professionals with leading enterprises worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-xl mx-auto">
                {[
                  { country: '🇮🇳 India', city: 'Delhi (HQ)', desc: 'Training, consulting & development hub' },
                  { country: '🇦🇺 Australia', city: 'Sydney', desc: 'ANZ operations, talent placement & client services' },
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
