import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "text"] },
    size: { control: "select", options: ["small", "medium", "large"] },
    color: { control: "select", options: ["blue", "green", "red"] },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "medium",
    color: "blue",
    children: "Primary Button",
    onClick: () => action("Primary Button Clicked")("Primary Button"),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "medium",
    color: "green",
    children: "Secondary Button",
    onClick: () => action("Secondary Button Clicked")("Secondary Button"),
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    size: "medium",
    color: "red",
    children: "Text Button",
    onClick: () => action("Text Button Clicked")("Text Button"),
  },
};
