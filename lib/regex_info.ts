export const regexInfo = [
  {
    regex: "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
    title: "Password Strength",
    description:
      "at least 8 characters, one uppercase, one lowercase, one number, one special character",
  },
  {
    regex: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    title: "Email Address",
    description: "Validates a typical email address.",
  },
  {
    regex: "^https?://(www.)?[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(/S*)?$",
    title: "URL",
    description: "Matches HTTP/HTTPS URLs.",
  },
  {
    regex:
      "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$",
    title: "IP Address (IPv4)",
    description: "Validates IPv4 addresses.",
  },
  {
    regex: "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$",
    title: "Hex Color",
    description: "Matches hexadecimal color codes (#FFFFFF or #FFF).",
  },
  {
    regex: "<([a-zA-Z]+)([^<]+)*(?:>(.*)</\\1>|s+/>)",
    title: "Extracting HTML Tags",
    description: "Matches and extracts HTML tags and their contents.",
  },
  {
    regex: "^[A-PR-WY][1-9]ds?d{4}[1-9]$",
    title: "Passport Number",
    description: "Matches Passport Numbers.",
  },
  {
    regex: "^[a-z0-9]+(?:-[a-z0-9]+)*$",
    title: "Slug",
    description:
      "Matches slugs (strings with only lowercase letters, numbers, and hyphens).",
  },
];
