import React from 'react';
import User from './User.json';

const Homepage = ({ setLoginUser }) => {
    console.log(User);
    return (
        <div>
            <div className="header" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#e5e7eb", padding: "20px 10px" }}>
                <div>Download JOSN file</div>
                <div>logout</div>
            </div>
            <div className="status" style={{padding: "20px 10px"}}>
            <h4 style={{padding: "10px"}}>Status</h4>
                <select style={{padding: "6px"}}>
                    <option value="">Select status</option>
                    <option value="option1">inactive</option>
                    <option value="option2">active</option>
                </select>
            </div>

            <div className="table">
            <table style={{width: "100vw", margin: "10px 60px"}}>
      <thead>
        <tr>
            <th> </th>
          <th>FIRST NAME</th>
          <th>lAST NAME</th>
          <th>EMAIL</th>
          <th>GENDER</th>
          <th>COLOR</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {User?.map((item) => (
          <tr key={item.id} style={{ border: '6px solid black' }}>
            <td>
                <img src={item.Avatar} alt="" />
            </td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.color}</td>
            <td>{item.Status === true ? 'red' : 'green'}</td>
          </tr>
        ))}
      </tbody>
    </table>
            </div>
        </div>
    )
}

export default Homepage