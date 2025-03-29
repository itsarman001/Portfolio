import { Button } from "@/components/ui/button";
import { aboutMe } from "@/data";
import { Mail, Github, Linkedin } from "lucide-react";
import { useNavigateTo } from "@/hooks";

export const Hero = () => {
  const navigateTo = useNavigateTo();
  return (
    <section className="pt-12">
      <div className="space-y-2">
        <p className="text-base font-normal text-muted-foreground">
          hi there👋, I'm
        </p>
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-primary/90">
            {aboutMe?.name}
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
            <a href={`mailto:${aboutMe?.socialLinks?.email}`}>
              <Mail />
            </a>
          </Button>
          <Button
            onClick={() => navigateTo(aboutMe?.socialLinks?.github, true)}
            variant="ghost"
            className="rounded-sm"
          >
            <Github />
          </Button>
          <Button
            onClick={() => navigateTo(aboutMe?.socialLinks?.linkedin, true)}
            variant="ghost"
            className="rounded-sm"
          >
            <Linkedin />
          </Button>
        </div>
      </div>
    </section>
  );
};
