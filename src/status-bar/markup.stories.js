import { useState, useEffect } from "@storybook/client-api";

import classNames from "classnames";
import "./styles.css";
// import {closeStatusBar} from "./script.js";

export default {
  title: "Status Bar",
  argTypes: {
    label: {
      control: {
        type: "inline-radio",
        options: ["loading", "error", "ready"],
      },
      description: "This is the label",
      table: {
        defaultValue: {
          summary: "loading",
          detail: "lorem ipsum set dolar",
        },
      },
    },
    isTransparent: {
      control: {
        type: "boolean",
      },
      description: "Makes the component transparent",
      table: {
        defaultValue: {
          summary: "false",
          detail: "Only use this when you need to do something.",
        },
      },
    },
  },
  args: {
    label: "loading",
    isTransparent: false,
  },
};

const StatusBar = ({ label, isTransparent }) => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1)

  useEffect(() => {
    const button = document.querySelector(".ux-status-bar button");
    button.addEventListener("click", incrementCount);
  });

  return /*html*/ `
    <div class="${classNames(
      "ux-status-bar",
      label,
      isTransparent === true ? "isTransparent" : null
    )}"> 
    <span class="icon">
    ${
      label === "loading"
        ? "⏳"
        : label === "error"
        ? "🛑"
        : label === "ready"
        ? "✅"
        : null
    }
    </span>
    <span class="label">
      ${label}
    </span>
    <button>Click Me</button>
    <p>You clicked ${count} times</p>
    </div>
  `;
};

export const Loading = StatusBar.bind({});
Loading.args = {
  label: "loading",
};

export const Ready = StatusBar.bind({});
Ready.args = {
  label: "ready",
};

export const Error = StatusBar.bind({});
Error.args = {
  label: "error",
};
