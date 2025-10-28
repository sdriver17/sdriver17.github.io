import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-16 border-t border-border dark:border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center gap-8">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:text-accent-green-hover transition-colors text-3xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:text-accent-green-hover transition-colors text-3xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-green hover:text-accent-green-hover transition-colors text-3xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}
