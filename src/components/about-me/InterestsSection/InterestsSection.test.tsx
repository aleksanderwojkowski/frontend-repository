import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import InterestsSection from "./InterestsSection";

describe("<InterestsSection />", () => {
  describe("when the component is rendered", () => {
    it("displays the section title", () => {
      // Given
      const title = "My interests";

      // When
      render(
        <InterestsSection
          title={title}
          interests={["Programming", "Gaming"]}
        />,
      );

      // Then
      expect(
        screen.getByRole("heading", {
          level: 2,
          name: title,
        }),
      ).toBeInTheDocument();
    });

    it("displays all interests", () => {
      // Given
      const interests = ["Programming", "Gaming", "Music", "Technology"];

      // When
      render(<InterestsSection title="My interests" interests={interests} />);

      // Then
      for (const interest of interests) {
        expect(screen.getByText(interest)).toBeInTheDocument();
      }
    });

    it("renders an empty list when there are no interests", () => {
      // Given
      const interests: string[] = [];

      // When
      render(<InterestsSection title="My interests" interests={interests} />);

      // Then
      expect(screen.getByRole("list")).toBeEmptyDOMElement();
    });
  });
});
