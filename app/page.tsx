import { Box, Flex } from "@radix-ui/themes";
import StatusSummary from "./components/dashboard/StatusSummary";

export default function Home() {
  return (
    <main className="">
      <Box>
        <Flex align="center" gap="4">
          <StatusSummary />
        </Flex>
      </Box>
    </main>
  );
}
export const dynamic = "force-dynamic";
