import Card from 'react-bootstrap/Card';
import styles from 'components/FilmCard/FilmCard.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function FilmCard({ film }){
  const { title, openingCrawl, id } = film.node
  const router = useRouter()

  const handleFilmClick = (id) =>{
    router.push(`${router.asPath}/${id}`)
  }

  return(
    <Card className={styles.card} onClick={() =>handleFilmClick(id)}>
      <div style={{ position: 'relative' }}>
        <Image
          src="https://picsum.photos/75/50"
          alt={title}
          width={500}
          height={500}
          loading="lazy"
          style={{
            borderRadius: "10px 10px 0 0"
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {openingCrawl}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
