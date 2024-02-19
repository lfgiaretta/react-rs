import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/lfgiaretta.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luís Giaretta</strong>
                        <span>Student</span>
                    </div>
                </div>

                <time title='15 de Fevereiro às 16:48' dateTime='02-15-2024 16:48:23'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉<a href=''>jane.design/doctorcare </a></p>

                <p> <a href=''>#novoprojeto #nlw #rocketseat </a> </p>  
            </div>
        </article>
    )
}