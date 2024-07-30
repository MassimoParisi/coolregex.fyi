"use client";
import { RegexCard } from "@/components/custom/RegexCard";
import { animate, motion } from "framer-motion";

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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="p-4 w-full">
          <h1 className="text-2xl text-center font-bold mb-4 w-full font-mono">
            coolregex.
            <span className="underline underline-offset-4 decoration-wavy decoration-yellow-300">
              fyi
            </span>
          </h1>
          <motion.div
            className="flex flex-col gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <RegexCard
              regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
              title="Password Strength"
              description="at least 8 characters, one uppercase, one lowercase, one number, one
        special character"
            />
            <RegexCard
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
            {/* <RegexCard
              regex="^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$"
              title="Social Security Number"
              description="Matches Social Security Numbers (SSN)."
            /> */}
            <RegexCard
              regex="^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$"
              title="Passport Number"
              description="Matches Passport Numbers."
            />
            <RegexCard
              regex="^[a-z0-9]+(?:-[a-z0-9]+)*$"
              title="Slug"
              description="Matches slugs (strings with only lowercase letters, numbers, and hyphens)."
            />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
