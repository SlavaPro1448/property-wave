import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { title: "Startseite", href: "/" },
  { title: "Über uns", href: "#about" },
  { title: "Dienstleistungen", href: "#services" },
  { title: "Kontakt", href: "#contact" },
  { title: "Formulare Downloads", href: "#downloads" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container py-4">
        {isMobile ? (
          <div>
            <div className="flex justify-between items-center">
              <span className="font-semibold text-primary">Hausverwaltung Frank</span>
              <button onClick={toggleMenu} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            {isMenuOpen && (
              <nav className="mt-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.title}>
                      <a
                        href={item.href}
                        className="block py-2 text-primary hover:text-primary/80"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        ) : (
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn(navigationMenuTriggerStyle(), "text-primary")}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        )}
      </div>
    </div>
  );
};