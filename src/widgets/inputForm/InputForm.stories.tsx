import type { Meta, StoryObj } from '@storybook/react';
import { InputForm } from './InputForm';
import { useState } from 'react';

const meta: Meta<typeof InputForm> = {
  title: 'Widgets/InputForm',
  component: InputForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof InputForm>;

export const Default: Story = {
  args: {
    value: '',
    onChange: (e) => console.log('Changed:', e.target.value),
    onSubmit: (e) => {
      e.preventDefault();
      console.log('Submitted');
    },
    placeholder: 'Следующее дело',
    buttonText: 'Добавить',
  },
};

export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState('');
    
    return (
      <InputForm
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={(e) => {
          e.preventDefault();
          console.log('Submitted:', value);
          setValue('');
        }}
        placeholder="Следующее дело"
        buttonText="Добавить"
      />
    );
  },
};