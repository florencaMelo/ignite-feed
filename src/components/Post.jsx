import { format, formatDistanceToNow } from 'date-fns' 
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react'


// estados = são variáveis que eu quero que o componente monitora, eles são dados com uma lista com dois componentes sempre
// o primeiro componente é uma lista e o outro é uma função

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
    setNewCommentText('');
  }

  function handleCreateNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
    // pega o valor digitado na textarea e armazena no estado
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commmentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commmentToDelete
    })
    // aqui vai criar uma lista a partir da lista (comment já criada), porém removendo um item
    // imutabilidade: as variáveis não sofrem mutação, nós criamos um novo valor (novo espaço na memória)

    setComments(commentsWithoutDeletedOne);    
  }

  const isNewCommentEmpty = newCommentText.length == 0;

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
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>     
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
               key={comment} 
               content={comment}
               onDeleteComment={deleteComment} 
            />
          )
          // o comentário está sendo passado como uma propriedade chamada comment (vai mandar o texto do comentário para dentro da propriedade)
          // deleteComment é uma função que está sendo passada como uma propriedade para ser possível ter a comunicação entre os componentes
        })}
      </div>
    </article>
    
  )
}
