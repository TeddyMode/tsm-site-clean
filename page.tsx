'use client'

export default function Page() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-neutral-950/80">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="font-black tracking-tight text-xl flex items-center gap-2">
            <img src="/tsm-emblem.svg" alt="TEDDY SILENCE MODE" className="h-6 w-6"/>
            TEDDY <span className="text-emerald-400">SILENCE</span> MODE
          </a>
          <a href="#apply" className="inline-flex items-center rounded-2xl px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">Apply</a>
        </div>
      </header>

      <section id="home" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            Say nothing. <span className="text-emerald-400">Dominate</span> everything.
          </h1>
          <p className="text-white/70 mt-4 text-lg max-w-xl">
            Mindset × programming × accountability for sub-12 Ironman and first 70.3 — without chaos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="rounded-2xl px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">Start your intake</a>
            <a href="#leadmagnet" className="rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5">Free 12-Week Playbook</a>
          </div>
        </div>
        <div className="rounded-3xl bg-white/5 border border-white/10 p-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">Race Readiness</p>
          <p className="text-5xl md:text-6xl font-black">70.3</p>
          <p className="text-white/70 mt-2">12-week progression • strength + swim/bike/run</p>
        </div>
      </section>

      <section id="apply" className="border-t border-white/10 bg-neutral-900/40">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black">Ready to go all‑in?</h2>
            <p className="text-white/70 mt-2">Apply for a coaching spot. Limited capacity for high‑touch athletes.</p>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white/5 border border-white/10 rounded-3xl p-6">
            <div className="grid md:grid-cols-2 gap-3">
              <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3" placeholder="Full name" required />
              <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3" placeholder="Email" type="email" required />
              <input className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 md:col-span-2" placeholder="Goal (e.g., 70.3 in April)" required />
              <textarea className="rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 md:col-span-2" rows={4} placeholder="Tell me about your current training & constraints" />
            </div>
            <button className="mt-4 w-full rounded-xl px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">Submit application</button>
            <p className="text-white/50 text-xs mt-2">Hook this form to /api later.</p>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 flex items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} TEDDY SILENCE MODE</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="/privacy">Privacy</a>
            <a className="hover:text-white" href="/terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
