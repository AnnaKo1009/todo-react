import React from 'react';
import type { InputFormProps } from './types';
import { Input } from '../../shared/ui/input';
import { Button } from '../../shared/ui/button';
import styles from './InputForm.module.css';


export const InputForm: React.FC<InputFormProps> = ({
    value =  '',
    onChange,
    onSubmit,
    placeholder = '',
    buttonText = '',
    className = ''
}) => {
    return (
        <form onSubmit={onSubmit} className={`${styles.formContainer} ${className}`.trim()}>
        <Input value={value} onChange={onChange} placeholder={placeholder}/>
        <Button onClick={onSubmit} variant='primary'>
            {buttonText}
        </Button>
        </form>
    );

};

