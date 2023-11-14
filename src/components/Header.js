import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../features/userDetailSlice';

function Header() {

  const allusers=useSelector((state)=>state.app.users);

  const dispatch=useDispatch();

 const [searchData,setSearchData]=useState("");

 useEffect(()=>{
     dispatch(searchUser(searchData));
 },[searchData]);
  return (
    <div>
        <Navbar style={{backgroundColor:'grey',height:'100px'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/gk6hyHyr/pngwing-com-1.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <b><u>MARATHON</u></b>
          </Navbar.Brand>
          <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={'/read'} className="nav-link" href="#">AllP ({allusers.length})
          </Link>
        </li>
       </ul>
          <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" me-2 w-30"
             onChange={(e)=>setSearchData(e.target.value)}
            />
          </Col>
        </Row>
      </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header