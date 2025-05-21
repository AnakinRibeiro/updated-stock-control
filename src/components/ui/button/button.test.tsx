import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./";

const IconMock = () => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    focusable="false"
    viewBox="0 0 24 24"
    data-testid="test_icon"
  >
    <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
  </svg>
);

describe("Sizes", () => {
  it("should render medium size button by default", () => {
    render(<Button color="primary" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "w-[250px]"
    );
  });

  it("should render small size button", () => {
    render(<Button color="primary" size="small" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "w-[150px]"
    );
  });

  it("should render large size button", () => {
    render(<Button color="primary" size="large" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "w-[350px]"
    );
  });
});

describe("Colors", () => {
  it("should render button with primary color scheme", () => {
    render(<Button color="primary" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "bg-oncrets-primary text-white border-none hover:bg-oncrets-darker"
    );
  });

  it("should render button with secondary color scheme", () => {
    render(<Button color="secondary" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "bg-white text-oncrets-primary border border-oncrets-primary"
    );
  });

  it("should render button with logout color scheme", () => {
    render(<Button color="logout" title="Teste" />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "bg-gray text-black hover:bg-gray-300"
    );
  });
});

describe("isDisabed", () => {
  it("should render button with disabled color scheme", () => {
    render(<Button color="logout" title="Teste" isDisabled />);

    expect(screen.getByRole("button", { name: /teste/i })).toHaveClass(
      "opacity-50 cursor-not-allowed"
    );
  });
});

describe("Icon", () => {
  it("should render button with icon on the left", () => {
    render(<Button color="logout" title="Teste" icon={<IconMock />} />);

    const icon = screen.getByTestId("test_icon");

    expect(icon).toBeInTheDocument();
  });
});
