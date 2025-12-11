import React from 'react';

// === DATA TOOLBOX LENGKAP (Updated: Linux Terminal) ===
const toolboxData = [
  {
    category: "Languages",
    items: [
      { name: "C++", icon: "fa-solid fa-code", color: "text-blue-500" },
      { name: "Java", icon: "fa-brands fa-java", color: "text-orange-400" },
      { name: "Python", icon: "fa-brands fa-python", color: "text-yellow-300" },
      { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
      { name: "TypeScript", icon: "fa-brands fa-js-square", color: "text-blue-400" },
      { name: "PHP", icon: "fa-brands fa-php", color: "text-indigo-400" },
      { name: "R", icon: "fa-solid fa-r", color: "text-blue-300" },
      { name: "HTML5", icon: "fa-brands fa-html5", color: "text-orange-500" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    items: [
      { name: "Next.js", icon: "fa-solid fa-n", color: "text-slate-100" },
      { name: "React", icon: "fa-brands fa-react", color: "text-cyan-400" },
      { name: "Vue.js", icon: "fa-brands fa-vuejs", color: "text-green-400" },
      { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-500" },
      { name: "Express.js", icon: "fa-solid fa-server", color: "text-slate-400" },
      { name: "Laravel", icon: "fa-brands fa-laravel", color: "text-red-500" },
      { name: "PyTorch", icon: "fa-solid fa-fire", color: "text-orange-500" },
      { name: "TensorFlow", icon: "fa-solid fa-t", color: "text-orange-400" },
      { name: "OpenGL", icon: "fa-solid fa-cube", color: "text-blue-300" },
      { name: "Unity", icon: "fa-brands fa-unity", color: "text-slate-100" },
      { name: "Jinja", icon: "fa-solid fa-code", color: "text-slate-300" },
      { name: "Matplotlib", icon: "fa-solid fa-chart-area", color: "text-blue-300" },
    ]
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: "fa-brands fa-aws", color: "text-orange-400" },
      { name: "Google Cloud", icon: "fa-brands fa-google", color: "text-blue-500" },
      { name: "Cloudflare", icon: "fa-brands fa-cloudflare", color: "text-orange-500" },
      { name: "Vercel", icon: "fa-solid fa-triangle-exclamation", color: "text-slate-100" },
      { name: "Docker", icon: "fa-brands fa-docker", color: "text-blue-400" },
      { name: "Kubernetes", icon: "fa-solid fa-dharmachakra", color: "text-blue-300" },
      { name: "Terraform", icon: "fa-solid fa-server", color: "text-purple-400" },
      { name: "Ansible", icon: "fa-solid fa-a", color: "text-red-500" },
      { name: "Jenkins", icon: "fa-brands fa-jenkins", color: "text-red-400" },
      { name: "Vagrant", icon: "fa-solid fa-v", color: "text-blue-500" },
      { name: "Nginx", icon: "fa-solid fa-server", color: "text-green-500" },
      { name: "Apache", icon: "fa-solid fa-feather", color: "text-red-400" },
      { name: "Prometheus", icon: "fa-solid fa-fire", color: "text-orange-500" },
      { name: "Grafana", icon: "fa-solid fa-chart-line", color: "text-orange-400" },
    ]
  },
  {
    category: "Linux Distros",
    items: [
      { name: "Ubuntu", icon: "fa-brands fa-ubuntu", color: "text-orange-500" },
      { name: "Kubuntu", icon: "fa-solid fa-gear", color: "text-blue-400" },
      { name: "Linux Mint", icon: "fa-brands fa-linux", color: "text-green-400" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "Git", icon: "fa-brands fa-git-alt", color: "text-orange-600" },
      { name: "GitHub", icon: "fa-brands fa-github", color: "text-slate-100" },
      { name: "Bitbucket", icon: "fa-brands fa-bitbucket", color: "text-blue-500" },
      { name: "Jira", icon: "fa-brands fa-jira", color: "text-blue-400" },
      { name: "Trello", icon: "fa-brands fa-trello", color: "text-blue-400" },
      { name: "Postman", icon: "fa-solid fa-paper-plane", color: "text-orange-500" },
      { name: "Notion", icon: "fa-solid fa-n", color: "text-slate-100" },
      { name: "Figma", icon: "fa-brands fa-figma", color: "text-purple-400" },
      { name: "Canva", icon: "fa-solid fa-c", color: "text-cyan-400" },
      { name: "GIMP", icon: "fa-solid fa-paintbrush", color: "text-orange-300" },
      { name: "Linux Terminal", icon: "fa-solid fa-terminal", color: "text-green-400" },
    ]
  },
  {
    category: "Databases & Hardware",
    items: [
      { name: "MySQL", icon: "fa-solid fa-database", color: "text-blue-400" },
      { name: "MariaDB", icon: "fa-solid fa-database", color: "text-blue-300" },
      { name: "MongoDB", icon: "fa-brands fa-envira", color: "text-green-400" },
      { name: "Arduino", icon: "fa-solid fa-microchip", color: "text-teal-400" },
      { name: "Cisco", icon: "fa-solid fa-network-wired", color: "text-blue-600" },
    ]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-slate-400 selection:bg-fuchsia-500 selection:text-white font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(rgba(30, 41, 59, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 41, 59, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 80%)'
          }}
        ></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
      </div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-4 lg:items-start">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <div className="relative mb-8 w-32 h-32 group">
                 <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                 <div className="relative w-full h-full rounded-lg overflow-hidden border-2 border-slate-700 group-hover:border-white transition duration-300">
                    <img src="/profile.jpg" alt="Athalla Bayanaka" className="w-full h-full object-cover" />
                 </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                <a href="/">Athalla Bayanaka<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Maheswara</span></a>
              </h1>
              <h2 className="mt-3 text-xl font-mono font-medium tracking-tight text-cyan-300 sm:text-2xl">
                <span className="text-fuchsia-400">&lt;</span>DevOps & Cloud Enthusiast <span className="text-fuchsia-400">/&gt;</span>
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-slate-400">
                Mahasiswa Informatika (IPK 3.85) yang mengubah kode menjadi infrastruktur otomatis. Spesialis CI/CD, Cloud, dan secangkir kopi. ☕
              </p>
              
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max space-y-1">
                  {['About', 'Experience', 'Projects', 'Toolbox'].map((item) => (
                    <li key={item}>
                      <a className="group flex items-center py-3" href={`#${item.toLowerCase()}`}>
                        <span className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-cyan-400"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-300 transition-colors font-mono">{item}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <ul className="ml-1 mt-8 flex items-center gap-5" aria-label="Social media">
              <li><a className="text-2xl text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] transition-all" href="https://github.com/Arzenos" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
              <li><a className="text-2xl text-slate-400 hover:text-fuchsia-400 hover:drop-shadow-[0_0_8px_rgba(232,121,249,0.8)] transition-all" href="https://www.linkedin.com/in/athalla-maheswara-406b9b268/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
          </header>

          {/* === BAGIAN KANAN (Scrollable Content) === */}
          <div className="pt-24 lg:w-1/2 lg:py-24">
            
            {/* 1. ABOUT */}
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <div className="p-6 bg-[#0f172a]/60 border-l-2 border-cyan-500 backdrop-blur-sm hover:bg-[#0f172a]/80 transition-all duration-300">
                <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-4 font-mono">// 01. ABOUT</h3>
                <div className="text-slate-400 space-y-4 leading-relaxed">
                  <p>Halo! Saya mahasiswa Informatika di <b>Universitas Negeri Surabaya</b>. Dulu suka backend, sekarang jatuh cinta pada seni "mengantar kode ke server" alias <b>DevOps</b>.</p>
                  <p>Infrastruktur itu seperti listrik: <span className="text-fuchsia-300 font-medium">Anda baru sadar keberadaannya saat dia mati (padam).</span> Tugas saya memastikan "lampu" tetap menyala.</p>
                  <p>Saat tidak menulis Terraform atau debugging Jenkins, saya memimpin tim redaksi bahasa atau bereksperimen dengan IoT.</p>
                </div>
              </div>
            </section>

            {/* 2. EXPERIENCE */}
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-8 font-mono sticky top-0 bg-[#050505]/90 py-2 z-20 backdrop-blur-md">// 02. EXPERIENCE</h3>
              
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 font-mono">2025 — Present</header>
                <div className="z-10 sm:col-span-6">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.1)] transition-all duration-300">
                    <h3 className="font-medium leading-snug text-slate-100 text-lg group-hover:text-fuchsia-300 transition-colors">Ketua Redaktur Bahasa</h3>
                    <div className="text-cyan-500/80 mb-2 text-sm font-mono">LPK GEMA Unesa</div>
                    <p className="mt-2 text-sm leading-normal text-slate-400">Leadership & Editorial Management. Meningkatkan akurasi penyuntingan 25%.</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                        <li className="px-2 py-1 text-[10px] font-mono font-bold text-fuchsia-300 bg-fuchsia-900/20 border border-fuchsia-700/50 rounded">LEADERSHIP</li>
                        <li className="px-2 py-1 text-[10px] font-mono font-bold text-fuchsia-300 bg-fuchsia-900/20 border border-fuchsia-700/50 rounded">EDITORIAL</li>
                    </ul>
                  </div>
                </div>
              </div>

               <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 font-mono">2021 — 2023</header>
                <div className="z-10 sm:col-span-6">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.1)] transition-all duration-300">
                    <h3 className="font-medium leading-snug text-slate-100 text-lg group-hover:text-fuchsia-300 transition-colors">Ketua Radio SMANIVDA</h3>
                    <div className="text-cyan-500/80 mb-2 text-sm font-mono">Radio Sekolah</div>
                    <p className="mt-2 text-sm leading-normal text-slate-400">Broadcasting Operations & Team Management.</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                        <li className="px-2 py-1 text-[10px] font-mono font-bold text-fuchsia-300 bg-fuchsia-900/20 border border-fuchsia-700/50 rounded">LEADERSHIP</li>
                        <li className="px-2 py-1 text-[10px] font-mono font-bold text-fuchsia-300 bg-fuchsia-900/20 border border-fuchsia-700/50 rounded">BROADCASTING</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. PROJECTS */}
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
               <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-8 font-mono sticky top-0 bg-[#050505]/90 py-2 z-20 backdrop-blur-md">// 03. PROJECTS</h3>
               
               <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
                <div className="z-10 sm:col-span-8">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-100 text-lg group-hover:text-cyan-300 transition-colors">
                            <a href="https://github.com/Arzenos" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            Hybrid CI/CD Pipeline <i className="fa-solid fa-link text-xs opacity-50"></i>
                            </a>
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 border border-cyan-900 bg-cyan-950/30 px-2 py-1">2025</span>
                    </div>
                    
                    <div className="w-full h-40 bg-black rounded border border-slate-800 mb-4 overflow-hidden relative group-hover:border-cyan-500/30 transition-colors">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        <img src="/project-jenkins.png" alt="Jenkins" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">Automasi deployment AWS EC2 menggunakan Jenkins lokal.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['Jenkins', 'Terraform', 'AWS', 'Docker'].map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded-sm border border-cyan-900/50">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
               </div>

               <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 mb-12">
                <div className="z-10 sm:col-span-8">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-100 text-lg group-hover:text-cyan-300 transition-colors">
                            <a href="https://github.com/Arzenos" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            HikmalAir Platform <i className="fa-solid fa-link text-xs opacity-50"></i>
                            </a>
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 border border-cyan-900 bg-cyan-950/30 px-2 py-1">2025</span>
                    </div>
                    
                    <div className="w-full h-40 bg-black rounded border border-slate-800 mb-4 overflow-hidden relative group-hover:border-cyan-500/30 transition-colors">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        <img src="/project-hikmal.png" alt="HikmalAir" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">Platform tiket pesawat. Robust & Fast.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['Laravel', 'MySQL', 'PHP'].map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded-sm border border-cyan-900/50">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
               </div>

               <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
                <div className="z-10 sm:col-span-8">
                  <div className="p-4 bg-slate-900/40 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-slate-100 text-lg group-hover:text-cyan-300 transition-colors">
                            <a href="https://github.com/Arzenos" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                            Mojii: IoT Robot <i className="fa-solid fa-link text-xs opacity-50"></i>
                            </a>
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400 border border-cyan-900 bg-cyan-950/30 px-2 py-1">2025</span>
                    </div>
                    
                    <div className="w-full h-40 bg-black rounded border border-slate-800 mb-4 overflow-hidden relative group-hover:border-cyan-500/30 transition-colors">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
                        <img src="/project-mojii.png" alt="Mojii" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>

                    <p className="mt-2 text-sm text-slate-400">Desktop assistant robot berbasis ESP32.</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {['C++', 'ESP32', 'Arduino'].map(tech => (
                            <span key={tech} className="text-[10px] font-mono text-cyan-300 bg-cyan-900/20 px-2 py-1 rounded-sm border border-cyan-900/50">{tech}</span>
                        ))}
                    </div>
                  </div>
                </div>
               </div>               
            </section>

             {/* === SECTION TOOLBOX === */}
             <section id="toolbox" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
              <h3 className="text-sm font-bold uppercase tracking-widest text-fuchsia-400 mb-8 font-mono sticky top-0 bg-[#050505]/90 py-2 z-20 backdrop-blur-md">
                // 04. TOOLBOX
              </h3>
              
              <div className="space-y-12">
                {toolboxData.map((category, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-slate-800 via-slate-700 to-transparent"></div>
                    
                    <h4 className="text-xs font-mono font-bold text-slate-400 mb-4 flex items-center gap-2">
                      <span className="text-cyan-500">root@portfolio:~$</span> ./list-{category.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}
                    </h4>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="group flex items-center gap-3 p-3 bg-slate-900/30 border border-slate-800 hover:border-cyan-400 hover:bg-slate-800/60 transition-all duration-200 cursor-default">
                          <div className={`text-lg ${item.color} group-hover:drop-shadow-[0_0_5px_currentColor] transition-all`}>
                            <i className={item.icon}></i>
                          </div>
                          <span className="text-xs font-mono font-medium text-slate-400 group-hover:text-white transition-colors">
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </main>
  );
}