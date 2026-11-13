import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProfileHeader from "./ProfileHeader";

describe("<ProfileHeader />", () => {
  describe("when the component is rendered", () => {
    it("displays the user's name as the main heading", () => {
      // Given
      const name = "Aleksander Wojkowski";

      // When
      render(<ProfileHeader name={name} description="Frontend Developer" />);

      // Then
      expect(
        screen.getByRole("heading", {
          level: 1,
          name,
        }),
      ).toBeInTheDocument();
    });

    it("displays the user's description", () => {
      // Given
      const description = "Frontend Developer";

      // When
      render(
        <ProfileHeader name="Aleksander Wojkowski" description={description} />,
      );

      // Then
      expect(screen.getByText(description)).toBeInTheDocument();
    });

    it("handles a very long name", () => {
      // Given
      const name = "AleksanderVeryLongNameWithoutSpaces";

      // When
      render(<ProfileHeader name={name} description="Frontend Developer" />);

      // Then
      const heading = screen.getByRole("heading", {
        level: 1,
        name,
      });

      expect(heading).toBeInTheDocument();
      expect(heading).toHaveClass("break-words");
    });
  });
});
