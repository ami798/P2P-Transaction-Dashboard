import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TransactionTable from '../components/TransactionTable';
import FilterDropdown from '../components/FilterDropdown';
import ThemeToggle from '../components/ThemeToggle';
import { fetchTransactions } from '../services/api';

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  useEffect(() => {
    fetchTransactions().then(data => setTransactions(data));
  }, []);

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(tx => tx.status === filter);

  return (
    <div>
      <ThemeToggle />
      <h1>P2P Transactions</h1>
      <FilterDropdown onFilter={setFilter} />
      <TransactionTable 
        transactions={filteredTransactions} 
        onRowClick={(id) => navigate(`/transaction/${id}`)}
      />
    </div>
  );
}