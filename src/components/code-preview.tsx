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
      <div className="absolute flex gap-2 right-2 top-2">
        <button
          onClick={onCopy}
          className="p-2 transition-colors border rounded-md cursor-pointer border-border hover:bg-accent"
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
      <pre className="p-4 overflow-x-auto rounded-lg bg-muted">
        <code className="font-mono text-sm">
          {previewLines.join("\n")}
          {hasMoreLines && !isExpanded && (
            <div className="mt-2 text-muted-foreground">...</div>
          )}
        </code>
      </pre>
      {hasMoreLines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-center w-full gap-2 py-2 mt-2 text-sm transition-colors text-muted-foreground hover:text-foreground"
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
