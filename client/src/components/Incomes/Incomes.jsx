import React, { useState, useEffect } from 'react';
import { useRecords } from '../../contexts';
import { v4 as uuid } from 'uuid';

function Incomes() {
    const [data, setData] = useState([]);
    const { incomes } = useRecords();

    useEffect(() => {
        setData(incomes);
    }, [incomes]);

    return (
        <div>
            <b>Incomes:</b>
            {data ? (
                data.map((income) => (
                    <div key={uuid()}>
                        <span>{income.text}: </span>
                        <span>{income.amount}</span>
                    </div>
                ))
            ) : (
                <div>No incomes</div>
            )}
        </div>
    );
}

export default Incomes;
