/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Layers, 
  Cpu,
  Globe,
  Palette,
  ChevronRight,
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Artistic Gallery", id: "gallery" },
    { name: "AI Generation", id: "ai" },
    { name: "3D Structures", id: "structures" },
    { name: "Community", id: "community" },
  ];

  const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="mb-12 text-center lg:text-left">
      <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">{subtitle}</span>
      <h2 className="mt-2 text-4xl font-medium tracking-tight text-white lg:text-5xl">
        {title}
      </h2>
    </div>
  );

  return (
    <div className="relative min-h-screen font-sans selection:bg-white selection:text-black bg-black">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Hero Section */}
      <main id="home" className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        {/* Left Panel */}
        <section className="relative flex min-h-screen w-full flex-col p-4 lg:w-[52%] lg:p-6">
          <div className="liquid-glass-strong absolute inset-4 rounded-3xl lg:inset-6" />
          
          <div className="relative flex h-full flex-col p-6 lg:p-10">
            {/* Navigation */}
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-semibold tracking-tighter text-white">bloom</span>
              </div>
              
              <button 
                onClick={() => setIsMenuOpen(true)}
                className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95 lg:hidden"
              >
                <Menu size={18} />
                Menu
              </button>

              <div className="hidden items-center gap-8 lg:flex">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className="text-xs font-medium uppercase tracking-widest text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </nav>

            {/* Hero Content */}
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center"
              >
                <h1 className="max-w-3xl text-5xl font-medium tracking-[-0.05em] text-white lg:text-7xl">
                  Innovating the <br />
                  <em className="font-serif italic text-white/80">spirit of bloom AI</em>
                </h1>
                
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                  {navLinks.slice(0, 3).map((link) => (
                    <a key={link.id} href={`#${link.id}`} className="liquid-glass rounded-full px-5 py-2 text-[10px] font-medium uppercase tracking-wider text-white/80 transition-transform hover:scale-105">
                      {link.name}
                    </a>
                  ))}
                </div>

                <button className="liquid-glass-strong mt-12 flex items-center gap-4 rounded-full py-4 pl-8 pr-4 text-lg font-medium text-white transition-transform hover:scale-105 active:scale-95">
                  Explore Now
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                    <Download size={20} />
                  </div>
                </button>
              </motion.div>
            </div>

            {/* Bottom Quote */}
            <div className="mt-auto pt-10">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-white/10" />
                <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40">Visionary Design</span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              <p className="text-center text-lg text-white/90">
                <span className="font-serif italic">"We imagined a realm</span> with no ending."
              </p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <div className="h-[1px] w-12 bg-white/10" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/50">MARCUS AURELIO</span>
                <div className="h-[1px] w-12 bg-white/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Right Panel (Desktop Only) */}
        <section className="hidden w-full flex-col p-4 lg:flex lg:w-[48%] lg:p-6">
          <div className="flex flex-col gap-6">
            {/* Top Bar */}
            <div className="flex items-center justify-between">
              <div className="liquid-glass flex items-center gap-4 rounded-full p-1.5 pr-4">
                <div className="flex gap-1 pl-2">
                  {[Instagram].map((Icon, i) => (
                    <a key={i} href="https://www.instagram.com/parth_.7990/" className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-all hover:bg-white/10 hover:scale-110">
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
                <div className="h-4 w-[1px] bg-white/20" />
                <ArrowRight size={16} className="text-white/60" />
              </div>

              <button className="liquid-glass flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105">
                <Sparkles size={16} />
                Account
              </button>
            </div>

            {/* Community Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="liquid-glass w-64 rounded-3xl p-6"
            >
              <h3 className="mb-2 text-lg font-medium text-white">Enter our ecosystem</h3>
              <p className="text-xs leading-relaxed text-white/60">
                Connect with visionary designers and explore the future of floral architecture.
              </p>
            </motion.div>
          </div>

          {/* Bottom Feature Section */}
          <div className="mt-auto">
            <div className="liquid-glass flex flex-col gap-4 rounded-[2.5rem] p-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="liquid-glass rounded-3xl p-6 transition-all hover:bg-white/5 hover:scale-[1.02]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <Wand2 size={20} />
                  </div>
                  <h4 className="mb-1 text-sm font-medium text-white">Processing</h4>
                  <p className="text-[10px] text-white/50">Real-time AI generation</p>
                </div>
                <div className="liquid-glass rounded-3xl p-6 transition-all hover:bg-white/5 hover:scale-[1.02]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                    <BookOpen size={20} />
                  </div>
                  <h4 className="mb-1 text-sm font-medium text-white">Growth Archive</h4>
                  <p className="text-[10px] text-white/50">Historical design patterns</p>
                </div>
              </div>

              <div className="liquid-glass flex items-center gap-4 rounded-3xl p-4 transition-all hover:bg-white/5">
                <img 
                  src="https://picsum.photos/seed/flower/192/128" 
                  alt="Flower Sculpture" 
                  className="h-16 w-24 rounded-xl object-cover grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white">Advanced Plant Sculpting</h4>
                  <p className="text-[10px] text-white/50">3D structural modeling</p>
                </div>
                <button className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-110">
                  <span className="text-xl">+</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Detailed Sections */}
      <div className="relative z-10 space-y-24 px-4 pb-24 lg:px-12">
        
        {/* Artistic Gallery Section */}
        <section id="gallery" className="scroll-mt-24">
          <SectionHeader title="Artistic Gallery" subtitle="Curated Collections" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="liquid-glass group relative aspect-[4/5] overflow-hidden rounded-3xl"
              >
                <img 
                  src={`https://picsum.photos/seed/bloom-${i}/800/1000`} 
                  alt={`Gallery Item ${i}`} 
                  className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 p-8 opacity-0 transition-all duration-500 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <h3 className="text-xl font-medium text-white">Floral Structure {i}</h3>
                  <p className="mt-2 text-sm text-white/60">Generated via Bloom AI Engine v2.4</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* AI Generation Section */}
        <section id="ai" className="scroll-mt-24">
          <div className="liquid-glass-strong rounded-[3rem] p-8 lg:p-16">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="flex-1">
                <SectionHeader title="AI Generation" subtitle="Neural Synthesis" />
                <p className="mb-8 text-lg leading-relaxed text-white/70">
                  Our proprietary neural engine translates abstract concepts into intricate botanical architectures. 
                  Experience the fusion of algorithmic precision and organic fluidity.
                </p>
                <div className="space-y-6">
                  {[
                    { icon: Cpu, title: "Neural Mapping", desc: "Complex pattern recognition for organic growth." },
                    { icon: Palette, title: "Aesthetic Scoring", desc: "Real-time evaluation of visual harmony." },
                    { icon: Layers, title: "Multi-layer Synthesis", desc: "Depth-aware generation for 3D realism." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <item.icon size={20} className="text-white/80" />
                      </div>
                      <div>
                        <h4 className="font-medium text-white">{item.title}</h4>
                        <p className="text-sm text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square w-full max-w-md flex-1">
                <div className="liquid-glass absolute inset-0 rounded-full animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-white/10" />
                <div className="absolute inset-12 rounded-full border border-white/5" />
                <div className="flex h-full w-full items-center justify-center">
                  <Wand2 size={80} className="text-white/20 animate-bounce" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3D Structures Section */}
        <section id="structures" className="scroll-mt-24">
          <SectionHeader title="3D Structures" subtitle="Spatial Modeling" />
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="liquid-glass flex flex-col justify-center rounded-[2.5rem] p-12">
              <h3 className="mb-6 text-3xl font-medium text-white">Architectural Precision</h3>
              <p className="mb-8 text-white/60">
                Export your designs into industry-standard 3D formats. Bloom AI ensures structural integrity 
                while maintaining the delicate nuances of natural forms.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["OBJ", "FBX", "GLTF", "USDZ"].map((format) => (
                  <div key={format} className="liquid-glass flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-white/5">
                    <span className="font-mono text-sm tracking-widest text-white/80">{format}</span>
                    <Download size={16} className="text-white/40" />
                  </div>
                ))}
              </div>
            </div>
            <div className="liquid-glass overflow-hidden rounded-[2.5rem]">
              <img 
                src="https://picsum.photos/seed/3d-structure/1200/800" 
                alt="3D Structure Preview" 
                className="h-full w-full object-cover grayscale opacity-70"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section id="community" className="scroll-mt-24">
          <div className="text-center">
            <SectionHeader title="Global Community" subtitle="Ecosystem" />
            <div className="mx-auto max-w-2xl">
              <p className="mb-12 text-lg text-white/60">
                Join over 50,000 designers, architects, and artists pushing the boundaries of what's possible with AI-assisted design.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="liquid-glass flex h-16 w-16 items-center justify-center rounded-full">
                    <img 
                      src={`https://i.pravatar.cc/150?u=bloom-${i}`} 
                      alt="User" 
                      className="h-12 w-12 rounded-full grayscale"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
                <div className="liquid-glass flex h-16 w-16 items-center justify-center rounded-full text-xs font-bold text-white/60">
                  +50k
                </div>
              </div>
              <button className="liquid-glass-strong mt-12 inline-flex items-center gap-3 rounded-full px-10 py-4 text-lg font-medium text-white transition-transform hover:scale-105">
                Join the Ecosystem
                <Globe size={20} />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 pt-12 text-center">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold tracking-tighter text-white">bloom</span>
            </div>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`} className="text-[10px] font-medium uppercase tracking-widest text-white/40 transition-colors hover:text-white">
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-white/30">
               &copy; Made With ❤️ By Parth Prajapati. Terms & Condition Apply.
            </p>
          </div>
        </footer>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-md lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="liquid-glass-strong fixed right-0 top-0 z-[70] h-full w-[85%] max-w-sm p-8 lg:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold tracking-tighter text-white">bloom</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-white"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="group flex items-center justify-between text-3xl font-medium text-white/80 transition-colors hover:text-white"
                    >
                      {link.name}
                      <ChevronRight size={24} className="opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2" />
                    </motion.a>
                  ))}
                </div>

                <div className="mt-auto">
                  <div className="mb-10 flex justify-center gap-6">
                    {[Linkedin].map((Icon, i) => (
                      <a key={i} href="https://www.linkedin.com/in/parth-prajapati-257b66325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="liquid-glass flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform hover:scale-110">
                        <Icon size={24} />
                      </a>
                      
                    ))}
                  </div>
                  <button className="liquid-glass-strong w-full rounded-full py-5 text-center text-lg font-medium text-white transition-transform active:scale-95">
                    Start Designing
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
