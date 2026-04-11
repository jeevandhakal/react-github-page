export default function About() {
    return (
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-blue-400 mb-10 rounded" />
  
        <div className="grid md:grid-cols-2 gap-12 text-slate-400 leading-relaxed">
          <div className="space-y-4">
            <p>
              I'm a backend developer transitioning into Data Engineering,
              currently completing my{' '}
              <span className="text-slate-200 font-medium">
                MSc in Computing and Data Analytics
              </span>{' '}
              at Saint Mary's University in Halifax, Canada.
            </p>
            <p>
              My engineering background gave me something most data candidates
              don't have — real production experience. I designed PostgreSQL
              databases for enterprise ERP systems, built payroll calculation
              engines, created data export workflows for business teams, and
              deployed systems on AWS with Docker.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              During my MSc, I've applied that foundation to real data problems:
              forecasting Nova Scotia energy demand, analyzing public health
              datasets, and processing large datasets with PySpark and Hive.
            </p>
            <p>
              I'm currently looking for a{' '}
              <span className="text-blue-400 font-medium">
                co-op or internship in Data Engineering or Data Analytics
              </span>{' '}
              where I can work with real data, build pipelines, and help teams
              make better decisions.
            </p>
            <div className="pt-2">
              <a
                href="/resume.pdf"
                className="text-blue-400 hover:underline font-medium text-sm"
              >
                Download Resume →
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }