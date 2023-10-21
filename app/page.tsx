import { Flex, Grid } from "@radix-ui/themes";
import Barchart from "./components/dashboard/BarChart";
import StatusSummary from "./components/dashboard/StatusSummary";
import SummaryTable from "./components/dashboard/SummaryTable";

export default async function Home() {
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="9" className="p-4">
      <Flex direction="column" gap="6">
        <StatusSummary />
        <Barchart />
      </Flex>
        <SummaryTable />
    </Grid>
  );
}
export const dynamic = "force-dynamic";
