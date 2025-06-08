"use client";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useState } from "react";

export function CopyButtonPreview() {
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
    <div className="flex justify-center">
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
} 