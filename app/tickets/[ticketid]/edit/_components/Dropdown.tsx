"use client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Dropdown({ className }: { className: string }) {
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
    refetchIntervalInBackground: true,
    refetchInterval:10000
  });
  if(isLoading) return <div className={className}><Skeleton width={"7rem"} height={"1.875rem"}/></div>
  if(error) return null
  return (
    <div className={className}>
      <Select.Root defaultValue="unassigned">
        <Select.Trigger />
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
