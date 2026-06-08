import { describe, test, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import HogCard from "./HogCard";

const mockHog = {
  name: "Test Hog",
  specialty: "Testing",
  weight: 100,
  greased: true,
  highestMedalAchieved: "gold",
  image: "test",
};

describe("HogCard", () => {
  test("renders hog name", () => {
    render(
      <HogCard
        hog={mockHog}
        onHide={() => {}}
      />
    );

    expect(
      screen.getByText("Test Hog")
    ).toBeTruthy();
  });

  test("shows details when clicked", () => {
    render(
      <HogCard
        hog={mockHog}
        onHide={() => {}}
      />
    );

    fireEvent.click(
      screen.getByLabelText("hog card")
    );

    expect(
      screen.getByText(/Specialty:/i)
    ).toBeTruthy();

    expect(
      screen.getByText(/Weight:/i)
    ).toBeTruthy();
  });

  test("calls hide callback", () => {
    const mockHide = vi.fn();

    render(
      <HogCard
        hog={mockHog}
        onHide={mockHide}
      />
    );

    fireEvent.click(
      screen.getByText("Hide Me")
    );

    expect(mockHide).toHaveBeenCalledTimes(1);
    expect(mockHide).toHaveBeenCalledWith("Test Hog");
  });
});