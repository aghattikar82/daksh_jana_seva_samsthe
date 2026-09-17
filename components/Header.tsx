import Image from 'next/image';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu } from 'lucide-react'; // Placeholder for mobile menu

export default function Header() {
  const t = useTranslations('Navigation');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/projects', label: t('projects') },
    { href: '/gallery', label: t('gallery') },
    { href: '/events', label: t('events') },
    { href: '/volunteer', label: t('volunteer') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="Daksh Janaseva Samsthe" width={40} height={40} className="object-contain" />
          <span className="font-bold text-lg text-primary hidden sm:inline-block">
            Daksh Janaseva
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          
          <Link href="/donate" className="hidden sm:inline-flex bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-shadow">
            {t('donate')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
