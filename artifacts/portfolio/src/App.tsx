import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import HackathonDetail from '@/pages/HackathonDetail';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { Analytics } from '@vercel/analytics/react';
import { MotionConfig } from 'framer-motion';

import GlobalGooeyCursor from '@/components/GlobalGooeyCursor';
import SectionErrorBoundary from '@/components/SectionErrorBoundary';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/hackathons/:id" component={HackathonDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user"><TooltipProvider>
        <GlobalGooeyCursor />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <SectionErrorBoundary sectionName="Page Navigation">
            <Router />
          </SectionErrorBoundary>
        </WouterRouter>
        <Toaster />
        <Analytics />
      </TooltipProvider></MotionConfig>
    </QueryClientProvider>
  );
}

export default App;
