"use client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  status: string;
  id: number;
  className: string;
  assignedInfo: string | null;
};
export default function Dropdown({
  status,
  id,
  className,
  assignedInfo,
}: Props) {
  const getAssignedInfo = async (userId: string) => {
    await axios
      .patch(`/api/tickets/${id}`, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      })
      .then((res) => res.data);
  };
  const {
    data: users,
    isLoading,
    error,
  } = useQuery<any[]>({
    queryKey: ["users"],
    queryFn: () => {
      return axios
        .get("/api/users")
        .then((res) => res.data)
        .catch((err) => console.log(err));
    },
    retry: 3,
    refetchInterval: 1000,
  });
  if (isLoading)
    return (
      <div className={className}>
        <Skeleton width={"7rem"} height={"1.875rem"} />
      </div>
    );
  if (error) return null;
  return (
    <div className={className}>
      <Select.Root
        onValueChange={(userId) => getAssignedInfo(userId)}
        defaultValue={assignedInfo || ""}
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
