
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ConnectDialog from "./connect-dialog";
import BrandMark from "./brand-mark";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Tokenomics", href: "#token-sale-details" },
  { label: "Blogs", href: "#partners" },
  { label: "Docs", href: "#read-before-commit" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="relative z-50 bg-[#080504]/80">
      <div className="mx-auto flex h-[58px] max-w-[1216px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#home"
          aria-label="ZOTH home"
          className="flex shrink-0 items-center gap-2"
          onClick={closeMenu}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4efec]">
            <BrandMark className="h-[19px] w-[19px]" />
          </span>

          <span className="text-[17px] font-semibold tracking-[-0.065em] text-[#f5f3f2]">
            Zoth
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="zoth-nav-frame zoth-corner-frame hidden items-center gap-5 px-5 py-2 md:flex lg:gap-8 lg:px-7"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-medium text-[#a99a93] transition-colors hover:text-[#ff4b12]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <ConnectDialog
            service="Sonar"
            className="zoth-outline-button inline-flex h-9 items-center justify-center gap-2 px-3 text-[9px] font-medium uppercase tracking-[0.04em] lg:px-4"
          >
            Connect Sonar
          </ConnectDialog>

          <ConnectDialog
            service="Wallet"
            className="zoth-orange-button inline-flex h-9 items-center justify-center gap-2 px-3 text-[9px] font-semibold uppercase tracking-[0.04em] lg:px-4"
          >
            Connect Wallet
            <ArrowUpRight size={12} />
          </ConnectDialog>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-9 w-9 items-center justify-center border border-[#492317] text-[#f5f3f2] sm:hidden"
        >
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-[#35180f] bg-[#070403] px-5 py-5 sm:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-[#29140d] py-3 text-[11px] text-[#b5a39b] transition-colors hover:text-[#ff4b12]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-1 gap-2">
            <ConnectDialog
              service="Sonar"
              onOpen={closeMenu}
              className="zoth-outline-button min-h-10 px-4 text-[10px] uppercase tracking-[0.05em]"
            >
              Connect Sonar
            </ConnectDialog>

            <ConnectDialog
              service="Wallet"
              onOpen={closeMenu}
              className="zoth-orange-button min-h-10 px-4 text-[10px] uppercase tracking-[0.05em]"
            >
              Connect Wallet
            </ConnectDialog>
          </div>
        </div>
      )}
    </header>
  );
}
