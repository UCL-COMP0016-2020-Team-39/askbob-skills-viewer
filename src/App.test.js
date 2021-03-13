import { screen, render, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
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

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ skills, plugins }),
    })
  );
});

afterEach(() => {
  fetch.mockClear();
});

const sleep = async ms => {
  await setTimeout(() => {}, ms);
};

it("shows loading at start", async () => {
  await act(async () => {
    render(<App />);
    const loadingTag = screen.getByText(/Loading.../);
    expect(loadingTag).toBeInTheDocument();
    await sleep(3050);
  });
});

it("loads plugins after loading", async () => {
  let loadingTag;
  await act(async () => {
    render(<App />);
    loadingTag = screen.getByText(/Loading.../);
  });

  await sleep(3050);

  expect(loadingTag).not.toBeInTheDocument();
});
