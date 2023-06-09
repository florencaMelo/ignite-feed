import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

// author: { avatar-url: "", name: "", role: "" }
// publishedAt: Date
// content: strong 

// aqui vai fazer com que as propriedades não fiquem estáticas e sim dinâmicas
const post =[
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/111822968?v=4',
      name: 'Florença Melo',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2023-04-05 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rockeseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare', },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date("2023-04-05 20:00:00")
  }
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        {/* iteração: é criar uma estrutura de repetição  */}
        <main>
          {post.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>
    </div>
  )
}


