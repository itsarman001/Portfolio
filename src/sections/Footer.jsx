import { Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 border-t border-muted-foreground text-center text-primary/90">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Md Arman. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
