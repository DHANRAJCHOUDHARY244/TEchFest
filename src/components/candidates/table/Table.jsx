import React, { useEffect, useState } from 'react'
import './table.css'
import axios from 'axios'
const Table = (props) => {
    const [data , setData]=useState([])
    const [regCan,setRegCan]=useState([])
    const getData = async () => {
        try {
          const response = await axios.get('http://localhost:3001/api/reg');
          const filteredData = response.data.filter(item => item.event_name === props.event_name);
          setData(filteredData);
        } catch (err) {
          console.log(err)
        }
      }
      useEffect(() => {
        getData()
        console.log(data);
      }, [])
  return (
    
<table>
{console.log(data)}
{console.log(regCan)}
  <caption id="pricelist">Event Name {props.event_name}</caption>
  <colgroup>
    <col className="item" />
    <col />
    <col className="retail" span="2" />
    <col className="case" span="3" />
  </colgroup>
  <thead>
    <tr>
      <td  colSpan='3'>Student Info</td>
      <th colSpan="4">College Info</th>
      <th colSpan="3">Contact Info</th>
    </tr>
    <th scope="col">_Id</th>
    <th scope="col">Name</th>
    <th scope="col">Event Name</th>
    <th scope="col">College Name</th>
    <th scope="col">Enrollment No</th>
    <th scope="col">Branch</th>
    <th scope="col">Passing Year</th>
    <th scope="col">Phone No</th>
    <th scope="col">Email</th>
    <th scope="col">Message</th>
  </thead>
  <tbody>
  {
  data.map(item => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.event_name}</td>
      <td>{item.college_name}</td>
      <td>{item.enroll}</td>
      <td>{item.branch}</td>
      <td>{item.pass_year}</td>
      <td>{item.ph}</td>
      <td>{item.email}</td>
      <td>{item.message}</td>
    </tr>
  ))
}

  </tbody>
</table>

  )
}

export default Table