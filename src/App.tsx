import { Providers } from '@/providers/Providers';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Providers>
      <Layout>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Welcome to Bolt.new</h1>
          <p className="text-muted-foreground">
            Start building your next great project with our modern stack.
          </p>
        </div>
      </Layout>
      <Toaster />
    </Providers>
  );
}

export default App;