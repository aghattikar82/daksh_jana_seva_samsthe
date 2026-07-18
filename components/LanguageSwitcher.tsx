'use client';

import {useRouter, usePathname} from '@/i18n/routing';
import {useLocale} from 'next-intl';
import {useTransition} from 'react';

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => onSelectChange('en')}
        className={`text-sm px-2 py-1 rounded transition-colors ${locale === 'en' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
        disabled={isPending}
      >
        🇬🇧 English
      </button>
      <span className="text-gray-300">|</span>
      <button 
        onClick={() => onSelectChange('kn')}
        className={`text-sm px-2 py-1 rounded transition-colors ${locale === 'kn' ? 'bg-primary text-white' : 'text-gray-600 hover:text-primary'}`}
        disabled={isPending}
      >
        🇮🇳 ಕನ್ನಡ
      </button>
    </div>
  );
}
