import Film from "components/Film/Film";
import Head from "next/head";
import { initializeApollo } from "server/client";
import { GET_FILM } from "server/query";

export default function SSGFilm({ film }){
  const { title, openingCrawl } = film
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={openingCrawl.slice(0, 140)} />
      </Head>
      <Film film={film}/>
    </>
  )
}
 
export async function getServerSideProps({ params }){
  
  const { id } = params

  const apolloClient = initializeApollo();
  const data = await apolloClient.query({
    query: GET_FILM,
    variables:{
      id: id
    }
  });

  return {
    props: {
      ...data.data
    },
    //If there is revalidate, it becomes Incremental Static Regeneration (ISR)
  };
}