import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl font-medium mb-2">Your Name</h1>
          <p className="text-zinc-400">Full Stack Developer</p>
        </header>

        {/* Navigation */}
        <nav className="mb-16">
          <ul className="space-y-4">
            <li>
              <Link
                href="/resume"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                Resume
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                Projects
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link
                href="/workshop"
                className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
              >
                Coding Workshop
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Today Section */}
        <section className="mb-16">
          <h2 className="text-lg font-medium mb-6">Today</h2>
          <div className="space-y-4 text-zinc-300 leading-relaxed">
            <p>
              I work as a full stack developer, building modern web applications
              with React, Next.js, and Node.js. I enjoy creating intuitive user
              experiences and solving complex technical challenges.
            </p>
            <p>
              Previously, I worked on various projects ranging from e-commerce
              platforms to developer tools, always focusing on clean code and
              user-centered design.
            </p>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section>
          <h2 className="text-lg font-medium mb-6">Featured Projects</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-medium mb-2">E-Commerce Platform</h3>
              <p className="text-zinc-400 mb-3">
                A modern e-commerce solution built with Next.js and Stripe.
              </p>
              <Link
                href="/projects#ecommerce"
                className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                View project
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div>
              <h3 className="font-medium mb-2">Task Management App</h3>
              <p className="text-zinc-400 mb-3">
                A collaborative task management tool with real-time updates.
              </p>
              <Link
                href="/projects#taskapp"
                className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                View project
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>

            <div>
              <h3 className="font-medium mb-2">Developer Portfolio</h3>
              <p className="text-zinc-400 mb-3">
                A minimalist portfolio template for developers.
              </p>
              <Link
                href="/projects#portfolio"
                className="inline-flex items-center gap-1 text-sm text-zinc-300 hover:text-white transition-colors"
              >
                View project
                <ArrowUpRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
