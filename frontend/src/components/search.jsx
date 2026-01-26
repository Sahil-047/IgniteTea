import * as React from "react";
import { SearchIcon } from "lucide-react";

import {
  CommandDialog,
  CommandInput,
} from "@/components/ui/command";

export function Search() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <button className="" onClick={() => setOpen(true)}>
        <span className="flex grow items-center">
          <SearchIcon
            className="text-black hover:text-black/80 -ms-1 me-3"
            size={20}
            aria-hidden="true" />
        </span>
      </button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput 
          placeholder="Search for teas..." 
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        />
      </CommandDialog>
    </>
  );
}
