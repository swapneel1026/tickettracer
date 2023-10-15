import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <Box className="p-4 flex flex-col space-y-3 max-w-[70rem] mx-auto">
      <Skeleton height={"2rem"} width={"6rem"} />
      <Skeleton />
      <Skeleton height={"20rem"} />
      <Skeleton height={"2rem"} width={"8rem"} style={{ marginTop: "36px" }} />
    </Box>
  );
};

export default LoadingSkeleton;
