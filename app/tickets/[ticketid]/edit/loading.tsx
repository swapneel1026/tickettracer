import { Button, Card, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const loading = () => {
  return (
    <div className="max-w-[70rem] mx-auto border rounded-lg">
      <Button style={{ margin: "16px" }}>
        <Link href={"/tickets"}>
          <Flex direction={"row"} align={"center"} justify={"center"} gap={"2"}>
            <FaArrowLeft />
            Back
          </Flex>
        </Link>
      </Button>
      <Heading
        size={"8"}
        style={{ marginInline: "16px", marginBottom: "8px" }}
        className="w-auto capitalize"
      >
        <Skeleton/>
      </Heading>
      <div className="inline-flex items-center space-x-4 mx-4 ">
      <div className="w-14"><Skeleton/></div>
        <p className="w-32">
          <Skeleton />
        </p>
      </div>
      <Card className="m-4 h-[100px] w-auto prose">
        <Skeleton/>
      </Card>
    </div>
  )
}

export default loading