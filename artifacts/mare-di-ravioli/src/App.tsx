import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import type { BatchConfig } from "@/types/batch";

const queryClient = new QueryClient();

// ─────────────────────────────────────────────────────────────────────────────
// BATCH CONFIG — update these before each drop
// ─────────────────────────────────────────────────────────────────────────────
const BATCH: BatchConfig = {
  nextPickupDate: "Saturday, June 28th",
  nextFilling: "Ricotta, Lemon & Fresh Spinach",
  isSoldOut: false,
};
// ─────────────────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-background font-sans text-foreground">
      <Nav />
      <main className="flex-1">
        <Hero batch={BATCH} />
        <About />
        <HowItWorks />
        <Gallery />
        <OrderForm batch={BATCH} />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
