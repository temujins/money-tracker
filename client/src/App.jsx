import React, { useState } from 'react';
import { AddExpense, AddIncome, Records, TabsNav } from './components';
import { LoadingProvider, RecordsProvider } from './contexts';

function App() {
  const [activeTab, setActiveTab] = useState('incomes');

  return (
    <LoadingProvider>
      <RecordsProvider>
        <aside>
          <AddIncome />
          <AddExpense />
        </aside>
        <main className='main'>
          <TabsNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <Records activeTab={activeTab} />
        </main>
      </RecordsProvider>
    </LoadingProvider>
  );
}

export default App;
