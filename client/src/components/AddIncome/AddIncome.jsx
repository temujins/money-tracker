import React, { useState } from 'react';
import postToRecord from '../../utils/post';

function AddIncome() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        postToRecord('income', { text, amount });
    }

    function handleTextChange(e) {
        setText(e.currentTarget.value);
    }

    function handleAmountChange(e) {
        setAmount(e.currentTarget.value);
    }

    return (
        <form action='submit' onSubmit={handleSubmit}>
            <label htmlFor='income-text'>Text:</label>
            <input
                id='income-text'
                type='text'
                onChange={handleTextChange}
                required
            />
            <label htmlFor='income-amount'>Amount</label>
            <input
                id='income-amount'
                type='text'
                onChange={handleAmountChange}
                required
            />
            <button>Add income</button>
        </form>
    );
}

export default AddIncome;
