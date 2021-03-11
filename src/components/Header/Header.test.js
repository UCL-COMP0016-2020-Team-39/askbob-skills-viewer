import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from ".";

it("renders correctly", () => {
  const { getByText } = render(<Header />);

  const title = getByText("AskBob - Plugins");

  expect(title).toBeInTheDocument();
});
