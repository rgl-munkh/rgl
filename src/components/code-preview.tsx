"use client";

import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

interface CodePreviewProps {
  code: string;
}

export function CodePreview({ code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  } as const;

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(code).catch(console.error);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, [code]);

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

  const codeLines = code.split("\n");
  const previewLines = isExpanded ? codeLines : codeLines.slice(0, 10);
  const hasMoreLines = codeLines.length > 10;

  return (
    <div className="relative">
      <div className="absolute right-2 top-2 flex gap-2">
        <button
          onClick={onCopy}
          className="border border-border rounded-md p-2 cursor-pointer hover:bg-accent transition-colors"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <IconWrapper key="checkmark">
                <Check className="w-4 h-4" />
              </IconWrapper>
            ) : (
              <IconWrapper key="copy">
                <Copy className="w-4 h-4" />
              </IconWrapper>
            )}
          </AnimatePresence>
        </button>
      </div>
      <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
        <code className="text-sm font-mono">
          {previewLines.join("\n")}
          {hasMoreLines && !isExpanded && (
            <div className="mt-2 text-muted-foreground">...</div>
          )}
        </code>
      </pre>
      {hasMoreLines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
} 