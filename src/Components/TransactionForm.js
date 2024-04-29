// src/components/TransactionForm.js
import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
 const [date, setDate] = useState('');
 const [description, setDescription] = useState('');
 const [amount, setAmount] = useState('');
 const [category, setCategory] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction({ date, description, amount, category });
    setDate('');
    setDescription('');
    setAmount('');
    setCategory('');
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
 );
};

export default TransactionForm;
