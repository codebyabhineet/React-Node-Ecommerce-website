import React from 'react'
import {
  Nav,
  Navbar,
  Container,

} from "react-bootstrap";
// import styled from 'styled-components'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSign, faUser } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

// margin-right: auto !important;
// const n = styled.Nav`
// background:red;
// `
//
const Topbar = () => {
  return (
    <Navbar className='navbar' style={{background:"#013243",height:"35px",width:"100vw"}} expand="lg">
      <Container className='abhi'>
        
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="ml-auto" >
             <Link href="/email" > 
                          <a className= "nav-link" role="button" style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" icon={faEnvelope} size="1x" className="pr-1 mt-1" /> info@jwil.in
                          </a>
                        </Link>
                        <Link href="/phone">
                          <a className="nav-link" role="button" style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" icon={faPhone} size="1x" className="pr-1 mt-1" /> +01166463940
                          </a>
                        </Link>
          </Nav>
          <Nav className="ml-auto" style={{marginLeft: "600px" }}>
          <Link href="/elogin">
                          <a className="nav-link" role="button"style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" icon={faSign} size="1x" className="pr-2 mt-1" />EmployeeLogin
                          </a>
                        </Link>
                        <Link href="/vlogin">
                          <a className="nav-link" role="button"style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" icon={faUser} size="1x" className="pr-1 mt-1" />VendorLogin
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="nav-link" role="button"style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" size="3px" className="pr-2 mt-1" icon={faInstagram} />
                          </a>
                        </Link>
                        <Link href="/">
                          <a className="nav-link" role="button"style={{color:"white",display:"flex"}}>
                          <FontAwesomeIcon color="white" size="1px" className="pr-2 mt-1" icon={faTelegram}/>
                          </a>
                        </Link>
          </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}

export default Topbar