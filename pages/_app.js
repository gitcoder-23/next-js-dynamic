import Head from 'next/head'
import '../styles/globals.css'
import HeaderMenu from './components/HeaderMenu'
import Footer from './components/Footer'
// import Preloader from './components/Preloader'
// import Loading from './layouts/forms/Loading'

function SpaceDynamicApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>Space Dynamic - SEO HTML5 Template</title>
    </Head>
    {/* <Loading /> */}
    <HeaderMenu />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}

export default SpaceDynamicApp;
