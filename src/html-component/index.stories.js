import classNames from "classnames";
import "./styles.css";

export default {
  title: "HTML Component",
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
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
};

const Template = ({ label, isTransparent }) => {
  return `
    <div class="${classNames(
      "html-component",
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
    </div>
  `;
};

export const Loading = Template.bind({});
Loading.args = {
  label: "loading",
};

export const Ready = Template.bind({});
Ready.args = {
  label: "ready",
};

export const Error = Template.bind({});
Error.args = {
  label: "error",
};
