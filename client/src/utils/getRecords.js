import axios from 'axios';

async function getRecords(setLoading, setIncomes, setExpenses) {
    setLoading(true);

    try {
        const incomesRes = await axios.get('/records/incomes');
        const expensesRes = await axios.get('/records/expenses');

        const incomesData = incomesRes.data.data;
        const expensesData = expensesRes.data.data;

        setIncomes(incomesData);
        setExpenses(expensesData);

        setLoading(false);
    } catch (err) {
        console.log(err);
    }
}

export default getRecords;
