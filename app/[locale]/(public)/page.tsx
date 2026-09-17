import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react';

export default function Home() {
  const t = useTranslations('Hero');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('title')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-90">
            {t('tagline')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/donate" 
              className="px-8 py-3 bg-accent text-primary-dark font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg w-full sm:w-auto"
            >
              {t('donate')}
            </Link>
            <Link 
              href="/volunteer" 
              className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-full hover:bg-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              {t('volunteer')}
            </Link>
            <Link 
              href="/projects" 
              className="px-8 py-3 text-white font-medium hover:underline flex items-center justify-center gap-2"
            >
              {t('projects')} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">About Our Mission</h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Daksh Janaseva Samsthe (R) is dedicated to uplifting the underprivileged, providing education, healthcare, and empowering communities to build a self-reliant society.
          </p>
          <Link href="/about" className="text-secondary font-semibold hover:text-primary transition-colors inline-flex items-center gap-1">
            Learn more about us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Featured Services/Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Core Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Education Support', icon: Users, desc: 'Providing quality education and resources to children in need.' },
              { title: 'Health Camps', icon: Heart, desc: 'Organizing free medical checkups and blood donation drives.' },
              { title: 'Community Events', icon: Calendar, desc: 'Empowering communities through awareness programs and events.' },
            ].map((item, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-cream border border-gray-100 hover:shadow-xl transition-shadow group">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.desc}</p>
                <Link href="/projects" className="text-secondary font-medium text-sm hover:underline">Read more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
