import Head from 'next/head'
// import '../styles/globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Preloader from './components/Preloader'

function SpaceDynamicApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Space Dynamic - SEO HTML5 Template</title>
    </Head>
    <Preloader />
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default SpaceDynamicApp;
