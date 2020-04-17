import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import ButtonOld from "components/Button";
import Form from "components/Pages/Form";
import List from "components/Pages/List";
import Show from "components/Pages/Show"


storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <ButtonOld>Base</ButtonOld>)
  .add("Confirm", () => <ButtonOld confirm>Confirm</ButtonOld>)
  .add("Danger", () => <ButtonOld danger>Cancel</ButtonOld>)
  .add("Clickable", () => (
    <ButtonOld onClick={action("button-clicked")}>Clickable</ButtonOld>
  ))
  .add("Disabled", () => (
    <ButtonOld disabled onClick={action("button-clicked")}>
      Disabled
    </ButtonOld>
  ));
  storiesOf("Form", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Form", () => <Form />)
  storiesOf("List", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("List", () => <List />)
  .add("Form", () => <Form onSave={action("onSave")} onCancel={action("onCancel")}/>)
  storiesOf("Show", module)
  .addParameters({
    backgrounds: [{ name: "white", value: "#fff", default: true }]
  })
  .add("Show", () => <Show tittle={"grocery"} note={"helloooo"} />)