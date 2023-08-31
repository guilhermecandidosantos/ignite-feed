import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";
import "./global.css";

interface Post {

}

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guilhermecandidosantos.png",
      name: "Guilherme Santos",
      role: "Assistente de Service Desk"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"},
    ] ,
    publishedAt: new Date("2023-08-20 20:00:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/guilhermecandidosantos.png",
      name: "Nelson Mendes",
      role: "Analista de Infraestrutura SR"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "jane.design/doctorcare"},
    ] ,
    publishedAt: new Date("2023-08-29 07:00:00")
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          { 
            posts.map(post => {
              return (
                <Post 
                  post={post}
                />
              )
            }) 
          }
        </main>
      </div>
    </div>
  )
}