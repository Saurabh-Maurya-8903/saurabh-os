import { ArrowRight, Download } from "lucide-react";
import { Button } from "../shared";

export default function HeroActions() {
  return (
    <div className="flex flex-wrap gap-4">

      <Button>
        View Projects
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <Button variant="secondary">
        Resume
        <Download className="ml-2 h-4 w-4" />
      </Button>

    </div>
  );
}