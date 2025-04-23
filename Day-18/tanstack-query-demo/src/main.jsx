import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createRouter,
  createRootRoute,
  createRoute,
} from '@tanstack/react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import App from './App';
import DataPage from './DataPage';

// Create a query client instance
const queryClient = new QueryClient();

// Define routes using TanStack Router v1's API
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  path: '/',
  getParentRoute: () => rootRoute,
  component: () => <div>Welcome to the Home Page</div>,
});

const dataRoute = createRoute({
  path: '/data',
  getParentRoute: () => rootRoute,
  component: DataPage,
});

// Create the router instance with route tree
const routeTree = rootRoute.addChildren([indexRoute, dataRoute]);

const router = createRouter({ routeTree });

// Render it
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
