import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <Box className="max-w-xl p-4 flex flex-col space-y-3">
      <p>loading...</p>
      <Skeleton />
      <Skeleton height={"20rem"}/>
    </Box>
  );
};

export default Loading;
