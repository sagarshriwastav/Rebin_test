import React from 'react';
import User from './User.json';
import { MdDelete } from "react-icons/md";

const Homepage = ({ setLoginUser }) => {
    console.log(User);
    return (
        <div>
            <div className="header" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "#e5e7eb", padding: "20px 10px" }}>
                <div>Download JOSN file</div>
                <div>logout</div>
            </div>
            <div className="status" style={{ padding: "20px 10px" }}>
                <h4 style={{ padding: "10px" }}>Status</h4>
                <select style={{ padding: "6px" }}>
                    <option value="">Select status</option>
                    <option value="option1">inactive</option>
                    <option value="option2">active</option>
                </select>
            </div>

            <div className="table" style={{ margin: "20px 40px" }}>

                <div style={{ display: "flex", justifyContent: "space-between",  border: "1px solid #e5e7eb", padding: "14px 10px", fontWeight: "800"}}>
                    <div style={{ minHeight: "20px", minWidth: "40px" }}> </div>
                    <div>FIRST NAME</div>
                    <div>lAST NAME</div>
                    <div>EMAIL</div>
                    <div>GENDER</div>
                    <div>COLOR</div>
                    <div>STATUS</div>
                </div>
                {User?.map((item) => (
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 10px", alignItems: "center", border: "1px solid #e5e7eb" }}>
                        <div style={{width: "20%", textAlign: "center"}}>
                            <div style={{width: "80px", height: "80px", backgroundColor: "gray", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%"}}>
                                <img src={item.Avatar} alt="" />
                            </div>
                        </div>
                        <div style={{width: "20%", textAlign: "center"}}>{item.first_name}</div>
                        <div style={{width: "20%", textAlign: "center"}}>{item.last_name}</div>
                        <div style={{width: "20%", textAlign: "center"}}>{item.email}</div>
                        <div style={{width: "20%", textAlign: "center"}}>{item.gender}</div>
                        <div style={{backgroundColor: `${item.color}`, padding: "10px 20px",}}>{item.color}</div>
                        <div style={{width: "20%",}}>
                        <div style={{width: "80px", margin: "0 auto", textAlign: "center", borderRadius: "8px", color: `${item.Status === true ? 'rgb(4 120 87)' : 'red'}`, padding: '10px 20px', backgroundColor: `${item.Status === true ? 'rgb(167 243 208)' : 'rgb(254 205 211)'}`}}>{item.Status === true ? 'Active' : 'Inactive'}</div>
                        </div>
                        <div><MdDelete style={{fontSize: '30px', color: "red"}} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Homepage