import BrandMark from "./brand-mark";

const footerLinks = [
  { label: "Smart-Contract Audit", href: "#smart-contract-audit" },
  { label: "Terms of Service", href: "#sale-terms" },
  { label: "Risk Disclosure", href: "#risk-disclosure" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0305]">
      <div className="mx-auto flex w-full flex-col gap-5 px-5 py-6 sm:w-[88%] sm:px-0 md:flex-row md:items-center md:justify-between md:gap-8 lg:w-[82%] lg:max-w-[1100px]">
        <a
          href="#home"
          aria-label="Zoth home"
          className="flex w-fit items-center gap-1.5"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f4efec]">
            <BrandMark className="h-[19px] w-[19px]" />
          </span>
          <span className="text-[18px] font-medium tracking-[-0.04em] text-[#e8e3e1]">
            Zoth
          </span>
        </a>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-7 gap-y-2 md:justify-center"
        >
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[9px] text-[#b8b0ad] transition-colors hover:text-[#f3efee]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-[9px] text-[#b8b0ad] md:shrink-0 md:text-right">
          © 2026 ZOTH. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
