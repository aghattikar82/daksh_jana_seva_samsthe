import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Navigation');
  
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">
              DJS
            </div>
            <span className="font-bold text-xl">Daksh Janaseva</span>
          </div>
          <p className="text-sm text-gray-300">
            Empowering Communities, Transforming Lives. A registered non-profit organization dedicated to social welfare.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-accent">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/about" className="hover:text-accent transition-colors">{t('about')}</Link></li>
            <li><Link href="/projects" className="hover:text-accent transition-colors">{t('projects')}</Link></li>
            <li><Link href="/gallery" className="hover:text-accent transition-colors">{t('gallery')}</Link></li>
            <li><Link href="/events" className="hover:text-accent transition-colors">{t('events')}</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-accent">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>Kalaburagi, Karnataka, India</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>contact@dakshjanaseva.org</span>
            </li>
          </ul>
        </div>

        {/* Social & CTA */}
        <div>
          <h3 className="font-bold text-lg mb-4 text-accent">Follow Us</h3>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <Link href="/donate" className="inline-block bg-accent text-primary-dark font-bold px-6 py-2 rounded-full hover:bg-white transition-colors">
            {t('donate')}
          </Link>
        </div>

      </div>
      
      <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Daksh Janaseva Samsthe (R). All rights reserved.</p>
      </div>
    </footer>
  );
}
