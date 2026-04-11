import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-blue-400 mb-10 rounded" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(group => (
            <div
              key={group.category}
              className="bg-slate-800 rounded-xl p-6 border border-slate-700"
            >
              <h3 className="text-blue-400 font-semibold text-sm mb-4 uppercase tracking-wide">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="bg-slate-700 text-slate-300 text-xs px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}