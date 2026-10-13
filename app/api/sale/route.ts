import { getMockSaleData } from "@/src/lib/sale";

export async function GET() {
  return Response.json(getMockSaleData());
}
