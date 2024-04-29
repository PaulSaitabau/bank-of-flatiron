// src/App.js
import React, { useState } from 'react';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([
     { id: 1, date: '2024-04-28', description: 'Salary', category: 'Income', amount: 5000 },
     { id: 2, date: '2024-04-27', description: 'Groceries', category: 'Expenses', amount: 32450 },
     { id: 3, date: '2024-04-26', description: 'Dinner', category: 'Expenses', amount: 4500 },
     { id: 4, date: '2024-04-25', description: 'Gas bill', category: 'Expenses', amount: 4950 },
     { id: 5, date: '2024-04-24', description: 'Rent', category: 'Expenses', amount: 12000 },
     { id: 6, date: '2024-04-23', description: 'Utilities', category: 'Expenses', amount: 2500 },
     { id: 7, date: '2024-04-22', description: 'Internet bill', category: 'Expenses', amount: 3500 },
     { id: 8, date: '2024-04-21', description: 'Movie tickets', category: 'Entertainment', amount: 1500 },
     { id: 9, date: '2024-04-20', description: 'Lunch', category: 'Expenses', amount: 1800 },
     { id: 10, date: '2024-04-19', description: 'Phone bill', category: 'Expenses', amount: 2800 },
  ]);
 const [searchTerm, setSearchTerm] = useState('');

 const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
 };
 
  
     
 const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
 );

 return (
    <div className="App">
      <h1>The Royal Bank Of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
 );
}

export default App;
