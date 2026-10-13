"use client";

import {
  CircleDollarSign,
  Clock3,
  LockKeyhole,
  Rocket,
  Users,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import ReadBeforeCommit from "./read-before-commit";
import { fetchSale, type SaleData } from "@/src/lib/sale";

const formatAmount = (amount: number) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(amount);

function getTimeLeft(date: string, now: number | null) {
  const closesAt = new Date(date).getTime();
  if (now === null || !Number.isFinite(closesAt)) {
    return ["—", "—", "—", "—"];
  }

  const remaining = Math.max(0, closesAt - now);
  return [
    String(Math.floor(remaining / 86_400_000)).padStart(2, "0"),
    String(Math.floor((remaining % 86_400_000) / 3_600_000)).padStart(2, "0"),
    String(Math.floor((remaining % 3_600_000) / 60_000)).padStart(2, "0"),
    String(Math.floor((remaining % 60_000) / 1_000)).padStart(2, "0"),
  ];
}

export default function TokenSaleDetails() {
  const { data, isLoading, isError } = useQuery<SaleData>({
    queryKey: ["sale"],
    queryFn: fetchSale,
    refetchInterval: 30_000,
  });
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = getTimeLeft(data?.closesAt ?? "", now);
  const isUnavailable = isError || (!isLoading && !data);
  const value = (text: string) =>
    isLoading ? "Loading" : isUnavailable ? "Unavailable" : text;
  const stages = data?.stages ?? [];

  return (
    <section
      id="token-sale-details"
      className="bg-black text-[#f4efec]"
    >
      <div className="mx-auto w-full px-5 py-10 sm:w-[92%] sm:px-0 sm:py-12 lg:max-w-[1100px]">
        <div className="grid gap-8 min-[800px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] min-[800px]:gap-16 lg:gap-24">
          <div>
            <h2 className="text-[26px] font-normal leading-tight tracking-[-0.045em] sm:text-[29px]">
              Token sale details
            </h2>
            <p className="mt-2 max-w-[300px] text-[13px] leading-[1.35] text-[#a49b98]">
              The terms of the ZOTH IDO on Sonar. Items marked to be confirmed
              are published here once they are final.
            </p>
          </div>

          <ol
            aria-label="Token sale timeline"
            className="relative grid list-none grid-cols-2 gap-x-5 gap-y-5 pt-1 sm:grid-cols-4 sm:gap-x-4 sm:gap-y-0"
          >
            <div
              aria-hidden="true"
              className="absolute left-1 right-1 top-[9.5px] hidden h-px bg-[#2b2422] sm:block"
            />
            {data
              ? stages.map((stage, index) => (
                  <li key={stage.title} className="relative min-w-0">
                    <span
                      className={`relative z-10 block h-[11px] w-[11px] rounded-full border-2 ${
                        index === 0
                          ? "border-[#ff4b12] bg-black"
                          : "border-[#393331] bg-[#111]"
                      }`}
                    />
                    {index === 0 && (
                      <span className="mt-2 block text-[8px] leading-none text-[#ff4b12]">
                        Next
                      </span>
                    )}
                    <p
                      className={`mt-2 text-[11px] leading-tight ${
                        index === 0 ? "sm:mt-1" : ""
                      }`}
                    >
                      {stage.title}
                    </p>
                    <p className="mt-1 text-[9px] leading-tight text-[#8c8582]">
                      {stage.date}
                    </p>
                  </li>
                ))
              : isLoading
                ? Array.from({ length: 4 }, (_, index) => (
                    <li key={index} className="relative min-w-0">
                      <span className="relative z-10 block h-[11px] w-[11px] rounded-full border-2 border-[#393331] bg-[#111]" />
                      <p className="mt-3 text-[10px] text-[#8c8582]">
                        Loading
                      </p>
                    </li>
                  ))
                : (
                    <li
                      role="status"
                      className="col-span-full text-[10px] text-[#ff9674]"
                    >
                      Timeline unavailable
                    </li>
                  )}
          </ol>
        </div>

        <div className="mt-10 grid gap-8 min-[800px]:grid-cols-[minmax(0,0.85fr)_minmax(0,1.5fr)] min-[800px]:gap-16 lg:mt-12 lg:gap-24">
          <ReadBeforeCommit />

          <div className="min-w-0">
            <div className="flex min-h-[23px] items-center justify-between border-b border-[#292323] text-[10px] text-[#d1ccca]">
              <div className="flex items-center gap-2">
                <Clock3 size={11} className="shrink-0 text-[#8c8582]" />
                <span>Closes in</span>
              </div>
              <div className="flex gap-1">
                {countdown.map((unit, index) => (
                  <span
                    key={index}
                    className="rounded-[2px] bg-[#292727] px-1 py-0.5 text-[8px] tabular-nums text-[#dedad8]"
                  >
                    {unit}
                  </span>
                ))}
              </div>
            </div>

            <SaleDetailRow
              icon={<Rocket size={11} />}
              label="Launchpad"
              value={value(data?.launchpad ?? "")}
            />
            <SaleDetailRow
              icon={<CircleDollarSign size={11} />}
              label="Purchase method"
              value={value(data?.currency ?? "")}
            />
            <SaleDetailRow
              icon={<Users size={11} />}
              label="Applications"
              value={value(
                data ? formatAmount(data.applications) : "",
              )}
            />
            <SaleDetailRow
              icon={<CircleDollarSign size={11} />}
              label="Target"
              value={value(data ? `$${formatAmount(data.targetAmount)}` : "")}
              secondaryLabel="Hard cap"
              secondaryValue={value(
                data?.hardCap === null
                  ? "To be confirmed"
                  : data
                    ? `$${formatAmount(data.hardCap)}`
                    : "",
              )}
            />
            <SaleDetailRow
              icon={<LockKeyhole size={11} />}
              label="Unlock period"
              hasBottomBorder={false}
              value={
                <a
                  href="#sale-terms"
                  className="underline decoration-[#77706d] underline-offset-2 transition-colors hover:text-white"
                >
                  Show terms
                </a>
              }
            />

            {isError && (
              <p role="alert" className="mt-2 text-[10px] text-[#ff9674]">
                Sale information is unavailable. Please refresh the page and
                try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SaleDetailRow({
  icon,
  label,
  value,
  secondaryLabel,
  secondaryValue,
  hasBottomBorder = true,
}: {
  icon: ReactNode;
  label: string;
  value: ReactNode;
  secondaryLabel?: string;
  secondaryValue?: string;
  hasBottomBorder?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[23px] items-center gap-2 ${
        hasBottomBorder ? "border-b border-[#292323]" : ""
      } text-[10px] text-[#d1ccca] ${
        secondaryLabel ? "py-1" : ""
      }`}
    >
      <span aria-hidden="true" className="shrink-0 text-[#a59b97]">{icon}</span>
      <div>
        <p>{label}</p>
        {secondaryLabel && (
          <p className="mt-1 text-[#9b9491]">{secondaryLabel}</p>
        )}
      </div>
      <div className="ml-auto text-right">
        <div>{value}</div>
        {secondaryValue && (
          <p className="mt-1 text-[#9b9491]">{secondaryValue}</p>
        )}
      </div>
    </div>
  );
}
