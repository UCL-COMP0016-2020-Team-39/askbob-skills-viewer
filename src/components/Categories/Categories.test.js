import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Categories from ".";

beforeEach(() => {
  const skills = [
    {
      plugin: "plugin 1",
      category: "category 1",
      description: "description 1",
      examples: ["example 1-1", "example 1-2"],
    },
    {
      plugin: "plugin 2",
      category: "category 2",
      description: "description 2",
      examples: ["example 2-1", "example 2-2"],
    },
  ];

  render(<Categories skills={skills} />);
});

it("renders properly", () => {
  const accordion1 = screen.getByText("category 1");
  const accordion2 = screen.getByText("category 2");

  const descriptionTag1 = screen.getByText("description 1");
  const descriptionTag2 = screen.getByText("description 2");

  const skillTitles = screen.getAllByText("Skills");

  const example1_1 = screen.getByText("example 1-1");
  const example1_2 = screen.getByText("example 1-2");
  const example2_1 = screen.getByText("example 2-1");
  const example2_2 = screen.getByText("example 2-2");

  expect(accordion1).toBeInTheDocument();
  expect(accordion2).toBeInTheDocument();

  expect(descriptionTag1).toBeInTheDocument();
  expect(descriptionTag2).toBeInTheDocument();

  expect(example1_1).toBeInTheDocument();
  expect(example1_2).toBeInTheDocument();
  expect(example2_1).toBeInTheDocument();
  expect(example2_2).toBeInTheDocument();

  expect(skillTitles).toHaveLength(2);
  for (const title of skillTitles) {
    expect(title).toBeInTheDocument();
  }
});
