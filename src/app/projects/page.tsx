import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

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
    <div className="container py-8 mx-auto">
      {/* Header */}
      <header className="mb-12">
        <h1 className="mb-4 text-3xl font-bold">Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of projects I&apos;ve built, ranging from web
          applications to developer tools.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            id={project.id}
            className="overflow-hidden border rounded-lg bg-card"
          >
            {/* Project Image */}
            <div className="relative h-48 bg-muted">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-sm rounded bg-muted text-muted-foreground"
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
                  className="inline-flex items-center gap-2 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors text-muted-foreground hover:text-foreground"
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
  );
}
