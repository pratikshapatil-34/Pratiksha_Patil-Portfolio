import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                Pratiksha
              </div>
              <p className="text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="mb-4 hover:scale-110 transition-transform duration-200"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
              
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="h-4 w-4 mx-1 text-red-500 animate-pulse" />
                <span>by Pratiksha © {currentYear}</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              Built with React, TypeScript, and Tailwind CSS. 
              Deployed with love and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;