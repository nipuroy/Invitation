import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in component tree:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center p-4 font-sans">
          <div className="max-w-md w-full bg-stone-900 border border-stone-800 rounded-xl p-6 shadow-2xl text-center">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 mx-auto flex items-center justify-center mb-4">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white mb-2 font-serif-bn">
              আমন্ত্রণ পত্রটি লোড হতে সমস্যা হয়েছে
            </h2>
            <p className="text-sm text-stone-400 mb-4 font-sans-bn">
              পেজটি লোড করার সময় একটি ত্রুটি দেখা দিয়েছে। অনুগ্রহ করে পেজটি রিলোড করে পুনরায় চেষ্টা করুন।
            </p>
            {this.state.error && (
              <pre className="text-xs bg-stone-950 text-rose-300 p-3 rounded-lg overflow-x-auto text-left mb-4 border border-stone-800 max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-semibold text-sm transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>পেজ রিলোড করুন</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
