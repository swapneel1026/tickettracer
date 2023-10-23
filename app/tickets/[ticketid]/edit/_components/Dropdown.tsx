"use client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "sonner";

type Props = {
  status?: string;
  id: number;
  className?: string;
  assignedInfo: any;
};
export default function Dropdown({ id, className, assignedInfo }: Props) {
  const router = useRouter();
  const getAssignedInfo = async (user: any) => {
    const parsedUser = JSON.parse(user);

    await axios.patch(`/api/tickets/${id}`, {
      assignedToUserId: parsedUser.id || null,
      assignedUserName: parsedUser.name || null,
    });
    toast.success(
      (parsedUser.name && "Assigned to " + parsedUser.name) || "Unassigned"
    );
    router.refresh();
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
    staleTime: 6000 * 10,
    refetchInterval: 10000,
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
        key={assignedInfo.id}
        onValueChange={getAssignedInfo}
        defaultValue={
          JSON.stringify({
            id: assignedInfo.assignedToUserId,
            name: assignedInfo.assignedUserName,
          }) || JSON.stringify({ id: null, name: null })
        }
      >
        <Select.Trigger placeholder="Assign..." />
        <Select.Content>
          <Select.Group>
            <Select.Item value={JSON.stringify({ id: null, name: null })}>
              Unassigned
            </Select.Item>
            {users?.map((user: any) => (
              <Select.Item
                key={user.id}
                value={JSON.stringify({ id: user.id, name: user.name })}
              >
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </div>
  );
}
export const dynamic = "force-dynamic";
