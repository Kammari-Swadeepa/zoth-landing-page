export type SaleStage = {
  title: string;
  date: string;
};

export type SaleData = {
  tokenName: string;
  tokenSymbol: string;
  tokenPrice: number;
  currency: string;
  totalRaised: number;
  targetAmount: number;
  fundingGoal: number;
  subscriptionStatus: number;
  roundSize: number;
  hardCap: number | null;
  applications: number;
  closesAt: string;
  launchpad: string;
  stages: SaleStage[];
};

export function getMockSaleData(): SaleData {
  return {
    tokenName: "ZOTH",
    tokenSymbol: "ZOTH",
    tokenPrice: 0.05,
    currency: "USDC",
    totalRaised: 501000,
    targetAmount: 250000,
    fundingGoal: 1250000,
    subscriptionStatus: 2.01,
    roundSize: 250000,
    hardCap: null,
    applications: 4709,
    closesAt: "2027-12-31T23:59:59.000Z",
    launchpad: "SONAR",
    stages: [
      { title: "Whitelist opens", date: "20 October 2026" },
      { title: "IDO", date: "To be announced" },
      { title: "Reviewing", date: "To be announced" },
      { title: "TGE", date: "To be announced" },
    ],
  };
}

export async function fetchSale(): Promise<SaleData> {
  const response = await fetch("/api/sale");
  if (!response.ok) throw new Error("Unable to load sale information");
  return response.json();
}
