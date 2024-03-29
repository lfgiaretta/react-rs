import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:'https://github.com/lfgiaretta.png',
      name: 'Luís Giaretta',
      role: 'Student'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-10 10:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl:'https://github.com/gkissel.png',
      name: 'Gustavo Kissel',
      role: 'Student'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-11 20:00:00'),
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
          {posts.map(post => {
             return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> 
             )
           })} 
        </main>
      </div>
    </div>
  );
}
