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

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormmated = format( publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  } )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText]);
    // ... é um spread operator que lê o valor da variável e copia
    setNewCommentText('')
  }

  function handleCreateNewCommentChange() {
    setNewCommentText(event.target.value);
    // pega o valor digitado na textara e armazena no estado
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
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type == 'link') {
            return <p key={line.content}><a href='#'></a></p>;
          }
        })}
       
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleCreateNewCommentChange}
        />

        <footer>
          <button type='submit'>Publicar</button>     
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment key={comment} content={comment} />
          // o comentário está sendo passado como uma propriedade chamada comment (vai mandar o texto do comentário para dentro da propriedade)
        })}
      </div>
    </article>
  )
}
