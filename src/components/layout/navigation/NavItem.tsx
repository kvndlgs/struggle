import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/hooks/useSidebar';

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

export function NavItem({ icon: Icon, label, href }: NavItemProps) {
  const { isExpanded } = useSidebar();

  const button = (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start',
        !isExpanded && 'justify-center px-2'
      )}
      asChild
    >
      <a href={href}>
        <Icon className="h-4 w-4 shrink-0" />
        {isExpanded && <span className="ml-3">{label}</span>}
      </a>
    </Button>
  );

  if (!isExpanded) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent side="right">{label}</TooltipContent>
      </Tooltip>
    );
  }

  return button;
}