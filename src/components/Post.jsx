import { format, formatDistanceToNow } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'


// estados = são variáveis que eu quero que o componente monitora, eles são dados com uma lista com dois componentes sempre

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([
    'muito bom'
    // setComments é para adicionar mais um comentário 
  ]);
  
  const publishedDateFormmated = format( publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  } )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComent(){
    event.preventDefault

    const newCommentText = event.target.comment.value
    // isso vai fazer ocm que retorne o que foi digitado pelo o usuário na textarea do forms 

    setComments([...comments, newCommentText]);
    // ... é um spread operator que lê o valor da variável e copia
  }

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title= {publishedDateFormmated} dateTime='2022-04-04 08:13'> 
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line =>  {
          if (line.type == 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p><a href='#'></a></p>;
          }
        })}
       
      </div>

      <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>     
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment} />
          // o comentário está sendo passado como uma propriedade chamada content (vai mandar o texto do cmentário para dentro da propriedade)
        })}
      </div>
    </article>
  )
}