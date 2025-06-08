import Link from "next/link";
import { ArrowLeft, Code2 } from "lucide-react";
import { CodePreview } from "@/components/code-preview";
import { CopyButtonPreview } from "@/components/copy-button-preview";

const copyButtonCode = `"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

export const CopyButton = () => {
  const [copied, setCopied] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  } as const;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText("Copied !!!").catch(console.error);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, []);

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.span
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {children}
    </motion.span>
  );

  return (
    <div className="space-y-2">
      <button
        onClick={onCopy}
        className="border border-gray-300 rounded-md p-2 cursor-pointer [&_svg]:stroke-gray-800 hover:bg-gray-50 hover:[&_svg]:stroke-black border:border-gray-400"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <IconWrapper key="checkmark">
              <Check size={16} />
            </IconWrapper>
          ) : (
            <IconWrapper key="copy">
              <Copy size={16} />
            </IconWrapper>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};`;

const components = [
  {
    id: "copy-button",
    title: "Copy Button",
    description: "A button component that copies text to clipboard with animation.",
    icon: <Code2 className="w-4 h-4" />,
    code: copyButtonCode,
  },
];

export default function WorkshopPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <aside className="fixed top-14 left-0 w-64 h-[calc(100vh-3.5rem)] border-r bg-card">
          <div className="p-6">
            <h2 className="font-semibold mb-4">Components</h2>
            <nav className="space-y-1">
              {components.map((component) => (
                <a
                  key={component.id}
                  href={`#${component.id}`}
                  className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                >
                  {component.icon}
                  {component.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 pl-64">
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
              <h1 className="text-3xl font-bold mb-4">Components</h1>
              <p className="text-muted-foreground text-lg">
                A collection of reusable components for your next project.
              </p>
            </header>

            {/* Components */}
            <div className="space-y-12">
              {components.map((component) => (
                <div
                  key={component.id}
                  id={component.id}
                  className="scroll-mt-20"
                >
                  <div className="bg-card rounded-lg border p-6">
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-bold">{component.title}</h2>
                        <p className="text-muted-foreground mt-1">
                          {component.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Preview</h3>
                        <div className="p-4 rounded-lg border bg-card">
                          <CopyButtonPreview />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="font-semibold">Code</h3>
                        <CodePreview code={component.code} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
