import React from "react";

import { render, cleanup, fireEvent } from "@testing-library/react";

import ButtonOld from "components/Button";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<ButtonOld />);
});

it.skip("renders its `children` prop as text", () => {
  const { getByText } = render(<ButtonOld>Default</ButtonOld>);
  expect(getByText("Default")).toBeInTheDocument();
});

it.skip("renders a default button style", () => {
  const { getByText } = render(<ButtonOld>Default</ButtonOld>);
  expect(getByText("Default")).toHaveClass("button");
});

it.skip("renders a confirm button", () => {
  const { getByText } = render(<ButtonOld confirm>Confirm</ButtonOld>);
  expect(getByText("Confirm")).toHaveClass("button--confirm");
});

it.skip("renders a danger button", () => {
  const { getByText } = render(<ButtonOld danger>Danger</ButtonOld>);
  expect(getByText("Danger")).toHaveClass("button--danger");
});

it.skip("renders a clickable button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <ButtonOld onClick={handleClick}>Clickable</ButtonOld>
  );

  const button = getByText("Clickable");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(1);
});

it.skip("renders a disabled button", () => {
  const handleClick = jest.fn();
  const { getByText } = render(
    <ButtonOld disabled onClick={handleClick}>
      Disabled
    </ButtonOld>
  );

  const button = getByText("Disabled");

  fireEvent.click(button);

  expect(handleClick).toHaveBeenCalledTimes(0);
});
