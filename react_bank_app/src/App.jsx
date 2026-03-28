import React, { useState } from 'react';
import BalanceDisplay from './BalanceDisplay';
import BankButton from './BankButton';

export default function App(){
  const [balance, setBalance] = useState(0);
  const [userInput, setUserInput] = useState('');

  function deposit(){
    const amount = Number(userInput);
    if(isNaN(amount)) throw new Error('Input must be a number');
    setBalance(balance + amount);
  }

  function withdraw(){
    const amount = Number(userInput);
    if(isNaN(amount)) throw new Error('Input must be a number');
    if(balance - amount < 0) throw new Error('Insufficient funds');
    setBalance(balance - amount);
  }

  return (
    <div>
      <BalanceDisplay balanceToDisplay={balance} />
      <input value={userInput} onChange={e=>setUserInput(e.target.value)} />
      <BankButton label="Deposit" action={deposit} />
      <BankButton label="Withdraw" action={withdraw} />
    </div>
  );
}
