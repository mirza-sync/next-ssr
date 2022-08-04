import Layout from "components/PerPageLayout"
import styles from "styles/layoutNlogin.module.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useReducer } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_RAKITA_USER } from "server/mutation";
import { insertToken, clearUser } from 'redux/slices/userSlice'
import { useDispatch, useSelector } from "react-redux";
import { RakitaOptions } from "constants/utils";
import { setCookie, deleteCookie } from 'cookies-next';
import { useRouter } from "next/router";

LayoutAndLoginExample.getLayout = function getLayout(page) {
  return (<Layout>{page}</Layout>)
}

const  loginReducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return {
        ...state,
        [action.field]: action.payload
      };
    default:
      return state
  }
}

export default function LayoutAndLoginExample(){
  const [loginRakitaUserFunc, { data, loading, error }] = useMutation(LOGIN_RAKITA_USER, RakitaOptions);
  const { token } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const router = useRouter()
  /*
  * A useState will be fine in this form use-case
  * however, this is more of a scalable solution and a simple starter
  */
  const [loginFormState, loginFormDispatch] = useReducer(loginReducer, { username: "", password:"" });

  useEffect(() =>{
    if(data){
      dispatch(insertToken(data.tokenAuth.token))
      setCookie('token', data.tokenAuth.token)
    }
  }, [data])

  const handleFormInput = (e) =>{
    loginFormDispatch({
      type:"input",
      field: e.target.name,
      payload: e.target.value
    })
  }

  const handleFormSubmit = (e) =>{
    e.preventDefault()
    //Context is to set the the graphql url to rakita since the default is a swapi.api
    loginRakitaUserFunc({variables: { ...loginFormState }})
  }

  const handleLogout = () =>{
    console.log('log out')
    dispatch(clearUser())
    deleteCookie('token')
  }

  return(
    <div className={styles.container}>
      {token === '' ? 
        <LoginForm
          loginFormState={loginFormState}
          handleFormInput={handleFormInput}
          handleFormSubmit={handleFormSubmit}
        /> :
        <LogoutButton
          handleLogout={handleLogout}
        />
      }
      <div style={{ marginTop:"5rem" }}>
        <p>Will redirect back to this page if you don&apos;t have a valid JWT token</p>
        <Button onClick={() => router.push(`${router.asPath}/redirect`)}>
          Test Server Side Redirect
        </Button>
      </div>
    </div>
  )
}

const LoginForm = ({ loginFormState, handleFormInput, handleFormSubmit }) =>{
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control 
          name="username"
          placeholder="adila"
          value={loginFormState.username}
          onChange={handleFormInput}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          placeholder="bcss2013" 
          onChange={handleFormInput}
          value={loginFormState.password}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
  )
}

const LogoutButton = ({ handleLogout }) =>{
  return(
    <div>
      <div>You are logged in!</div>
      <Button onClick={handleLogout}>
        Log out
      </Button>
    </div>
  )
}