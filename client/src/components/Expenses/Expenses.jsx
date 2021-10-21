import React, { useState, useEffect } from 'react';
import { useRecords } from '../../contexts';
import { v4 as uuid } from 'uuid';

function Expenses() {
    const [data, setData] = useState([]);
    const { expenses } = useRecords();

    useEffect(() => {
        setData(expenses);
    }, [expenses]);

    return (
        <div>
            <b>Expenses:</b>
            {data ? (
                data.map((expense) => (
                    <div key={uuid()}>
                        <span>{expense.text}: </span>
                        <span>{expense.amount}</span>
                    </div>
                ))
            ) : (
                <div>No expenses</div>
            )}
        </div>
    );
}

export default Expenses;
