"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import ConnectDialog from "./connect-dialog";
import { fetchSale, type SaleData } from "@/src/lib/sale";

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);

const formatShortAmount = (amount: number) =>
  amount >= 1_000_000
    ? `$${amount / 1_000_000}M`
    : `$${amount / 1_000}K`;

export default function SaleCard() {
  const { data, isLoading, isError } = useQuery<SaleData>({
    queryKey: ["sale"],
    queryFn: fetchSale,
    refetchInterval: 30_000,
  });
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-2" aria-label="Loading sale information">
        <div className="zoth-sale-panel min-h-[240px] animate-pulse p-5">
          <div className="h-3 w-28 bg-[#28140e]" />
          <div className="mt-7 h-10 w-36 bg-[#28140e]" />
          <div className="mt-7 h-[3px] bg-[#28140e]" />
        </div>
        <div className="zoth-sale-panel min-h-[118px] animate-pulse p-5" />
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div
        role="alert"
        className="zoth-sale-panel p-5 text-xs text-[#f5f3f2]"
      >
        <p>Sale information unavailable</p>
        <p className="mt-2 text-[10px] text-[#94847d]">
          Please refresh the page and try again.
        </p>
      </div>
    );
  }

  const progress =
    data.fundingGoal > 0
      ? Math.min(100, (data.totalRaised / data.fundingGoal) * 100)
      : 0;
  const closed = new Date(data.closesAt).getTime() <= (now ?? 0);

  return (
    <div className="space-y-2">
      <section
        aria-label="Live token sale"
        className="zoth-sale-panel p-4 sm:p-5"
      >
        <div className="flex items-center justify-between gap-3">
          <p className="text-[9px] text-[#b6a097]">
            {data.tokenName} IDO on Sonar
          </p>
          <span
            className={`inline-flex items-center gap-1.5 border border-[#3a1b13] px-2 py-1 text-[8px] uppercase tracking-[0.08em] ${
              closed ? "text-[#81736c]" : "text-white"
            }`}
          >
            <span
              className={`h-1 w-1 rounded-full ${
                closed ? "bg-[#81736c]" : "bg-[#ff4b12]"
              }`}
            />
            {closed ? "Ended" : "Live"}
          </span>
        </div>

        <div className="mt-7 flex items-end justify-between gap-3 sm:mt-8">
          <div>
            <p className="text-[9px] text-[#a18e85]">Total Sale</p>
            <p className="mt-1 text-[30px] font-medium leading-none tracking-[-0.055em] sm:text-[34px]">
              ${formatAmount(data.totalRaised)}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[8px] text-[#a18e85]">Subscription Status</p>
            <p className="mt-1 text-[25px] font-medium leading-none tracking-[-0.045em] text-[#ff4b12] sm:text-[29px]">
              {data.subscriptionStatus.toFixed(2)}x
            </p>
          </div>
        </div>

        <div
          className="mt-4 h-[3px] w-full overflow-hidden bg-[#301810]"
          role="progressbar"
          aria-label="Sale funding progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <div
            className="h-full bg-[#ff4b12] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-[#a18e85]">
          <span>
            ${formatAmount(data.totalRaised)} {data.currency}
          </span>
          <span>Target: {formatShortAmount(data.targetAmount)}</span>
        </div>

        <div className="mt-4 border border-[#321710] bg-[#060303] px-4 py-3 shadow-[inset_0_0_12px_rgba(255,65,12,0.025)]">
          <p className="text-[8px] text-[#a18e85]">Round Size</p>
          <p className="mt-1 text-[19px] font-medium leading-none">
            ${formatAmount(data.roundSize)}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="your-position-title"
        className="zoth-sale-panel p-4 sm:p-5"
      >
        <h2
          id="your-position-title"
          className="text-[9px] font-medium uppercase tracking-[0.08em] text-[#b6a097]"
        >
          Your position
        </h2>
        <p className="mt-2 text-[10px] text-[#a49a95]">
          Connect your wallet and Sonar account to view your position.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <ConnectDialog
            service="Wallet"
            className="zoth-orange-button zoth-corner-frame inline-flex min-h-11 items-center justify-center px-2 text-[10px] font-semibold"
          >
            Connect Wallet
          </ConnectDialog>
          <ConnectDialog
            service="Sonar"
            className="zoth-ghost-frame inline-flex min-h-11 items-center justify-center px-2 text-[10px] font-medium"
          >
            Connect Sonar
          </ConnectDialog>
        </div>
      </section>

    </div>
  );
}
