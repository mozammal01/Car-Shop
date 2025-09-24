"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/logo/logo.png";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";
import { Menu, X, ChevronDown, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(navRef, { once: true });

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      href: "/",
      label: "Home",
      hasDropdown: false
    },
    {
      href: "#vehicles",
      label: "Listings",
      hasDropdown: true,
      dropdownItems: [
        { href: "#vehicles", label: "New Cars" },
        { href: "#vehicles", label: "Used Cars" },
        { href: "#vehicles", label: "Luxury Cars" },
        { href: "#vehicles", label: "Electric Cars" },
      ],
    },
    {
      href: "#blog",
      label: "Blog",
      hasDropdown: true,
      dropdownItems: [
        { href: "#blog", label: "Latest Posts" },
        { href: "#blog", label: "Car Reviews" },
        { href: "#blog", label: "Buying Tips" },
        { href: "#blog", label: "Industry News" },
      ],
    },
    {
      href: "",
      label: "Pages",
      hasDropdown: true,
      dropdownItems: [
        { href: "/brands", label: "brands" },
        { href: "/vehicles", label: "vehicles" },
        { href: "/contact", label: "contact" }
      ],
    },
    { href: "/contact", label: "About", hasDropdown: false },
    { href: "/contact", label: "Contact", hasDropdown: false },
  ];

  return (
    <motion.nav
      ref={navRef}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      className="w-full shadow-sm top-0 z-50 bg-primary md:bg-transparent"

    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="CarHut Logo" width={120} height={40} className="w-auto" priority />
            </Link>
          </div>

          {/* Right Side - Sign In & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, i) => (
              <div key={i} className="relative group">
                {link.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(link.label)}
                      className="flex items-center space-x-1  text-white hover:bg-white px-4 rounded-md hover:text-primary font-medium transition-colors duration-200 py-2"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform duration-200", activeDropdown === link.label ? "rotate-180" : "")}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {link.dropdownItems?.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-50 text-primary font-medium transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className=" text-white hover:bg-white px-4 rounded-md hover:text-primary font-medium transition-colors duration-200 py-2"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/signin"
              className="flex md:hidden lg:flex items-center space-x-2  text-white hover:text-primary font-medium transition-colors duration-200"
            >
              <div className="flex items-center space-x-2 hover:bg-white px-4 rounded-md py-2">
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </div>
            </Link>
            <Button className="bg-primary md:bg-transparent hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200 md:hidden lg:flex">
              Submit Listing
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={cn(
                "p-2 rounded-md transition-all duration-200 relative z-10",
                isOpen ? "bg-white text-primary hover:bg-gray-100" : "hover:bg-white hover:text-primary text-white"
              )}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-200",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link, i) => (
              <div key={i} className="px-4">
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(`mobile-${link.label}`)}
                      className="flex items-center justify-between w-full py-2 text-gray-900 hover:text-primary font-medium transition-colors duration-200"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          activeDropdown === `mobile-${link.label}` ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {activeDropdown === `mobile-${link.label}` && (
                      <div className="pl-4 py-2 space-y-2">
                        {link.dropdownItems?.map((item, i) => (
                          <Link
                            key={i}
                            href={item.href}
                            className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-900 hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Sign In & CTA */}
            <div className="px-4 py-4 border-t border-gray-200 space-y-3">
              <Link
                href="/signin"
                className="flex items-center space-x-2 py-2 text-gray-900 hover:text-primary font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
              <Button
                className="w-full bg-primary hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Submit Listing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
