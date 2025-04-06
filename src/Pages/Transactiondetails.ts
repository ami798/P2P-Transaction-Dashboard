import { useParams } from 'react-router-dom';
import { fetchTransaction } from '../services/api';

export default function TransactionDetails() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    fetchTransaction(id).then(data => setTransaction(data));
  }, [id]);

  if (!transaction) return <div>Loading...</div>;

  return (
    <div>
      <h1>Transaction #{transaction.id}</h1>
      <p><strong>Sender:</strong> {transaction.senderName}</p>
      <p><strong>Receiver:</strong> {transaction.receiverName}</p>
      <p><strong>Amount:</strong> ${transaction.amount.toFixed(2)}</p>
      <p><strong>Status:</strong> <span className={`status-${transaction.status.toLowerCase()}`}>
        {transaction.status}
      </span></p>
      <p><strong>Timestamp:</strong> {new Date(transaction.timestamp).toLocaleString()}</p>
    </div>
  );
}