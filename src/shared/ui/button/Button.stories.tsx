import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import './Button.module.css';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// Обычная кнопка
export const Default: Story = {
  args: {
    children: 'Обычная кнопка',
  },
};

// Неактивная кнопка 
export const Disabled: Story = {
  args: {
    children: 'Неактивная кнопка',
    disabled: true,
  },
};

// Кнопка с hover
export const Hover: Story = {
  args: {
    children: 'Наведи курсор',
  },
};

// Кнопка с кликом
export const WithClick: Story = {
  args: {
    children: 'Нажми',
    onClick: () => alert('Клик!'),
  },
};