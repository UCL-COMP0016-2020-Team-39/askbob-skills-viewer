import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skill from ".";

beforeEach(() => {
  const skill = {
    description: "description",
    category: "category",
    plugin: "plugin",
    examples: ["example 1", "example 2"],
  };

  render(<Skill {...skill} />);
});

it("renders properly", () => {
  const description = screen.getByText(/description/);
  const category = screen.getByText(/category/);
  const plugin = screen.getByText(/plugin/);

  const example1 = screen.getByText(/example 1/);
  const example2 = screen.getByText(/example 2/);

  expect(description).toBeInTheDocument();
  expect(category).toBeInTheDocument();
  expect(plugin).toBeInTheDocument();
  expect(example1).toBeInTheDocument();
  expect(example2).toBeInTheDocument();
});
