import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { SidebarItem } from ".";

describe("SidebarItem", () => {
  it("should render sidebar item open & not active", () => {
    render(
      <SidebarItem collapsed={false} icon="home" href="/home" isActive={false}>
        Teste
      </SidebarItem>
    );

    expect(screen.getByRole("link", { name: "Teste" })).toHaveClass(
      "text-black hover:bg-gray"
    );
    expect(screen.getByRole("link", { name: "Teste" })).toHaveAttribute(
      "href",
      "/home"
    );
  });

  it("should render sidebar item active & collapsed without text", () => {
    render(
      <SidebarItem collapsed={true} icon="home" href="/home" isActive={true}>
        Teste
      </SidebarItem>
    );

    const link = screen.getByRole("link");
    expect(link).not.toHaveTextContent("Teste");

    const svgIcon = link.querySelector("svg");
    expect(svgIcon).toBeInTheDocument();
  });
});
