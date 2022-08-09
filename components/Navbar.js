import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_RAKITA_USER_DETAILS } from 'server/query';
import { RakitaOptions } from 'constants/utils';
import { insertToken, insertUserDetails } from 'redux/slices/userSlice'

export default function Header(){
  const router = useRouter()
  const { firstName, profileImgSrc } = useSelector((state) => state.user)

  return(
    <Navbar bg="light">
      <Container>
        <Navbar.Brand onClick={() => router.push('/')} style={{cursor:"pointer"}}>Logo</Navbar.Brand>
        <Nav style={{ gap: "1rem" }}>
          <Nav.Item>
            <div>Hello {firstName !== '' ? firstName : "User!"}</div>
          </Nav.Item>
          {profileImgSrc !== '' &&
            <Nav.Item>
              <div>
                <Image
                  width="30"
                  height="30"
                  fluid
                  roundedCircle
                  src={profileImgSrc}
                />
              </div>
            </Nav.Item>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}