const resources = [
  { title: "Smart-contract audit", href: "#smart-contract-audit" },
  { title: "Terms of Service", href: "#sale-terms" },
  { title: "Risk Disclosure", href: "#risk-disclosure" },
];

export default function ReadBeforeCommit() {
  return (
    <aside
      id="read-before-commit"
      aria-labelledby="read-before-commit-title"
      className="zoth-read-card relative border border-[#532015] bg-[#0d0604] px-5 py-4"
    >
      <h3
        id="read-before-commit-title"
        className="border-b border-[#35180f] pb-2 text-[10px] font-medium text-[#e4dfdd]"
      >
        Read before you commit
      </h3>

      <ul className="mt-2">
        {resources.map((resource) => (
          <li
            key={resource.title}
            className="flex min-h-[27px] items-center justify-between gap-3 text-[10px] text-[#c3bcba]"
          >
            <span>{resource.title}</span>
            <a
              href={resource.href}
              className="zoth-read-link shrink-0 text-[#9d9693] transition-colors hover:text-white"
            >
              View
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
