import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: "ecommerce",
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce solution built with Next.js, Stripe, and Supabase. Features include product management, shopping cart, checkout, and order tracking.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: [
        "Next.js",
        "TypeScript",
        "Stripe",
        "Supabase",
        "Tailwind CSS",
      ],
      liveUrl: "https://example-ecommerce.vercel.app",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      id: "taskapp",
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      liveUrl: "https://example-taskapp.vercel.app",
      githubUrl: "https://github.com/yourusername/task-management",
    },
    {
      id: "portfolio",
      title: "Developer Portfolio",
      description:
        "A minimalist portfolio template for developers featuring dark mode, responsive design, and smooth animations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
      liveUrl: "https://example-portfolio.vercel.app",
      githubUrl: "https://github.com/yourusername/developer-portfolio",
    },
    {
      id: "dashboard",
      title: "Analytics Dashboard",
      description:
        "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable widgets.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Chart.js"],
      liveUrl: "https://example-dashboard.vercel.app",
      githubUrl: "https://github.com/yourusername/analytics-dashboard",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-zinc-300 text-lg">
            A collection of projects I&lsquo;ve built, ranging from web
            applications to developer tools.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-zinc-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-zinc-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 text-sm rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-zinc-300 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
