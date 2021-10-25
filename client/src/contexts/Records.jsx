import React, { useState, useEffect, useContext, createContext } from 'react';
import { useLoading } from './Loading';
import axios from 'axios';

const RecordsContext = createContext({
  incomes: [],
  expenses: [],
  updateData: function () {},
});

export const useRecords = () => useContext(RecordsContext);

function RecordsProvider({ children }) {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const { loading, updateLoading } = useLoading();

  async function getAllData() {
    updateLoading(true);
    try {
      const res = await axios.get('/records');
      const data = res.data;

      setIncomes(data.data.incomes);
      setExpenses(data.data.expenses);

      updateLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  function updateData() {
    return getAllData();
  }

  useEffect(() => {
    getAllData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <RecordsContext.Provider value={{ incomes, expenses, updateData }}>
      {children}
    </RecordsContext.Provider>
  );
}

export default RecordsProvider;
