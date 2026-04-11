export default function Footer() {
    return (
      <footer className="py-8 text-center text-slate-600 text-sm border-t border-slate-800">
        Built with React · TypeScript · Tailwind CSS
        <br />
        <span className="text-slate-700">© {new Date().getFullYear()} Jeevan Dhakal</span>
      </footer>
    )
  }