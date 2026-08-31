import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import Nav from "@/components/Nav";

describe("mobile navigation", () => {
  it("exposes menu state and closes with Escape", async () => {
    const user = userEvent.setup();
    render(<Nav />);

    const button = screen.getByRole("button", { name: "Open navigation menu" });
    expect(button.getAttribute("aria-expanded")).toBe("false");

    await user.click(button);
    expect(
      screen
        .getByRole("button", { name: "Close navigation menu" })
        .getAttribute("aria-expanded"),
    ).toBe("true");

    await user.keyboard("{Escape}");
    expect(
      screen
        .getByRole("button", { name: "Open navigation menu" })
        .getAttribute("aria-expanded"),
    ).toBe("false");
    expect(document.activeElement).toBe(button);
  });

  it("gives the icon-only social links accessible names", () => {
    render(<Nav />);
    expect(
      screen.getByRole("link", { name: "Follow Mare di Ravioli on Facebook" }),
    ).toBeTruthy();
    expect(
      screen.getByRole("link", { name: "Follow Mare di Ravioli on Instagram" }),
    ).toBeTruthy();
  });
});
