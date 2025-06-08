import { CodePreview } from "@/components/code-preview";

const component = {
  code: `"use client";

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
};`
};

export default function ComponentsPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-2xl p-8">
        <div className="space-y-8">
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigator.clipboard.writeText("Copied !!!").catch(console.error);
              }}
              className="border border-gray-300 rounded-md p-2 cursor-pointer [&_svg]:stroke-gray-800 hover:bg-gray-50 hover:[&_svg]:stroke-black border:border-gray-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </button>
          </div>

          <CodePreview code={component.code} />
        </div>
      </div>
    </div>
  );
} 