import React, { useState } from 'react';
import postToRecord from '../../utils/post';
import { useRecords } from '../../contexts';

function AddExpense() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [active, setActive] = useState('');
  const { updateData } = useRecords();

  function handleSubmit(e) {
    e.preventDefault();
    postToRecord('expense', { text, amount }, updateData);

    setText('');
    setAmount('');
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
      <button className='new-btn' onClick={handleClick}>
        New Expense
      </button>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='expense-text'>Text:</label>
          <input
            id='expense-text'
            type='text'
            onChange={handleTextChange}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='expense-amount'>Amount</label>
          <input
            id='expense-amount'
            type='text'
            onChange={handleAmountChange}
            required
          />
        </div>
        <button className='submit-btn'>Add expense</button>
      </form>
    </div>
  );
}

export default AddExpense;
