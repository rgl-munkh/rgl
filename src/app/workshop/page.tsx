import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Users, CheckCircle } from "lucide-react";

export default function WorkshopPage() {
  const workshops = [
    {
      title: "React Fundamentals",
      description:
        "Learn the basics of React including components, props, state, and hooks.",
      duration: "4 hours",
      level: "Beginner",
      participants: "12-15",
      topics: [
        "JSX and Components",
        "Props and State Management",
        "Event Handling",
        "React Hooks (useState, useEffect)",
        "Building a Todo App",
      ],
    },
    {
      title: "Advanced Next.js",
      description:
        "Deep dive into Next.js features including SSR, SSG, API routes, and deployment.",
      duration: "6 hours",
      level: "Intermediate",
      participants: "8-12",
      topics: [
        "App Router vs Pages Router",
        "Server Components",
        "API Routes and Server Actions",
        "Static Site Generation",
        "Deployment Strategies",
      ],
    },
    {
      title: "Full Stack Development",
      description:
        "Build a complete web application from frontend to backend with modern tools.",
      duration: "8 hours",
      level: "Advanced",
      participants: "6-10",
      topics: [
        "Database Design with PostgreSQL",
        "Authentication & Authorization",
        "RESTful API Development",
        "Frontend Integration",
        "Testing and Deployment",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
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
          <h1 className="text-3xl font-bold mb-4">Coding Workshop</h1>
          <p className="text-zinc-300 text-lg mb-6">
            Interactive coding workshops designed to help developers level up
            their skills through hands-on learning and practical projects.
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <h2 className="text-lg font-semibold mb-3">Workshop Format</h2>
            <ul className="text-zinc-300 space-y-2">
              <li>• Small group sessions for personalized attention</li>
              <li>• Hands-on coding exercises and real-world projects</li>
              <li>• Code reviews and best practices discussion</li>
              <li>• Take-home resources and continued support</li>
            </ul>
          </div>
        </header>

        {/* Workshops */}
        <section className="space-y-8">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold">{workshop.title}</h3>
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    workshop.level === "Beginner"
                      ? "bg-green-900 text-green-300"
                      : workshop.level === "Intermediate"
                      ? "bg-yellow-900 text-yellow-300"
                      : "bg-red-900 text-red-300"
                  }`}
                >
                  {workshop.level}
                </span>
              </div>

              <p className="text-zinc-300 mb-6">{workshop.description}</p>

              {/* Workshop Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4" />
                  <span>{workshop.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Users className="w-4 h-4" />
                  <span>{workshop.participants} participants</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  <span>Weekend sessions</span>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Topics Covered:</h4>
                <ul className="space-y-2">
                  {workshop.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="flex items-center gap-2 text-zinc-300"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-zinc-200 transition-colors font-medium">
                Register Interest
              </button>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="mt-16 bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">
            Interested in a Custom Workshop?
          </h2>
          <p className="text-zinc-300 mb-4">
            I can create custom workshops tailored to your team's specific needs
            and skill level. Whether it's a specific technology, framework, or
            development practice, let's discuss how I can help.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-lg hover:bg-zinc-200 transition-colors font-medium">
            Get in Touch
          </button>
        </section>
      </div>
    </div>
  );
}
