import type { FC } from 'react';

import { H1 } from '@/components/typography/h1';
import { Lead } from '@/components/typography/lead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Session2 } from '@/exercises/2-session';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export const Page: FC = () => (
  <div className="flex flex-col gap-4 lg:w-full lg:max-w-6xl">
    <Button asChild size="icon" variant="outline">
      <Link href="/">
        <ChevronLeft className="h-4 w-4" />
      </Link>
    </Button>
    <div className="space-y-2">
      <H1>Session 2</H1>
      <Lead>Advanced Component Typing</Lead>
    </div>
    <Card className="flex flex-1 flex-col items-center justify-center">
      <CardHeader>
        <CardContent>
          <Session2 />
        </CardContent>
      </CardHeader>
    </Card>
  </div>
);

export default Page;
