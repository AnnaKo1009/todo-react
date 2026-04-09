import type { Meta, StoryObj } from '@storybook/react';
import { ItemCard } from './ItemCard';

const meta: Meta<typeof ItemCard> = {
  title: 'Widgets/ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ItemCard>;

// Пример данных для карточки
const mockTask = {
  id: 1,
  name: 'Сделать домашнее задание',
};

export const Default: Story = {
  args: {
    item: mockTask,
    onEdit: (id) => console.log('Edit:', id),
    onCopy: (id) => console.log('Copy:', id),
    onDelete: (id) => console.log('Delete:', id),
  },
};
