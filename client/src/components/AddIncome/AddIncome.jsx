import React, { useState } from 'react';
import postToRecord from '../../utils/post';

function AddIncome() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');
    const [active, setActive] = useState(false);

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

    function handleClick() {
        setActive((prev) => !prev);
    }

    return (
        <div className={`addRecordForm ${active ? 'active' : 'inactive'}`}>
            <button className='new-btn alt' onClick={handleClick}>
                New Income
            </button>
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
                <button className='submit-btn'>Add income</button>
            </form>
        </div>
    );
}

export default AddIncome;
