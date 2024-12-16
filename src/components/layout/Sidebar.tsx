import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';
import { Logo } from './navigation/Logo';
import { NavItems } from './navigation/NavItems';

export function Sidebar() {
  const { isExpanded, isMobile, setIsMobile } = useSidebar();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobile]);

  return (
    <>
      {isMobile && isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => useSidebar.setState({ isExpanded: false })}
        />
      )}

      <aside
        className={cn(
          'fixed top-0 left-0 z-50 h-full bg-background border-r',
          'transition-all duration-300 ease-in-out',
          isExpanded ? 'w-64' : 'w-16',
          isMobile && !isExpanded && '-translate-x-full',
          'flex flex-col'
        )}
      >
        <Logo />
        <NavItems />
      </aside>
    </>
  );
}