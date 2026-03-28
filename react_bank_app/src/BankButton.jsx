import React from 'react';
export default function BankButton({label, action}){
  return <button onClick={action}>{label}</button>
}
