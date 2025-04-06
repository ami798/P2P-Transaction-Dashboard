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
const [newTx, setNewTx] = useState({ senderName: '', receiverName: '', amount: 0 });

const handleSubmit = (e) => {
  e.preventDefault();
  const tx = {
    id: transactions.length + 1,
    ...newTx,
    status: "Pending",
    timestamp: new Date().toISOString()
  };
  setTransactions([...transactions, tx]);
  setNewTx({ senderName: '', receiverName: '', amount: 0 });
};

<form onSubmit={handleSubmit}>
  <input 
    placeholder="Sender" 
    value={newTx.senderName}
    onChange={(e) => setNewTx({...newTx, senderName: e.target.value})}
    required
  />
  <input 
    placeholder="Receiver" 
    value={newTx.receiverName}
    onChange={(e) => setNewTx({...newTx, receiverName: e.target.value})}
    required
  />
  <input 
    type="number"
    placeholder="Amount"
    value={newTx.amount}
    onChange={(e) => setNewTx({...newTx, amount: parseFloat(e.target.value)})}
    required
  />
  <button type="submit">Add Transaction</button>
</form>