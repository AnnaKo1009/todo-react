import React, { useState, useEffect } from 'react';
import itemsData from '../../../public/db/items.json';
import { InputForm } from '../../widgets/inputForm';
import { ItemCard } from '../../widgets/itemCard';
import styles from './MainPage.module.css';

export const MainPage = () => {
  const [items, setItems] = useState(itemsData.items);
  const [newItem, setNewItem] = useState('');
  const [now, setNow] = useState(new Date());

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

  // тут нужно будет поменять!
  const handleEditItem = (id: number) => {
    console.log('Edit', id);
  };

  const handleAddItem = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), name: newItem }]);
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
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            onCopy={handleCopyItem}
          />
        ))}
      </div>
    </div>
);
}