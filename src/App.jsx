import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Guilherme Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum ullam quidem nobis quia in est porro? Maiores aspernatur modi odit explicabo unde. Dignissimos possimus fugiat ipsum, cupiditate eaque voluptatum!"
          />

          <Post
            author="Guilherme Santos"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo illum ullam quidem nobis quia in est porro? Maiores aspernatur modi odit explicabo unde. Dignissimos possimus fugiat ipsum, cupiditate eaque voluptatum!"
          />
        </main>
      </div>
    </div>
  )
}