import styles from 'components/Film/Film.module.css'
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';

export default function Film({ film }){
  const router = useRouter()
  const { title, openingCrawl, characterConnection } = film

  const FilmCharacterList = ({ characterConnection }) =>{
    return (
      <>
        <div className={styles['film--characters']}>Characters</div>
        <ul>
          {characterConnection.map(characterObj =>{
            const { name, id } = characterObj.node
            return <li key={id}>{name}</li>
          })}
        </ul>
      </>
    )
  }

  const handleBackClick = () =>{
    router.back()
  }

  return(
    <div className={styles.film}>
      <Button className={styles['film--backButton']} onClick={() =>handleBackClick()}>Back</Button>
      <div className={styles['film--body']}>
        <h1>{title}</h1>
        <div className={styles['film--openingCrawl']}>{openingCrawl}</div>
        <FilmCharacterList characterConnection={characterConnection.edges}/>
      </div>
    </div>
  )
}