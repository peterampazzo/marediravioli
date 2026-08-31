import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "@/App";

describe("development batch preview", () => {
  it("uses the brand slogan as the main message", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Save the oceans, one raviolo at a time.",
      }),
    ).toBeTruthy();
  });

  it("provides a keyboard skip link to the main content", () => {
    render(<App />);

    expect(
      screen
        .getByRole("link", { name: "Skip to main content" })
        .getAttribute("href"),
    ).toBe("#main-content");
    expect(
      document.getElementById("main-content")?.getAttribute("tabindex"),
    ).toBe("-1");
  });

  it("switches states and stores a shareable preview flag", async () => {
    const user = userEvent.setup();
    render(<App />);

    const selector = screen.getByRole("combobox", {
      name: "Development preview",
    });

    await user.selectOptions(selector, "sold-out");

    expect(
      await screen.findByText("This Batch Is Fully Requested"),
    ).toBeTruthy();
    expect(new URL(window.location.href).searchParams.get("previewBatch")).toBe(
      "sold-out",
    );
  });

  it("can force the missing-form state", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.selectOptions(
      screen.getByRole("combobox", { name: "Development preview" }),
      "missing-form",
    );

    expect(
      await screen.findByText("Online Requests Aren’t Open Yet"),
    ).toBeTruthy();
  });
});
