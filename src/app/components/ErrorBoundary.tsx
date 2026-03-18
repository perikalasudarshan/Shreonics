import React from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

export class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    hasError: false,
    error: undefined,
    errorInfo: undefined,
  };

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error, errorInfo });
    // Log to console for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    }

    return (
      <div className="min-h-screen flex items-center justify-center p-8 bg-red-50 text-red-900">
        <div className="max-w-2xl w-full bg-white shadow-lg rounded-xl p-8 border border-red-200">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="mb-4 text-sm text-gray-700">
            An unexpected error occurred while loading the application. Please check the browser console for more details.
          </p>
          <div className="bg-gray-100 p-4 rounded">
            <pre className="whitespace-pre-wrap text-xs text-red-800">
              {this.state.error?.message ?? "Unknown error"}
              {'\n'}
              {this.state.errorInfo?.componentStack}
            </pre>
          </div>
        </div>
      </div>
    );
  }
}
