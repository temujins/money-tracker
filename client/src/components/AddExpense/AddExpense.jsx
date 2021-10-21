import React, { useState } from 'react';
import postToRecord from '../../utils/post';

function AddExpense() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        postToRecord('expense', { text, amount });
    }

    function handleTextChange(e) {
        setText(e.currentTarget.value);
    }

    function handleAmountChange(e) {
        setAmount(e.currentTarget.value);
    }

    return (
        <form action='submit' onSubmit={handleSubmit}>
            <label htmlFor='expense-text'>Text:</label>
            <input
                id='expense-text'
                type='text'
                onChange={handleTextChange}
                required
            />
            <label htmlFor='expense-amount'>Amount</label>
            <input
                id='expense-amount'
                type='text'
                onChange={handleAmountChange}
                required
            />
            <button>Add expense</button>
        </form>
    );
}

export default AddExpense;
