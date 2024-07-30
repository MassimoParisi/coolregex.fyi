import { useCopyToClipboard } from "@/lib/hooks/copy";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, FlaskConical } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import RegexHighlighter from "./regex-input";

type RegexCardProps = {
  regex: string;
  title: string;
  description: string;
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

export const RegexCard: React.FC<RegexCardProps> = ({
  regex,
  title,
  description,
}) => {
  const [_, isCopied, copy] = useCopyToClipboard();
  const [testString, setTestString] = useState("");
  const [openTestSection, setOpenTestSection] = useState(false);

  const testRegex = new RegExp(regex);
  const isEmpty = testString.length === 0;
  const isMatch = testRegex.test(testString);

  const CopyIcon = isCopied ? Check : Copy;

  return (
    <motion.div
      variants={item}
      className="py-4 px-8 rounded-md shadow-md overflow-hidden"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold w-full font-mono">{title}</h2>
          <h3 className="text-md text-gray-400 mb-2">{description}</h3>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <FlaskConical
                onClick={() => setOpenTestSection(!openTestSection)}
                size="32px"
                className="text-blue-600 bg-blue-200 p-2 rounded-md"
              />
            </TooltipTrigger>
            <TooltipContent>Test it!</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <div className="border relative rounded-md flex items-center justify-between py-2 px-2 group overflow-hidden">
        <RegexHighlighter regex={regex} />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <CopyIcon
                onClick={() => copy(regex)}
                size="48px"
                className="text-gray-400 bg-gray-100 absolute right-0 inset-y-0 h-full py-1 px-3 hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 hover:scale-110"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <AnimatePresence>
        {openTestSection && (
          <motion.div
            className="relative"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <Input
              placeholder="Write your test string here"
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              className={`mt-4 ${
                isEmpty ? "" : isMatch ? "border-green-500" : "border-red-500"
              }`}
            />
            {!isEmpty && (
              <div
                className={`absolute flex items-center justify-center right-4 top-0 bottom-0 text-sm`}
              >
                <div
                  className={`px-2 py-1 rounded-md ${
                    isMatch
                      ? "text-green-600 bg-green-200"
                      : "text-red-600 bg-red-200"
                  }`}
                >
                  {isMatch ? "Matched!" : "No match"}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
