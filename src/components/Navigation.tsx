import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const navItems = [
  { title: "Startseite", href: "/" },
  { title: "Über uns", href: "#about" },
  { title: "Dienstleistungen", href: "#services" },
  { title: "Kontakt", href: "#contact" },
  { title: "Formulare Downloads", href: "#downloads" },
];

export const Navigation = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container py-4">
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
      </div>
    </div>
  );
};