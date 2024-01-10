// index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ErrorBoundary from './ErrorBoundary';
import App from './App';
import SessionProvider from './SessionProvider';  // Import SessionProvider

const queryClient = new QueryClient();

const root = createRoot(document.getElementById('root'));
root.render(
  <SessionProvider>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
        <ReactQueryDevtools />
      </React.StrictMode>
    </QueryClientProvider>
  </SessionProvider>
);


