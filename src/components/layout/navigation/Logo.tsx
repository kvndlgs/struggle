import { Bolt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';

export function Logo() {
  const { isExpanded, toggleSidebar } = useSidebar();

  return (
    <div className="h-16 border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-3 overflow-hidden">
        <Bolt className="h-6 w-6 text-primary shrink-0" />
        <span
          className={cn(
            'font-semibold text-xl transition-opacity duration-300',
            isExpanded ? 'opacity-100' : 'opacity-0 w-0'
          )}
        >
          Bolt.new
        </span>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="shrink-0"
        onClick={toggleSidebar}
      >
        <Bolt className="h-4 w-4" />
      </Button>
    </div>
  );
}