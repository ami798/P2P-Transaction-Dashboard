// Mock data
const transactions = [
  { id: 1, senderName: "Alice", receiverName: "Bob", amount: 150.00, status: "Completed", timestamp: "2023-10-01T14:30:00Z" },
  { id: 2, senderName: "Charlie", receiverName: "Dave", amount: 200.50, status: "Pending", timestamp: "2023-10-02T09:15:00Z" },
  { id: 3, senderName: "Eve", receiverName: "Frank", amount: 75.25, status: "Failed", timestamp: "2023-10-02T16:45:00Z" }
];

// Simulate API calls
export const fetchTransactions = () => {
  return new Promise(resolve => setTimeout(() => resolve(transactions), 500));
};

export const fetchTransaction = (id) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(transactions.find(tx => tx.id === parseInt(id)));
    }, 500);
  });
};