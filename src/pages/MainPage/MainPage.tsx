import React, { useState, useEffect } from 'react';
import itemsData from '../../../public/db/items.json';
import { InputForm } from '../../widgets/inputForm';
import { ItemCard } from '../../widgets/itemCard';
import { Modal } from '../../shared/ui/modal';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [items, setItems] = useState(itemsData.items);
  const [newItem, setNewItem] = useState('');
  const [now, setNow] = useState(new Date());

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{ id: number; name: string } | null>(null);
  const [editValue, setEditValue] = useState('');

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleCopyItem = (id: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      setItems([
        { ...item, id: Date.now(), name: `${item.name}` }, 
         ...items
      ]);
    }
  };

// обработчик редактирования дела
  const handleEditClick = (id: number) => {
    const item = items.find((i) => i.id === id);
    if (item) {
      setEditingItem(item);
      setEditValue(item.name);
      setIsEditModalOpen(true);
    }
  };

  // сохранение отредактированного дела
  const handleSaveEdit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (editValue.trim() && editingItem) {
      setItems(items.map(item =>
        item.id === editingItem.id
          ? { ...item, name: editValue }
          : item
      ));
      setIsEditModalOpen(false);
      setEditingItem(null);
      setEditValue('');
    }
  };


  const handleAddItem = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([{ id: Date.now(), name: newItem }, ...items,]);
      setNewItem('');
    }
  };

  // для таймера 
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000)
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Список дел</h1>
      <span className={styles.timer}>Время сейчас: {now.toLocaleTimeString()}</span>
      <div className={styles.formContainer}>
      <InputForm
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        onSubmit={handleAddItem}
        placeholder='Добавить следующее дело...'
        buttonText='Добавить'
      />
    </div>
<div className={styles.itemsContainer}>
        {items.map(item => (
          <ItemCard 
            key={item.id}
            item={item}
            onEdit={handleEditClick}
            onDelete={handleDeleteItem}
            onCopy={handleCopyItem}
          />
        ))}
      </div>

  <Modal isOpen={isEditModalOpen}
  onClose={() => setIsEditModalOpen(false)}>
  <InputForm
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onSubmit={handleSaveEdit}
        placeholder='Редактировать дело'
        buttonText='Сохранить'
      />
      </Modal>
    </div>
);
}