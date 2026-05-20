export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-emerald-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-500 font-mono">
        
        <div className="flex items-center gap-3 text-emerald-950 font-display text-xl font-medium tracking-tight group">
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
             <img src="/logo.jpeg" alt="eC" className="w-full h-full object-contain mix-blend-multiply" onError={(e) => {
               e.currentTarget.style.display = 'none';
               e.currentTarget.nextElementSibling?.classList.remove('hidden');
             }} />
             <div className="hidden w-full h-full rounded-full bg-gradient-to-br from-brand-blue to-brand-purple animate-pulse" />
          </div>
          Ecclesiabranx.
        </div>

        <div className="flex gap-8">
          <a href="#" className="hover:text-emerald-950 transition-colors cursor-hover">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-950 transition-colors cursor-hover">Terms of Service</a>
        </div>

        <div>
          &copy; 2024 Ecclesiabranx. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
