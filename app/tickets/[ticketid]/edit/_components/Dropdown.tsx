"use client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
  });
  console.log(users);

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
