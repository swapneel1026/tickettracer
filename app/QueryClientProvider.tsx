'use client'
import {
    QueryClientProvider as Provider,
    QueryClient,
} from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const QueryClientProvider = ({ children }: PropsWithChildren) => {
  const client = new QueryClient();
  return <Provider client={client}>{children}</Provider>;
};

export default QueryClientProvider;
