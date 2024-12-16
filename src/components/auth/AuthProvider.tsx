import { useAuthSubscription } from '@/hooks/useAuth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  useAuthSubscription();
  return <>{children}</>;
}