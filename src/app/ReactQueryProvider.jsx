"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const ReactQueryProvider = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider;