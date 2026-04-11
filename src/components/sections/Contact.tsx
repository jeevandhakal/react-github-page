export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-blue-400 mb-8 rounded mx-auto" />

        <p className="text-slate-400 mb-10 leading-relaxed">
          I'm actively looking for a co-op or internship in Data Engineering
          or Data Analytics in Halifax. If you have an opportunity or just
          want to connect, feel free to reach out.
        </p>

        <a
          href="mailto:dhakaljeevan165@gmail.com"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors text-lg"
        >
          dhakaljeevan165@gmail.com
        </a>

        <div className="flex justify-center gap-8 mt-10 text-slate-400 text-sm">
          
          <a
            href="https://linkedin.com/in/dhakaljeevan"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          
          <a
            href="https://github.com/jeevandhakal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          
          <a
            href="https://dhakaljeevan.com.np"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}