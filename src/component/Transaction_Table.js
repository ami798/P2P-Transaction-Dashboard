export default function TransactionTable({ transactions, onRowClick }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Sender</th>
          <th>Receiver</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(tx => (
          <tr key={tx.id} onClick={() => onRowClick(tx.id)} style={{ cursor: 'pointer' }}>
            <td>{tx.id}</td>
            <td>{tx.senderName}</td>
            <td>{tx.receiverName}</td>
            <td>${tx.amount.toFixed(2)}</td>
            <td className={`status-${tx.status.toLowerCase()}`}>
              {tx.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}