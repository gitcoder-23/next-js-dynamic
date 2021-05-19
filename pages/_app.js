import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Head from 'next/head'

function SpaceDynamicApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default SpaceDynamicApp;
