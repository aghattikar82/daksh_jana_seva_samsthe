import { useTranslations } from 'next-intl';
import { Heart, BookOpen, Stethoscope, Droplet, TreePine, Users } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  const projects = [
    { key: 'annadanam', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
    { key: 'education', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
    { key: 'health', icon: Stethoscope, color: 'text-green-500', bg: 'bg-green-50' },
    { key: 'blood', icon: Droplet, color: 'text-rose-500', bg: 'bg-rose-50' },
    { key: 'tree', icon: TreePine, color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { key: 'women', icon: Users, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          {t('subtitle')}
        </p>
      </div>

      <div className="container mx-auto px-4 mt-[-40px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div key={proj.key} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="h-48 bg-gray-200 relative flex items-center justify-center overflow-hidden">
                  {/* Placeholder for project image */}
                  <div className={`absolute inset-0 opacity-20 ${proj.bg}`}></div>
                  <Icon className={`w-20 h-20 ${proj.color} opacity-50 group-hover:scale-110 transition-transform duration-500`} />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(`${proj.key}.title` as any)}</h3>
                  <p className="text-gray-600 mb-6 h-12">{t(`${proj.key}.desc` as any)}</p>
                  <Link href="/projects" className="inline-flex items-center text-primary font-bold hover:text-secondary transition-colors">
                    {t('learnMore')} &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
