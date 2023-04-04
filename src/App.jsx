import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>

        <main>
          <Post
            author="Florença"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit praesentium quo, sunt eaque officiis temporibus soluta harum nemo? Non magnam ipsum labore esse incidunt sit nulla consequuntur sed maiores?" 
          />
          <Post
            author="Lucas"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit praesentium quo, sunt eaque officiis temporibus soluta harum nemo? Non magnam ipsum labore esse incidunt sit nulla consequuntur sed maiores?" 
          />

        </main>
      </div>
     
    </div>
  )
}


