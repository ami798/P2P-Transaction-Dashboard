import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TransactionDetails from './pages/TransactionDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transaction/:id" element={<TransactionDetails />} />
      </Routes>
    </BrowserRouter>
  );
}