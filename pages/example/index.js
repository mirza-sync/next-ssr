import { useRouter } from "next/router"
import Button from 'react-bootstrap/Button';
import style from 'styles/Home.module.css'

export default function Example(){
  const router = useRouter()

  const handleReroute = (url) =>{
    router.push(url)
  } 
  // https://stackoverflow.com/questions/51928722/how-to-override-bootstrap-theme-colors-in-bootstrapped-react-redux-app

  return(
    <>
      <h1>This is awesome!</h1>
      <Button onClick={() =>handleReroute("example/csr")} className={style["main--buttons"]}>NextJs CSR Example</Button>
      <Button onClick={() =>handleReroute("example/ssr")} className={style["main--buttons"]}>NextJs SSR Example</Button>
      <Button onClick={() =>handleReroute("example/ssg")} className={style["main--buttons"]}>NextJs SSG Example</Button>
      <Button onClick={() =>handleReroute("example/redux")} className={style["main--buttons"]}>Redux Persistance Ex</Button>
      <Button onClick={() =>handleReroute("example/layoutNlogin")} className={style["main--buttons"]}>Layout and Login Ex</Button>
      <h2>Cool Stuff</h2>
      <h1>Dope</h1>
    </>
  )
}