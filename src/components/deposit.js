import React from 'react'
import Card from "./context";

const re = /^[0-9\b]+$/;

function Deposit(){
  const [status, setStatus] = React.useState('');
  const [depositAmount, setDepositAmount] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const [error, setError] = React.useState('');
  const [balance, setBalance] = React.useState(0);

  const handleOnChangeDepositAmount = (e) => {
    if (e.nativeEvent.data == '-') {
      alert('You can only enter in positive numbers');
      return;
    }

    if (e.target.value === '' || re.test(e.target.value)) {
      setDepositAmount(e.target.value);
    } else {
      alert('You can only enter in numbers');
    }
  }

  const handleOnPressDeposit = () => {
    try {
      setBalance(Number(balance) + Number(depositAmount));
      setSuccess(true);
    } catch(error) {
      setError(error);
      setSuccess(false);
    }
  }

  return (
    <div className="bg-primary text-white w-100 min-vh-100 d-flex align-items-center justify-content-center">
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={
        <div> 
       <p>Amount</p>
      <input type='input' className='form-control' id='amount' value={depositAmount} onChange={event => handleOnChangeDepositAmount(event)} placeholder='Deposit Amount' />
      <br />

      <button onClick={handleOnPressDeposit} disabled={depositAmount.toString().length == 0} type="submit" className="btn btn-light">Deposit</button>
      <br />
      {success  == true ? <p>Success! Balance Updated</p> : <p>{error}</p>}
      <div>Balance: {balance}</div>
    </div>
      }
    />
        </div>
  )
}

export default Deposit;
