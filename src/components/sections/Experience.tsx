import { experiences } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-2">Experience</h2>
      <div className="w-12 h-1 bg-blue-400 mb-10 rounded" />

      <div className="relative border-l border-slate-700 space-y-12 pl-8">
        {experiences.map((exp, i) => (
          <div key={i} className="relative">
            {/* Timeline dot */}
            <div className="absolute -left-11 top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-slate-950" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-slate-100 font-semibold text-lg">{exp.title}</h3>
              <span className="text-slate-500 text-sm">{exp.period}</span>
            </div>

            <p className="text-blue-400 text-sm mb-1">{exp.company}</p>
            <p className="text-slate-500 text-xs mb-4">{exp.location}</p>

            <ul className="space-y-2 mb-4">
              {exp.bullets.map((bullet, j) => (
                <li key={j} className="text-slate-400 text-sm flex gap-2">
                  <span className="text-blue-400 mt-1 shrink-0">▸</span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span
                  key={skill}
                  className="bg-slate-800 text-slate-400 text-xs px-3 py-1 rounded-full border border-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}