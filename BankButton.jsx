function BankButton({ label, action }) {
  return (
    <button onClick={action} className='bank-btn'>
      {label}
    </button>
  );
}
export default BankButton;