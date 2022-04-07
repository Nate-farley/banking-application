import React from 'react'
import Card from "./context";

function Login(){
  const [status, setStatus] = React.useState('')
  return (
    <div className="bg-primary text-white w-100 min-vh-100 d-flex align-items-center justify-content-center">
    <Card
      bgcolor="primary"
      header="Login"
      status={status}
      body={
      <div> 
        <div>Balance: 0</div>
      </div>}
    />
        </div>
  )
}

export default Login;
