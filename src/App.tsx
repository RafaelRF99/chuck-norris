import styles from './App.module.scss'

import { IChuckNorris } from './interface/ChuckNorris'

import { useQuery } from 'react-query'
import axios from 'axios'

export default function App() {
    const { data, isFetching } = useQuery<IChuckNorris>(
        'Chuck Norris',
        async () => {
            const res = await axios.get(
                'https://api.chucknorris.io/jokes/random',
            )

            return res.data
        },
    )

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Chuck Norris</h1>
                <hr />
            </div>
            <a href="https://api.chucknorris.io/" target="_blank">
                <img src="/chucknorris_logo.png" alt="Chuck Norris" />
            </a>
            <div>
                <div>
                    <p className={styles.speak}>
                        {isFetching
                            ? "Don't look too hard, it can blind you."
                            : data?.value}
                    </p>
                    <p>Criado em: {data?.created_at}</p>
                    <p>Ultima atualização: {data?.updated_at}</p>
                </div>
            </div>
        </div>
    )
}
