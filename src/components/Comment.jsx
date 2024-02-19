import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src='https://github.com/lfgiaretta.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luís Giaretta</strong>
                            <time title='15 de Fevereiro às 16:48' dateTime='02-15-2024 16:48:23'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito legal, parabéns!! 👏👏</p>
                </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
            </div>

        </div>
    )
}