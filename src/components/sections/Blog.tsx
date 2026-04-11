import { blogPosts } from '../../data/blog'

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-100 mb-2">Articles</h2>
      <div className="w-12 h-1 bg-blue-400 mb-10 rounded" />

      <div className="space-y-6">
        {blogPosts.map(post => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noreferrer"
            className="block bg-slate-800 border border-slate-700 hover:border-blue-400 rounded-xl p-6 transition-colors group"
          >
            <div className="flex justify-between items-start gap-4">
              <div>
                <h3 className="text-slate-100 font-medium group-hover:text-blue-400 transition-colors mb-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm">{post.summary}</p>
              </div>
              <span className="text-slate-500 text-xs shrink-0">{post.date}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}