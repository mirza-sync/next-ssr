import FilmCard from "components/FilmCard/FilmCard";
import { useRouter } from "next/router";
import { initializeApollo } from "server/client";
import { GET_FILMS } from "server/query";
import styles from 'styles/common.module.css'
import Button from 'react-bootstrap/Button';

export default function SSGExample({ allFilms }){
  const router = useRouter()

  const SSGFilmCard = ({ allFilms }) =>{
    return allFilms.map((film) =>{
      const { id } = film.node
      return(
        <FilmCard key={id} film={film}/>
      )
    })
  }

  const handleBackClick = () =>{
    router.back()
  }

  return(
    <div className={styles.container}>
      <Button style={{width: "15rem"}} onClick={() =>handleBackClick()}>Back</Button>
      <div className={styles.cardContainer}>
        <SSGFilmCard allFilms={allFilms.edges}/>
      </div>
    </div>
  )
}
 
export async function getStaticProps(){
  const apolloClient = initializeApollo();
  const data = await apolloClient.query({
    query: GET_FILMS,
  });

  return {
    props: {
      ...data.data
    },
    //If there is revalidate, it becomes Incremental Static Regeneration (ISR)
    revalidate: 10, // In seconds
  };
}