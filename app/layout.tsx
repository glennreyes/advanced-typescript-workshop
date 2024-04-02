import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import { GitHub } from '@/components/icons/github';
import { X } from '@/components/icons/x';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import './globals.css';

const name = 'Advanced TypeScript for React';

export const metadata: Metadata = {
  description: 'A workshop on advanced TypeScript for React developers.',
  title: {
    default: name,
    template: `%s | ${name}`,
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        'dark min-h-screen bg-background font-sans text-foreground antialiased motion-safe:scroll-smooth',
      )}
    >
      <div className="flex min-h-screen flex-col p-12">
        <main className="m-auto grid flex-1 lg:w-full lg:max-w-6xl">
          {children}
        </main>
        <footer className="m-auto flex items-center justify-between gap-2 lg:w-full lg:max-w-6xl">
          <p className="py-4 text-sm text-muted-foreground">
            Taught by{' '}
            <a
              className="underline underline-offset-4"
              href="https://glennreyes.com"
              rel="noreferrer"
              target="_blank"
            >
              @glnnrys
            </a>
            . Source on{' '}
            <a
              className="underline underline-offset-4"
              href="https://github.com/glennreyes/advanced-typescript-workshop"
            >
              GitHub
            </a>
            .
          </p>
          <div className="flex gap-2 py-4">
            <a
              className="items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              href="https://x.com/glnnrys"
              rel="noreferrer"
              target="_blank"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              href="https://github.com/glennreyes/advanced-typescript-workshop"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </footer>
      </div>
      <Analytics />
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
