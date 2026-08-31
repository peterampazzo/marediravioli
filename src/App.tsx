import { useState, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import OrderForm from "@/components/OrderForm";
import Footer from "@/components/Footer";
import BatchPreviewControls from "@/components/BatchPreviewControls";
import { BATCH } from "@/config/batch";
import {
  getPreviewBatch,
  isBatchPreviewMode,
  type BatchPreviewMode,
} from "@/config/preview";

const batchPreviewEnabled =
  import.meta.env.DEV || import.meta.env.MODE === "preview";

function readPreviewMode(): BatchPreviewMode {
  if (!batchPreviewEnabled) return "live";

  const queryMode = new URLSearchParams(window.location.search).get(
    "previewBatch",
  );

  if (isBatchPreviewMode(queryMode)) return queryMode;

  try {
    const savedMode = window.localStorage.getItem(
      "mare-di-ravioli-preview-batch",
    );
    return isBatchPreviewMode(savedMode) ? savedMode : "live";
  } catch {
    return "live";
  }
}

interface HomeProps {
  batch: typeof BATCH;
  tallyFormUrl?: string;
  previewControls?: ReactNode;
}

function Home({ batch, tallyFormUrl, previewControls }: HomeProps) {
  return (
    <div
      id="top"
      className="flex flex-col min-h-[100dvh] w-full bg-background font-sans text-foreground"
    >
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-[#F4C542] px-5 py-3 font-bold text-foreground shadow-lg transition-transform focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1} className="flex-1">
        <Hero batch={batch} />
        <WhatWeDo />
        <About />
        <HowItWorks />
        <OrderForm batch={batch} tallyFormUrl={tallyFormUrl} />
      </main>
      <Footer reservePreviewSpace={Boolean(previewControls)} />
      {previewControls}
    </div>
  );
}

function DevelopmentHome() {
  const [previewMode, setPreviewMode] =
    useState<BatchPreviewMode>(readPreviewMode);
  const batch = getPreviewBatch(BATCH, previewMode);

  const handlePreviewModeChange = (mode: BatchPreviewMode) => {
    setPreviewMode(mode);
    try {
      window.localStorage.setItem("mare-di-ravioli-preview-batch", mode);
    } catch {
      // The URL flag below still keeps the preview shareable when storage is disabled.
    }

    const url = new URL(window.location.href);
    if (mode === "live") {
      url.searchParams.delete("previewBatch");
    } else {
      url.searchParams.set("previewBatch", mode);
    }
    window.history.replaceState(null, "", url);
  };

  return (
    <Home
      batch={batch}
      tallyFormUrl={previewMode === "missing-form" ? "" : undefined}
      previewControls={
        <BatchPreviewControls
          value={previewMode}
          onChange={handlePreviewModeChange}
        />
      }
    />
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      {batchPreviewEnabled ? <DevelopmentHome /> : <Home batch={BATCH} />}
    </MotionConfig>
  );
}

export default App;
