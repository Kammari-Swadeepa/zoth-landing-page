const partners = [
  { name: "Borderless", style: "borderless" },
  { name: "TAISU", style: "taisu" },
  { name: "BLOCKCHAIN", style: "blockchain" },
  { name: "Chainlink", style: "chainlink" },
  { name: "coinbase", style: "coinbase" },
  { name: "MINDFULNESS", style: "mindfulness" },
];

export default function Partners() {
  return (
    <section id="partners" aria-label="Partners and backers" className="zoth-partners">
      <div className="zoth-partners__rail">
        <div className="zoth-partners__label">Partners<br />&amp; Backers</div>
        <div className="zoth-partners__list">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`zoth-partners__logo zoth-partners__logo--${partner.style}`}
            >
              {partner.style === "borderless" && (
                <span aria-hidden="true" className="zoth-partners__mark zoth-partners__mark--borderless" />
              )}
              {partner.style === "blockchain" && (
                <span aria-hidden="true" className="zoth-partners__mark zoth-partners__mark--blockchain" />
              )}
              {partner.style === "chainlink" && (
                <span aria-hidden="true" className="zoth-partners__mark zoth-partners__mark--chainlink" />
              )}
              {partner.style === "coinbase" && (
                <span aria-hidden="true" className="zoth-partners__mark zoth-partners__mark--coinbase">C</span>
              )}
              <span>{partner.name}</span>
            </div>
          ))}
        </div>
        <span aria-hidden="true" className="zoth-partners__nodes zoth-partners__nodes--start" />
        <span aria-hidden="true" className="zoth-partners__nodes zoth-partners__nodes--split" />
        <span aria-hidden="true" className="zoth-partners__nodes zoth-partners__nodes--end" />
      </div>
    </section>
  );
}
