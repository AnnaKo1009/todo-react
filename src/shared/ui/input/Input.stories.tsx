import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

// Вариант с состоянием внутри Storybook
export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <Input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Печатай здесь..."
      />
    );
  },
};
