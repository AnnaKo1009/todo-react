import React from 'react';
import type { InputFormProps } from './types';
import { Input } from '../../shared/ui/input';
import { Button } from '../../shared/ui/button';
import styles from './InputForm.module.css';

export const InputForm: React.FC<InputFormProps> = ({
  value = '',
  onChange,
  onSubmit,
  placeholder = '',
  buttonText = '',
  className = '',
  error
}) => {
  return (
    <form className={styles.formContainer}>
      <div className={styles.inputRow}>
        <div className={styles.inputWrapper}>
          <Input value={value} onChange={onChange} placeholder={placeholder} />
        </div>
        <Button onClick={onSubmit} variant='primary'>
          {buttonText}
        </Button>
      </div>
      <span className={styles.error}>{error}</span>
    </form>
  );
};
