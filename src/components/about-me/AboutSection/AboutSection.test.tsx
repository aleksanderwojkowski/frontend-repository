import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutSection from "./AboutSection";

describe("<AboutSection />", () => {
  describe("when the component is rendered", () => {
    it("displays the section title", () => {
      // Given
      const title = "About me";

      // When
      render(<AboutSection title={title} description="I enjoy programming." />);

      // Then
      expect(
        screen.getByRole("heading", {
          level: 2,
          name: title,
        }),
      ).toBeInTheDocument();
    });

    it("displays the description", () => {
      // Given
      const description = "I enjoy programming and learning new technologies.";

      // When
      render(<AboutSection title="About me" description={description} />);

      // Then
      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it("handles a long description", () => {
      // Given
      const description =
        "I am interested in programming and modern web development.";

      // When
      render(<AboutSection title="About me" description={description} />);

      // Then
      expect(screen.getByText(description)).toHaveClass("break-words");
    });
  });
});
