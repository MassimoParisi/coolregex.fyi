"use client";
import { CommandBar } from "@/components/custom/command-bar";
import { RegexCard } from "@/components/custom/RegexCard";
import { regexInfo } from "@/lib/regex_info";
import { motion } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredRegexInfo = search
    ? regexInfo.filter(
        (info) =>
          info.regex.includes(search) ||
          info.title.toLowerCase().includes(search.toLowerCase()) ||
          info.description.toLowerCase().includes(search.toLowerCase())
      )
    : regexInfo;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="p-4 w-full">
          <h1 className="text-3xl text-center font-bold mt-8 md:-mt-16 mb-8 w-full font-mono">
            coolregex.
            <span className="underline underline-offset-4 decoration-wavy decoration-yellow-300">
              fyi
            </span>
          </h1>
          <CommandBar
            search={search}
            setSearch={setSearch}
            filteredRegexInfo={filteredRegexInfo}
          />
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {filteredRegexInfo.map((info) => (
              <RegexCard
                key={info.regex}
                regex={info.regex}
                title={info.title}
                description={info.description}
                icon={info.icon}
              />
            ))}
            {/* <RegexCard
              regex="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
              title="Email Address"
              description="Validates a typical email address."
            />
            <RegexCard
              regex="^https?://(www.)?[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(/S*)?$"
              title="URL"
              description="Matches HTTP/HTTPS URLs."
            />
            <RegexCard
              regex="^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$
"
              title="IP Address (IPv4)"
              description="Validates IPv4 addresses."
            />
            <RegexCard
              regex="^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
              title="Hex Color"
              description="Matches hexadecimal color codes (#FFFFFF or #FFF)."
            />
            <RegexCard
              regex="<([a-zA-Z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)"
              title="Extracting HTML Tags"
              description="Matches and extracts HTML tags and their contents."
            />
            <RegexCard
              regex="^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$"
              title="Passport Number"
              description="Matches Passport Numbers."
            />
            <RegexCard
              regex="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              title="Slug"
              description="Matches slugs (strings with only lowercase letters, numbers, and hyphens)."
            /> */}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
