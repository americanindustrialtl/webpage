"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import { Phone, Shield, ChevronDown, Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "../lib/utils"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { useState } from "react"

const routes = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  {
    label: "Productos",
    items: [{ href: "/productos/durachem-500", label: "Durachem 500 Series" }],
  },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="American Industrial, Inicio">
          <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
            <Shield className="size-4" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <div className="font-semibold">{"American Industrial"}</div>
            <div className="text-xs text-muted-foreground">{"Tank Lining Systems"}</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {routes.map((route) => {
            if ("items" in route) {
              return (
                <DropdownMenu key={route.label}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground/90 transition-colors px-3 py-2 rounded-md hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 data-[state=open]:bg-accent/50">
                    {route.label}
                    <ChevronDown className="h-3 w-3 transition-transform data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {route.items.map((item) => (
                      <DropdownMenuItem key={item.href} asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )
            }
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm hover:text-foreground/90",
                  pathname === route.href ? "font-medium text-foreground" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop Contact Button */}
          <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white hidden sm:flex">
            <Link href="/contacto" aria-label="Contactar">
              <Phone className="mr-2 h-4 w-4" />
              {"Contactar"}
            </Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Abrir menú">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-3 text-left">
                  <div className="size-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <Shield className="size-4" aria-hidden="true" />
                  </div>
                  <div className="leading-tight">
                    <div className="font-semibold">{"American Industrial"}</div>
                    <div className="text-xs text-muted-foreground">{"Tank Lining Systems"}</div>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => {
                  if ("items" in route) {
                    return (
                      <div key={route.label} className="space-y-2">
                        <div className="font-medium text-sm text-muted-foreground px-2">{route.label}</div>
                        <div className="pl-4 space-y-2">
                          {route.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                "block py-2 px-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                                pathname === item.href ? "bg-accent text-accent-foreground font-medium" : "",
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        "py-2 px-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground transition-colors",
                        pathname === route.href ? "bg-accent text-accent-foreground font-medium" : "",
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {route.label}
                    </Link>
                  )
                })}

                {/* Mobile Contact Button */}
                <div className="pt-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Link href="/contacto">
                      <Phone className="mr-2 h-4 w-4" />
                      {"Contactar"}
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
