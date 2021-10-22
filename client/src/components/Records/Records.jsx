import React, { useEffect, useState } from 'react';
import { useRecords } from '../../contexts';
import { RecordsTable } from '../';
import { v4 as uuid } from 'uuid';

function Records({ activeTab }) {
    const [incomesData, setIncomesData] = useState([]);
    const [expensesData, setExpensesData] = useState([]);
    const { incomes, expenses } = useRecords();

    useEffect(() => {
        setIncomesData(incomes);
        setExpensesData(expenses);
    }, [incomes, expenses]);

    return (
        <div className='records'>
            {activeTab === 'expenses' ? (
                <>
                    <h3 className='title'>Expenses:</h3>
                    <RecordsTable key={uuid()} data={expensesData} />
                </>
            ) : (
                <>
                    <h3 className='title'>Incomes:</h3>
                    <RecordsTable key={uuid()} data={incomesData} />
                </>
            )}
        </div>
    );
}

export default Records;
