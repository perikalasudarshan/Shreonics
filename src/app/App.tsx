import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </HelmetProvider>
  );
}
