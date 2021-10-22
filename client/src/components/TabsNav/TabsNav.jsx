import React from 'react';

function TabsNav({ activeTab, setActiveTab }) {
    return (
        <div className='tabs'>
            <button
                className={`tab-btn ${
                    activeTab === 'incomes' ? 'active' : 'inactive'
                }`}
                onClick={() => setActiveTab('incomes')}
            >
                Incomes
            </button>
            <button
                className={`tab-btn ${
                    activeTab === 'expenses' ? 'active' : 'inactive'
                }`}
                onClick={() => setActiveTab('expenses')}
            >
                Expenses
            </button>
        </div>
    );
}

export default TabsNav;
