import { Link } from 'react-router-dom'
import { Zap, Phone, Mail, ArrowUpRight } from 'lucide-react'
import { LinkedInIcon, YouTubeIcon, FacebookIcon } from './SocialIcons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand — full width on sm, spans 2 cols on lg */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div className="leading-tight">
                <div className="flex items-baseline gap-0">
                  <span className="text-lg font-bold text-white">SNOW</span>
                  <span className="text-lg font-bold gradient-text">Planet</span>
                </div>
                <div className="text-[10px] text-slate-500 leading-none">ServiceNow Experts</div>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-5">
              Empowering professionals and enterprises with ServiceNow training, consulting, and implementation services across India and Australia.
            </p>

            <div className="flex items-center gap-2">
              {[
                { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
                { Icon: YouTubeIcon, href: '#', label: 'YouTube' },
                { Icon: FacebookIcon, href: '#', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Training Programs', path: '/training' },
                { label: 'Careers', path: '/careers' },
                { label: 'Contact', path: '/contact' },
              ].map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200 flex items-center gap-1 group w-fit"
                  >
                    <span>{label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3 h-3 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">India</p>
                  <a href="tel:+918470967420" className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">+91 847 096 7420</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3 h-3 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Australia</p>
                  <a href="tel:+61481603573" className="text-slate-300 text-sm hover:text-cyan-400 transition-colors">+61 481 603 573</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3 h-3 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                  <a href="mailto:info@servicenowplanet.com" className="text-slate-300 text-sm hover:text-cyan-400 transition-colors break-all">info@servicenowplanet.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} SNOW Planet Services. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs text-center">
            ServiceNow® is a registered trademark of ServiceNow, Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
