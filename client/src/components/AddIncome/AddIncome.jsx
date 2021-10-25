import React, { useState } from 'react';
import postToRecord from '../../utils/post';
import { useRecords } from '../../contexts';

function AddIncome() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [active, setActive] = useState(false);
  const { updateData } = useRecords();

  function handleSubmit(e) {
    e.preventDefault();
    postToRecord('income', { text, amount }, updateData);

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
      <button className='new-btn alt' onClick={handleClick}>
        New Income
      </button>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='income-text'>Text:</label>
          <input
            id='income-text'
            type='text'
            onChange={handleTextChange}
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='income-amount'>Amount</label>
          <input
            id='income-amount'
            type='text'
            onChange={handleAmountChange}
            required
          />
        </div>
        <button className='submit-btn'>Add income</button>
      </form>
    </div>
  );
}

export default AddIncome;
