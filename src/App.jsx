import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main> <Post
        author="Luís Giaretta"
        content="Lorem ipsum dolor sit amet, consectet"
      />
      <Post author="Felipe Montini" content="Segundo post dos girí" /></main>
      </div>
    </div>
  );
}
