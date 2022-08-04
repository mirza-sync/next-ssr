import { getCookie } from 'cookies-next';

export default function ServerSideRedirectExample(){
  return(
    <div>You have a valid JWT</div>
  )
} 

export async function getServerSideProps({ req, res }){
  
  const token = getCookie('token', { req, res });

  if(token == null){
    return {
      redirect: {
        permanent: false,
        destination: "/example/layoutNlogin"
      }
  }
  }

  return  {
    props: {}
  }
}