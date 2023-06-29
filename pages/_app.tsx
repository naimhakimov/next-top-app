import {AppProps} from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

function MyApp({Component, pageProps}: AppProps): JSX.Element {
    return (
        <>
            <Head>
                <title>MyTop - наш лучшый топ</title>
                <link rel="icon" href="./next.svg"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
                    rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp