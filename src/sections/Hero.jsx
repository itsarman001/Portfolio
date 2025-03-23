import { Button } from "@/components/ui/button";

import { Mail, Github, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I'm
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            Md Arman
          </h1>
          <h2 className="flex flex-col gap-0 text-base font-normal text-primary/90">
            <p>20 he/him</p>
            <p>
              Passionate about building high-performance and scalable web
              applications.
            </p>
          </h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Button className="rounded-sm">Resume</Button>
          <Button variant="ghost" className="rounded-sm">
            <Mail />
          </Button>
          <Button variant="ghost" className="rounded-sm">
            <Github />
          </Button>
          <Button variant="ghost" className="rounded-sm">
            <Linkedin />
          </Button>
        </div>
      </div>
    </section>
  );
};
