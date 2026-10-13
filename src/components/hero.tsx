
import SaleCard from "./sale-card";
import Reveal from "./reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden border-b border-[#35170f] bg-transparent"

    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 73% 48%, rgba(125, 38, 12, 0.44) 0%, rgba(53, 20, 10, 0.22) 40%, transparent 72%)",
        }}
      />

      {/* Dark overlay keeps text readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(3,3,3,0.52) 0%, rgba(3,3,3,0.2) 58%, transparent 100%)",
        }}
      />

      {/* Hero content */}
      <div className="relative mx-auto grid w-full max-w-[1216px] grid-cols-1 items-center gap-6 px-5 py-12 sm:gap-8 sm:px-8 sm:py-12 min-[850px]:min-h-[416px] min-[850px]:grid-cols-[minmax(0,1fr)_minmax(0,460px)] min-[850px]:gap-8 min-[850px]:py-8 lg:min-h-[500px] lg:gap-12 lg:px-10 lg:py-16">
        {/* Left content */}
        <Reveal className="relative z-10 max-w-[550px]">
          <div className="zoth-corner-frame mb-5 inline-flex items-center gap-2 border border-[#69301c] bg-[#100805]/80 px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.19em] text-[#ff4b12]">
            IDO COMING SOON
          </div>

          <h1 className="max-w-[540px] text-[34px] font-medium leading-[1.05] tracking-[-0.055em] text-[#f7f5f3] sm:text-[44px] min-[850px]:text-[40px] lg:text-[48px]">
            $ZOTH is coming.
          </h1>

          <p className="mt-3 max-w-[390px] text-[11px] leading-[1.65] text-[#a49a95] sm:text-[12px]">
            $ZOTH captures value across the Zoth ecosystem. Stake it to receive
            ZOTH and unlock better fees, rewards, and product benefits.
          </p>
        </Reveal>

        {/* Right-side sale card */}
        <Reveal
          id="sale"
          className="relative z-10 mx-auto w-full max-w-[460px]"
          delay={0.12}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-8 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(ellipse, rgba(255, 70, 15, 0.24) 0%, rgba(115, 36, 14, 0.14) 42%, transparent 72%)",
            }}
          />

          <SaleCard />
        </Reveal>
      </div>

      {/* Bottom border accent */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,75,18,0.45), rgba(93,38,22,0.5), transparent)",
        }}
      />
    </section>
  );
}
