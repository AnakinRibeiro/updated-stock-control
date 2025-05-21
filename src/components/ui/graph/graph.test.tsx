import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Graph from "./";

const dataMock = [
  {
    label: "cancelled",
    qty: 2,
    value: 50,
    color: "bg-red-500",
  },
  {
    label: "pending",
    qty: 8,
    value: 450,
    color: "bg-light-black",
  },
  {
    label: "concluded",
    qty: 4,
    value: 200,
    color: "bg-emerald-400",
  },
];

describe("Graph", () => {
  it("should render with the correct number of bars & render correct colors and width", () => {
    const { getAllByTestId } = render(<Graph data={dataMock} />);

    const bars = getAllByTestId("graph-bar");
    const validItems = dataMock.filter((item) => item.qty > 0);

    expect(bars.length).toBe(validItems.length);

    const totalQty = dataMock.reduce((sum, item) => sum + item.qty, 0);

    bars.forEach((bar, index) => {
      const item = validItems[index];
      const width = (item.qty / totalQty) * 100;

      expect(bar.className).toContain(item.color);
      expect(bar).toHaveStyle(`width: ${width}%`);
    });
  });
});
