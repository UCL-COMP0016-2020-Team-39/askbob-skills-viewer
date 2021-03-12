import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Selector from ".";

beforeEach(() => {
  const selector = {
    sortBy: "Plugins",
    setSortBy: () => {},
    url: "urlText",
    setUrl: () => {},
    errorText: "error here",
  };
  render(<Selector {...selector} />);
});

it("renders properly", () => {
  const sortByLabel = screen.getByText(/Sort By/);
  const urlLabel = screen.getByText(/Url/);

  const sortByInput = screen.getByText(/Plugins/);
  const urlInput = screen.getByRole("textbox");

  const errorHelperText = screen.getByText(/error here/);

  expect(sortByLabel).toBeInTheDocument();
  expect(urlLabel).toBeInTheDocument();

  expect(sortByInput).toBeInTheDocument();
  expect(urlInput).toBeInTheDocument();

  expect(errorHelperText).toBeInTheDocument();
});
