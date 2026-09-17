import { useTranslations } from 'next-intl';
import { Target, Eye, CheckCircle, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-primary-dark text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200 px-4">
          {t('intro')}
        </p>
      </div>

      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="bg-primary/10 p-4 rounded-full h-fit">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('missionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('missionDesc')}</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6">
            <div className="bg-secondary/10 p-4 rounded-full h-fit">
              <Eye className="w-8 h-8 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('visionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">{t('visionDesc')}</p>
            </div>
          </div>
        </div>

        {/* Objectives */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-10">{t('objectivesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl">
                <CheckCircle className="text-accent w-6 h-6 shrink-0" />
                <p className="text-gray-700 font-medium">{t(`obj${num}` as any)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h2 className="text-3xl font-bold text-center text-primary-dark mb-10">{t('leadershipTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: t('president'), name: "Leadership Member" },
              { role: t('secretary'), name: "Leadership Member" },
              { role: t('coreMember'), name: "Leadership Member" }
            ].map((leader, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="text-gray-400 w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-primary font-medium mt-1">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
