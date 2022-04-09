import React from 'react'
import Card from "./context";

const re = /^[0-9\b]+$/;

function Withdraw(){
  const [status, setStatus] = React.useState('');
  const [withdrawalAmount, setWithdrawalAmount] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [balance, setBalance] = React.useState(0);
  const [error, setError] = React.useState('');

  const handleOnChangeWithdrawAmount = (e) => {
    if (e.nativeEvent.data == '-') {
      alert('You can only enter in positive numbers');
      return ;
    }

    if (e.target.value === '' || re.test(e.target.value)) {
      setWithdrawalAmount(e.target.value);
    } else {
      alert('You can only enter in numbers');
    }
  }

  const handleOnPressWithdraw = () => {
    const userBalance = localStorage.getItem('balance')
    if (Number(withdrawalAmount) > Number(userBalance)) {
      setError('Transaction Failed');
      setSuccess(false);
      return;
    }

    try {
      setBalance(Number(balance) + Number(withdrawalAmount));
      localStorage.setItem('balance', Number(userBalance) - Number(withdrawalAmount))

      window.location.reload()
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
      header="Withdraw"
      status={status}
      body={
        <div> 
          Amount<br/>
          <input type='input' className='form-control' id='amount' value={withdrawalAmount} onChange={event => handleOnChangeWithdrawAmount(event)} placeholder='Withdraw Amount' />
      <br />

      <button onClick={handleOnPressWithdraw} disabled={withdrawalAmount.toString().length == 0} type="submit" className="btn btn-light">Withdraw</button>
      <br />
      {success  == true ? <p>Success! Balance Updated</p> : <p>{error}</p>}
        <div>Balance: {localStorage.getItem('balance')}</div>
      </div>
      }
    />
        </div>
  )
}

export default Withdraw;
