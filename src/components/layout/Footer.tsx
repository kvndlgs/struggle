export function Footer() {
  return (
    <footer className="border-t py-4">
      <div className="container mx-auto flex items-center justify-between px-4 text-sm text-muted-foreground">
        <p>© 2024 Bolt.new. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}