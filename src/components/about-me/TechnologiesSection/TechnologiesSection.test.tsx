import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TechnologiesSection from "./TechnologiesSection";

describe("<TechnologiesSection />", () => {
  describe("when the component is rendered", () => {
    it("displays the section title", () => {
      // Given
      const title = "Technologies I use";

      // When
      render(
        <TechnologiesSection
          title={title}
          technologies={["React", "TypeScript"]}
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

    it("displays all technologies", () => {
      // Given
      const technologies = ["React", "TypeScript", "JavaScript", "Git"];

      // When
      render(
        <TechnologiesSection
          title="Technologies I use"
          technologies={technologies}
        />,
      );

      // Then
      for (const technology of technologies) {
        expect(screen.getByText(technology)).toBeInTheDocument();
      }
    });

    it("renders an empty list when there are no technologies", () => {
      // Given
      const technologies: string[] = [];

      // When
      render(
        <TechnologiesSection
          title="Technologies I use"
          technologies={technologies}
        />,
      );

      // Then
      expect(screen.getByRole("list")).toBeEmptyDOMElement();
    });
  });
});
