import {
  Home,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
} from 'lucide-react';
import { NavItem } from './NavItem';
import { NAV_ITEMS } from '@/lib/constants';

const ICONS = {
  Home,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
} as const;

const NAV_ICONS = {
  '/': ICONS.Home,
  '/dashboard': ICONS.LayoutDashboard,
  '/team': ICONS.Users,
  '/documents': ICONS.FileText,
  '/settings': ICONS.Settings,
} as const;

export function NavItems() {
  return (
    <nav className="flex-1 p-2 space-y-1">
      {NAV_ITEMS.map((item) => (
        <NavItem
          key={item.href}
          icon={NAV_ICONS[item.href]}
          label={item.label}
          href={item.href}
        />
      ))}
    </nav>
  );
}