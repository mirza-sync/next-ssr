import { useQuery } from '@apollo/client';
import { GET_PEOPLES } from 'server/query';
import styles from 'styles/common.module.css'
import PeopleCard from 'components/PeopleCard/PeopleCard';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

export default function CSRExample(){
  const { loading, error, data } = useQuery(GET_PEOPLES);

  if(loading) return <div className={styles.container}>Loading...</div>
  if(error) return <div className={styles.container}>An error has occured!</div>
  
  const router = useRouter()

  const CSRPeopleCard = ({allPeople}) =>{
    return allPeople.map((people) =>{
      return <PeopleCard key={people.id} people={people}/>
    })
  }

  const handleBackClick = () =>{
    router.back()
  }

  return(
    <div className={styles.container}>
      <Button style={{width: "15rem"}} onClick={() =>handleBackClick()}>Back</Button>
      <div className={styles.cardContainer}>
        <CSRPeopleCard allPeople={data.allPeople.edges}/>
      </div>
    </div>
  )
}