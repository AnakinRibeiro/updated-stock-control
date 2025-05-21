import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./";

describe("", () => {
  const functionMock = jest.fn();

  it("should render checkbox correctly", () => {
    render(
      <Checkbox label="Teste" onInputChange={functionMock} checked={false} />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText(/Teste/i)).toBeInTheDocument();
  });

  it("should call onInputChange function when checked checked/unchecked", () => {
    render(
      <Checkbox
        label="checkbox label"
        onInputChange={(e) => functionMock(e)}
        checked={false}
      />
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(functionMock).toHaveBeenCalledWith(true);

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
    expect(functionMock).toHaveBeenCalledWith(false);
  });
});
