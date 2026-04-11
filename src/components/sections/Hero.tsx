export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24"
    >
      <p className="text-blue-400 text-sm font-mono mb-4 tracking-widest uppercase">
        Available for Co-op · Halifax, NS
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-tight mb-4">
        Jeevan Dhakal
      </h1>

      <h2 className="text-xl md:text-2xl text-slate-400 mb-6">
        Aspiring{' '}
        <span className="text-blue-400 font-semibold">Data Engineer</span>
        {' '}· 2.5 yrs Backend Experience · MSc Computing & Data Analytics
      </h2>

      <p className="max-w-xl text-slate-400 text-base leading-relaxed mb-10">
        I build data pipelines, analyze real-world datasets, and turn raw
        data into clear decisions. Currently seeking a data engineering
        or analytics co-op in Halifax.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          View My Projects
        </a>
        <a
          href="#contact"
          className="border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Get In Touch
        </a>
      </div>
    </section>
  )
}