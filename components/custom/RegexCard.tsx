import { useCopyToClipboard } from "@/lib/hooks/copy";
import { Check, Copy } from "lucide-react";
import React from "react";
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

export const RegexCard: React.FC<RegexCardProps> = ({
  regex,
  title,
  description,
}) => {
  const [_, isCopied, copy] = useCopyToClipboard();
  const CopyIcon = isCopied ? Check : Copy;
  return (
    <div className="py-4 px-8 rounded-md shadow-md">
      <h2 className="text-xl font-bold w-full font-mono">{title}</h2>
      <h3 className="text-md text-gray-400 mb-2">{description}</h3>
      <div className="border rounded-md flex items-center cursor-pointer justify-between py-2 px-2 group">
        <RegexHighlighter regex={regex} />
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <CopyIcon
                onClick={() => copy(regex)}
                size="32px"
                className="text-gray-300 p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 transition-all duration-200 hover:scale-110"
              />
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};
