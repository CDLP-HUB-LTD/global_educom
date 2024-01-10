import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';




const queryClient = new QueryClient();

const SessionProvider = ({ children, user }) => {
  queryClient.setQueryData('user', user);

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default SessionProvider;