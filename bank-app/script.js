class BankAccount{
 constructor(num,name,email,balance){
  this.accountNumber=num;
  this.ownerName=name;
  this.ownerEmail=email;
  this.balance=Number(balance);
  this.depositHistory=[];
 }
 depositAmount(a){ if(a>0){this.balance+=a;this.depositHistory.push(a);} }
 withdrawAmount(a){ if(a>0 && a<=this.balance){this.balance-=a;} }
 showInfo(){ return `${this.ownerName} (${this.ownerEmail})`; }
}
let acc;
function createAccount(){
 acc=new BankAccount(
  document.getElementById('acc').value,
  document.getElementById('name').value,
  document.getElementById('email').value,
  document.getElementById('bal').value);
 document.getElementById('output').textContent='Account created';
}
function deposit(){ let a=Number(document.getElementById('amt').value); acc.depositAmount(a); show(); }
function withdraw(){ let a=Number(document.getElementById('amt').value); acc.withdrawAmount(a); show(); }
function show(){ document.getElementById('output').textContent=`Balance: ${acc.balance}
Deposits: ${acc.depositHistory.join(', ')}`; }