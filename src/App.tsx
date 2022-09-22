import Header from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },

    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content: "A melhor edição do NLW chegou ao fim!",
      },
      {
        type: "paragraph",
        content:
          "Obrigado por ter feito parte desse momento histórico com a gente, mas esse é apenas o começo da sua evolução na programação.",
      },
      {
        type: "paragraph",
        content:
          "Porque o aprendizado é contínuo e sempre haverá um próximo nível...🚀🚀",
      },
      { type: "link", content: "www.rocketseat.com.br" },
    ],
    publishedAt: new Date("2022-09-21 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educador @Rocketseat",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      {
        id: 2,
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { id: 3, type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-09-21 21:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
