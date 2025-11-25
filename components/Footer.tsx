import { Instagram, Linkedin, Github } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Footer() {
  return (
    <footer className="w-full py-8 mt-16 border-t border-border">
      <div className="max-w-6xl mx-auto px-4">
        <TooltipProvider>
          <div className="flex justify-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-secondary hover:text-primary transition-all hover:scale-110"
                >
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Follow on Instagram</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-secondary hover:text-primary transition-all hover:scale-110"
                >
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Connect on LinkedIn</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:bg-secondary hover:text-primary transition-all hover:scale-110"
                >
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>View GitHub Profile</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      </div>
    </footer>
  );
}
