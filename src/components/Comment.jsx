import { Trash } from '@phosphor-icons/react'
import { ThumbsUp } from '@phosphor-icons/react'
import styles from './Comment.module.css'

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src='https://avatars.githubusercontent.com/u/111822968?v=4"' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
             <time title='4 de abril de 2022 ' dateTime='2022-04-04 08:13'>Cerca de 2h atrás</time>
            </div>

            <button title='Deletar comentários'>
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Diego, parabéns</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}