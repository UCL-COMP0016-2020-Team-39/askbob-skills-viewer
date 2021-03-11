import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Plugins from ".";

beforeEach(() => {
  const plugins = [
    {
      plugin: "plugin 1",
      description: "plugin description 1",
      author: "author 1",
    },
    {
      plugin: "plugin 2",
      description: "plugin description 2",
      author: "author 2",
    },
  ];
  const skills = [
    {
      plugin: "plugin 1",
      category: "category 1",
      description: "skill description 1",
      examples: ["example 1-1", "example 1-2"],
    },
    {
      plugin: "plugin 2",
      category: "category 2",
      description: "skill description 2",
      examples: ["example 2-1", "example 2-2"],
    },
  ];

  render(<Plugins plugins={plugins} skills={skills} />);
});

it("renders properly", () => {
  const accordion1 = screen.getByText("plugin 1");
  const accordion2 = screen.getByText("plugin 2");

  const pluginDescription1 = screen.getByText("plugin description 1");
  const pluginDescription2 = screen.getByText("plugin description 2");

  const skillDescription1 = screen.getByText("skill description 1");
  const skillDescription2 = screen.getByText("skill description 2");

  const author1 = screen.getByText("author 1");
  const author2 = screen.getByText("author 2");

  const category1 = screen.getByText(/category 1/);
  const category2 = screen.getByText(/category 2/);

  const skillTitles = screen.getAllByText("Skills");

  const example1_1 = screen.getByText("example 1-1");
  const example1_2 = screen.getByText("example 1-2");
  const example2_1 = screen.getByText("example 2-1");
  const example2_2 = screen.getByText("example 2-2");

  expect(accordion1).toBeInTheDocument();
  expect(accordion2).toBeInTheDocument();

  expect(pluginDescription1).toBeInTheDocument();
  expect(pluginDescription2).toBeInTheDocument();

  expect(skillDescription1).toBeInTheDocument();
  expect(skillDescription2).toBeInTheDocument();

  expect(author1).toBeInTheDocument();
  expect(author2).toBeInTheDocument();

  expect(example1_1).toBeInTheDocument();
  expect(example1_2).toBeInTheDocument();
  expect(example2_1).toBeInTheDocument();
  expect(example2_2).toBeInTheDocument();

  expect(category1).toBeInTheDocument();
  expect(category2).toBeInTheDocument();

  expect(skillTitles).toHaveLength(2);
  for (const title of skillTitles) {
    expect(title).toBeInTheDocument();
  }
});
