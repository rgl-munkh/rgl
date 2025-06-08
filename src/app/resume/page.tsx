import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Back Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Batorgil Munkhzorig</h1>
              <p className="text-xl text-muted-foreground">Software engineer</p>
            </div>
            <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              orgil0588@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +976 9600-5310
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Ulaanbaatar, MN
            </div>
          </div>
        </header>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Experience</h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Senior Full Stack Developer</h3>
                <span className="text-muted-foreground">2022 - Present</span>
              </div>
              <p className="text-muted-foreground mb-2">Tech Startup Inc.</p>
              <ul className="text-muted-foreground space-y-1">
                <li>
                  • Led development of core platform features using React and
                  Node.js
                </li>
                <li>
                  • Improved application performance by 40% through optimization
                </li>
                <li>• Mentored junior developers and conducted code reviews</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium">Full Stack Developer</h3>
                <span className="text-muted-foreground">2020 - 2022</span>
              </div>
              <p className="text-muted-foreground mb-2">Digital Agency Co.</p>
              <ul className="text-muted-foreground space-y-1">
                <li>• Built responsive web applications for various clients</li>
                <li>• Implemented RESTful APIs and database designs</li>
                <li>
                  • Collaborated with design teams to create pixel-perfect UIs
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Frontend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>React / Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Vue.js</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Backend</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Node.js</li>
                <li>Python</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-3">Tools</h3>
              <ul className="text-muted-foreground space-y-1">
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>Vercel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-xl font-semibold mb-6">Education</h2>
          <div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-muted-foreground">2016 - 2020</span>
            </div>
            <p className="text-muted-foreground">University of Technology</p>
          </div>
        </section>
      </div>
    </div>
  );
}
