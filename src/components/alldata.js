import React from 'react';
import { UserContext } from './context';

function AllData(){
  const ctx = React.useContext(UserContext);
  return (
    <div className="bg-primary text-white w-100 min-vh-100 d-flex flex-column align-items-center justify-content-start">
    <h5>All Data in Store</h5>
    <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Email</th>
      <th scope="col">Name</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    {
      ctx.users.map((obj, index) => {
        return (
          <tr key={obj.email}>
          <th scope="row">{index+1}</th>
          <td>{obj.email}</td>
          <td>{obj.name}</td>
          <td>{obj.password}</td>
        </tr>
        )
      })
    }
  </tbody>
</table>
    </div>
  );
}


export default AllData;