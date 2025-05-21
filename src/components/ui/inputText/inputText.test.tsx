import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputText } from "./";

describe("Sizes", () => {
  it("should render medium size input by default", () => {
    render(<InputText label="Teste" />);

    expect(screen.getByLabelText("Teste")).toHaveClass("w-[250px]");
  });

  it("should render small size input", () => {
    render(<InputText label="Teste" width="small" />);

    expect(screen.getByLabelText("Teste")).toHaveClass("w-[150px]");
  });

  it("should render large size input", () => {
    render(<InputText label="Teste" width="large" />);

    expect(screen.getByLabelText("Teste")).toHaveClass("w-[350px]");
  });
});

describe("Colors", () => {
  it("should render input with primary color scheme by default", () => {
    render(<InputText label="Teste" />);

    expect(screen.getByLabelText("Teste")).toHaveClass(
      "pb-[6px] border-b border-gray-400 mt-[30px] focus:outline-none"
    );
  });

  it("should render input with scondary color scheme", () => {
    render(<InputText label="Teste" model="secondary" />);

    expect(screen.getByLabelText("Teste")).toHaveClass(
      "h-[32px] rounded-md border border-gray-200 pl-[6px]"
    );
  });
});

describe("Label", () => {
  it("should render input text with label", () => {
    render(<InputText label="Teste" />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
  });
});

describe("Function", () => {
  it("should change the value when typing & run onInputChange when passed", async () => {
    const onInputChange = jest.fn();

    render(
      <InputText width="large" label="Test" onInputChange={onInputChange} />
    );

    const input = screen.getByRole("textbox");
    const text = "oi";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInputChange).toHaveBeenCalledTimes(text.length);
    });

    expect(onInputChange).toHaveBeenCalledWith(text, 0);
  });

  it("should not change the value when typing", async () => {
    const onInputChange = jest.fn();

    render(
      <InputText
        width="large"
        label="Test"
        disabled
        onInputChange={onInputChange}
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "oi";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
      expect(onInputChange).not.toHaveBeenCalledTimes(text.length);
    });
  });

  it("should show error message", () => {
    render(<InputText width="large" label="Teste" error="ERROR!" />);

    expect(screen.getByText("Teste")).toBeInTheDocument();
    expect(screen.getByText("Teste")).toHaveClass("text-red-400");

    expect(screen.getByText("ERROR!")).toBeInTheDocument();
    expect(screen.getByText("ERROR!")).toHaveClass(
      "text-red-400 text-base mt-[4px]"
    );
  });
});
