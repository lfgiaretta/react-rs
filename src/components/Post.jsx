import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/lfgiaretta.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luís Giaretta</strong>
                        <span>Student</span>
                    </div>
                </div>

                <time title='15 de Fevereiro às 16:48' dateTime='02-15-2024 16:48:23'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder='Deixe um comentário'
                />
               <footer>
                 <button type="submit">Publicar</button>
               </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}