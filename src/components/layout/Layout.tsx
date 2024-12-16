import { useSidebar } from '@/hooks/useSidebar';
import { cn } from '@/lib/utils';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { isExpanded, isMobile } = useSidebar();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div
        className={cn(
          'min-h-screen flex flex-col',
          'transition-all duration-300 ease-in-out',
          isExpanded && !isMobile ? 'lg:pl-64' : 'lg:pl-16'
        )}
      >
        <Header />
        <main className="flex-1 container mx-auto p-4 lg:p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}