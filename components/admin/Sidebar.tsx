'use client';

import { LayoutDashboard, Newspaper, FolderOpen, Image as ImageIcon, LogOut } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'News', href: '/admin/news', icon: Newspaper },
    { name: 'Projects', href: '/admin/projects', icon: FolderOpen },
    { name: 'Gallery', href: '/admin/gallery', icon: ImageIcon },
  ];

  return (
    <div className="w-64 bg-primary-dark text-white h-screen flex flex-col shadow-xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-accent">Admin Panel</h2>
        <p className="text-xs text-gray-400 mt-1">Daksh Janaseva Samsthe</p>
      </div>

      <nav className="flex-1 mt-6 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.endsWith(item.href);
          
          return (
            <Link
              key={item.name}
              href={item.href as any}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                isActive 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10">
        <button
          onClick={() => signOut({ callbackUrl: '/en/admin/login' })}
          className="flex items-center space-x-3 px-4 py-3 w-full text-left text-gray-300 hover:bg-red-500/20 hover:text-red-400 rounded-xl transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
