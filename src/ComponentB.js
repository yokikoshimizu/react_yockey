import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentB = () => {
    const navigate = useNavigate()
    const backPage = () => {
        navigate("/")
    }

    return (
        <div>
            <><h1>ComponentB</h1></>
            <button onClick={backPage}>ホームへ戻る</button>
            <Link to="../componentc" >ComponentCへ遷移</Link>
            <div>
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
            </div>
        </div>
    )
}

export default ComponentB
