import Card from 'react-bootstrap/Card';
import styles from 'components/PeopleCard/PeopleCard.module.css'
import Image from 'next/image'

export default function PeopleCard({ people }){
  const { name, homeworld, filmConnection } = people.node
  return(
    <Card className={styles.card}>
      <div style={{ position: 'relative' }}>
        <Image
          src="https://picsum.photos/75/50"
          alt={name}
          width={500}
          height={500}
          loading="lazy"
          style={{
            borderRadius: "6px 6px 0 0"
          }}
        />
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <span>{homeworld.name}</span>
          <ul>
            <PeopleFilmsList filmConnection={filmConnection.edges}/>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}


const PeopleFilmsList = ({ filmConnection }) =>{
  return filmConnection.map((film) =>{
    const { title, id } = film.node
    return <li key={id}>{title}</li>
  })
}