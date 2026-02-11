import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* LEFT: Copyright */}
        <div className="text-sm text-slate-500 order-2 md:order-1">
          © 2026 <span className="font-semibold text-slate-900">React Mastery Guide</span>. All rights reserved.
        </div>

        {/* MIDDLE: Social Links */}
        <div className="flex items-center gap-6 order-1 md:order-2">
          <a 
            href="https://github.com/Monisasmal" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-slate-900 transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/manaswini-sasmal-b77a21162/" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

        {/* RIGHT: Built With */}
        <div className="text-sm text-slate-500 flex items-center gap-1 order-3">
          Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Manaswini 
        </div>

      </div>
    </footer>
  );
};

export default Footer;