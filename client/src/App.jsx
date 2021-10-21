import React from 'react';
import { Incomes, Expenses, AddExpense, AddIncome } from './components';
import { LoadingProvider, RecordsProvider } from './contexts';

function App() {
    return (
        <LoadingProvider>
            <RecordsProvider>
                <Incomes />
                <br />
                <Expenses />
                <br />
                <AddIncome />
                <br />
                <AddExpense />
            </RecordsProvider>
        </LoadingProvider>
    );
}

export default App;
