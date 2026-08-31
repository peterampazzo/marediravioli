import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import OrderForm from "@/components/OrderForm";
import { buildTallyEmbedUrl } from "@/config/tally";
import type { BatchConfig } from "@/types/batch";

const openBatch: BatchConfig = {
  id: "2099-09-12-spinach",
  pickupAt: "2099-09-12T12:00:00+02:00",
  timezone: "Europe/Copenhagen",
  filling: "Ricotta & spinach",
  location: "Copenhagen",
  status: "open",
};

describe("pickup request section", () => {
  it("shows a safe planning state for a closed batch", () => {
    render(<OrderForm batch={{ ...openBatch, status: "closed" }} />);
    expect(screen.getByText("The Next Batch Is Being Planned")).toBeTruthy();
    expect(
      screen.queryByTitle("Request a Mare di Ravioli pickup spot"),
    ).toBeNull();
  });

  it("does not expose an active form when Tally is unconfigured", () => {
    render(<OrderForm batch={openBatch} tallyFormUrl="" />);
    expect(screen.getByText("Online Requests Aren’t Open Yet")).toBeTruthy();
  });

  it("embeds Tally and passes the batch details through hidden-field parameters", () => {
    render(
      <OrderForm
        batch={openBatch}
        tallyFormUrl="https://tally.so/embed/example"
      />,
    );

    const frame = screen.getByTitle("Request a Mare di Ravioli pickup spot");
    const url = new URL(frame.getAttribute("src") || "");

    expect(url.origin).toBe("https://tally.so");
    expect(url.searchParams.get("batchId")).toBe(openBatch.id);
    expect(url.searchParams.get("pickupAt")).toBe(openBatch.pickupAt);
    expect(url.searchParams.get("filling")).toBe(openBatch.filling);
    expect(url.searchParams.get("location")).toBe(openBatch.location);
    expect(url.searchParams.get("transparentBackground")).toBe("1");
  });

  it("rejects non-HTTPS form URLs", () => {
    expect(
      buildTallyEmbedUrl(openBatch, "http://tally.so/embed/example"),
    ).toBeNull();
  });

  it("rejects non-Tally and non-embed URLs", () => {
    expect(
      buildTallyEmbedUrl(openBatch, "https://example.com/embed/example"),
    ).toBeNull();
    expect(
      buildTallyEmbedUrl(openBatch, "https://tally.so/r/example"),
    ).toBeNull();
    expect(
      buildTallyEmbedUrl(openBatch, "https://tally.so/embed/YOUR_FORM_ID"),
    ).toBeNull();
  });
});
