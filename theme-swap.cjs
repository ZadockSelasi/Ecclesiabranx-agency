const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.css')) results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // index.css specific changes
    if (file.endsWith('index.css')) {
        content = content.replace('--color-brand-purple: #9333ea;', '--color-brand-purple: #34d399;'); // emerald-400
        content = content.replace('--color-brand-blue: #3b82f6;', '--color-brand-blue: #10b981;'); // emerald-500
        content = content.replace('--color-brand-dark: #050505;', '--color-brand-dark: #ffffff;'); // white
        content = content.replace('text-[#F5F5F5]', 'text-emerald-950');
        content = content.replace('background: #050505;', 'background: #ffffff;');
        content = content.replace('background: #27272a;', 'background: #d1d5db;');
        content = content.replace('background: #3f3f46;', 'background: #9ca3af;');
    } else {
        // Light Theme Conversions string replacements
        content = content.replace(/bg-black/g, 'bg-white');
        
        // Background and border overlays
        content = content.replace(/bg-white\/5/g, 'bg-emerald-950/5');
        content = content.replace(/bg-white\/10/g, 'bg-emerald-950/10');
        content = content.replace(/bg-white\/20/g, 'bg-emerald-950/20');
        content = content.replace(/border-white\/10/g, 'border-emerald-950/10');
        content = content.replace(/border-white\/20/g, 'border-emerald-950/20');
        content = content.replace(/border-white\/50/g, 'border-emerald-950/50');
        
        // Text colors
        content = content.replace(/text-white\/40/g, 'text-emerald-950/40');
        content = content.replace(/text-white\/50/g, 'text-emerald-950/50');
        content = content.replace(/text-white\/60/g, 'text-emerald-950/60');
        content = content.replace(/text-white\/70/g, 'text-emerald-950/70');
        content = content.replace(/text-white\/80/g, 'text-emerald-950/80');
        
        // Now generic text-white replacement (but keep text-white inside buttons manually if needed)
        // Let's replace text-white with text-emerald-950 except when preceded by bg-brand-blue
        // It's safer to just change text-white to text-emerald-950 everywhere then fix buttons.
        content = content.replace(/text-white/g, 'text-emerald-950');
        
        // Zinc replacements for light theme equivalents
        content = content.replace(/bg-zinc-900\/40/g, 'bg-emerald-50/80');
        content = content.replace(/bg-zinc-900\/60/g, 'bg-emerald-50/90');
        content = content.replace(/bg-zinc-900\/80/g, 'bg-emerald-100');
        content = content.replace(/border-zinc-800\/50/g, 'border-emerald-200');
        content = content.replace(/border-zinc-800/g, 'border-emerald-200');
        content = content.replace(/border-zinc-900/g, 'border-emerald-100');
        content = content.replace(/bg-zinc-950/g, 'bg-emerald-50');
        
        // Reverse hover buttons if any
        content = content.replace(/hover:bg-white/g, 'hover:bg-emerald-950');
        content = content.replace(/hover:text-black/g, 'hover:text-white');
        
        // Gradients
        content = content.replace(/from-black\/90/g, 'from-white/90');
        content = content.replace(/via-black\/20/g, 'via-white/20');
        
        // Restore specific buttons to text-white where background is brand-blue or dark
        content = content.replace(/bg-brand-blue text-emerald-950/g, 'bg-brand-blue text-white');
    }

    fs.writeFileSync(file, content, 'utf8');
});

console.log("Theme swap complete!");
