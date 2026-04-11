import { useState } from 'react'
import { projects } from '../../data/projects'
import type { Project } from '../../types'

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col gap-4 hover:border-blue-400 transition-colors">
      {project.featured && (
        <span className="text-xs text-blue-400 font-mono uppercase tracking-widest">
          ⭐ Featured
        </span>
      )}

      <h3 className="text-slate-100 font-semibold text-lg leading-snug">
        {project.title}
      </h3>

      <div className="space-y-1 text-sm text-slate-400">
        <p><span className="text-slate-500">Problem: </span>{project.problem}</p>
        <p><span className="text-slate-500">Outcome: </span>{project.outcome}</p>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {project.tools.map(tool => (
          <span
            key={tool}
            className="bg-slate-700 text-blue-300 text-xs px-3 py-1 rounded-full"
          >
            {tool}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visible = showAll ? projects : projects.filter(p => p.featured)

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Projects</h2>
        <div className="w-12 h-1 bg-blue-400 mb-10 rounded" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="border border-slate-600 hover:border-blue-400 text-slate-400 hover:text-blue-400 px-6 py-2 rounded-lg text-sm transition-colors"
          >
            {showAll ? 'Show Less' : `Show All Projects (${projects.length})`}
          </button>
        </div>
      </div>
    </section>
  )
}