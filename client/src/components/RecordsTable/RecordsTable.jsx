import React from 'react';

function Incomes({ data }) {
    return (
        <div className='records-table'>
            {data ? (
                data.map((record) => (
                    <div className='table-data' key={record._id}>
                        <span className='table-data-text'>{record.text}</span>
                        <span className='table-data-amount'>
                            {record.amount}
                        </span>
                    </div>
                ))
            ) : (
                <div>No incomes</div>
            )}
        </div>
    );
}

export default Incomes;
