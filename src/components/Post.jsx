import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://avatars.githubusercontent.com/u/111822968?v=4"' />
          <div className={styles.authorInfo}>
            <strong>Florença de Melo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='4 de abril de 2022 às 08:13h' dateTime='2022-04-04 08:13'> Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat O nome do projeto é DoctorCare</p>
        <p><a href=''> jane.design/doctorcare</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>     
        </footer>
      </form>

      <div className={styles.commentList}>
        
      </div>


    </article>
  )
}