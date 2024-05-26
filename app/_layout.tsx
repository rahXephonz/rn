import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Stack} from "expo-router";
import {Provider as JotaiProvider} from "jotai";
import {NativeWindStyleSheet} from "nativewind";
import {useRef} from "react";
import {transformToCamelCase} from "transform-obj";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function Layout() {
  const queryClientRef = useRef<QueryClient | null>(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: 0,
          select: (data) => transformToCamelCase(data),
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <JotaiProvider>
        <Stack />
      </JotaiProvider>
    </QueryClientProvider>
  );
}
