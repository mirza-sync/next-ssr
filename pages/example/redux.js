import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from 'redux/slices/counterSlice'

import styles from 'styles/redux-example.module.css'

export default function ReduxExample(){
  const router = useRouter()

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const handleBackClick = () =>{
    router.back()
  }

  return(
    <div>
      <Button style={{width: "15rem", marginTop:"2rem"}} onClick={() =>handleBackClick()}>Back</Button>
      <div className={styles.container}>
        <div className={styles['container--count']}>{count}</div>
        <div className={styles['container--buttonContainer']}>
          <Button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
            className={styles['container--button']}
          >
            Increment
          </Button>
          <Button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
            className={styles['container--button']}
          >
            Decrement
          </Button>
        </div>
      </div>
    </div>
  )
}