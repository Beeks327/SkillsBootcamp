import { useState } from 'react';
import BalanceDisplay from './BalanceDisplay';
import BankButton from './BankButton';
import './styles.css';

function App() {
  const [balance, setBalance] = useState(0);
  const [userInput, setUserInput] = useState("");

  function parseAmount() {
    const amount = Number(userInput);
    if (isNaN(amount) || userInput.trim() === "") {
      throw new Error("Please enter a valid number.");
    }
    return amount;
  }

  function deposit() {
    try {
      const amt = parseAmount();
      setBalance(balance + amt);
      setUserInput("");
    } catch (e) { alert(e.message); }
  }

  function withdraw() {
    try {
      const amt = parseAmount();
      if (balance - amt < 0) throw new Error("Balance cannot go below zero.");
      setBalance(balance - amt);
      setUserInput("");
    } catch (e) { alert(e.message); }
  }

  return (
    <div className='container'>
      <BalanceDisplay balanceToDisplay={balance} />
      <input type='text' value={userInput} placeholder='Enter amount'
       onChange={(e)=>setUserInput(e.target.value)} />
      <BankButton label='Deposit' action={deposit} />
      <BankButton label='Withdraw' action={withdraw} />
    </div>
  );
}
export default App;