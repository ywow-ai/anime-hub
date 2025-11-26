import "@/assets/main.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed velit
        molestiae eveniet neque possimus vel placeat consectetur nihil repellat
        atque doloribus, deleniti earum natus dolores quis pariatur vitae.
        Itaque, iste?
      </p>
      <ModeToggle />
    </ThemeProvider>
  </StrictMode>,
);
