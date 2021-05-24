
import Document, { Html, Head, Main, NextScript } from 'next/document';

function CustomDocument() {
    return (
        <Html>
            <Head>
            <meta charSet="UTF-8" />
            {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" /> */}
            <meta name="description" content="" />
            <meta name="author" content="" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

            {/* <title>Space Dynamic - SEO HTML5 Template</title> */}
            <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.1/css/font-awesome.css" rel="stylesheet" />

          
            <link rel="stylesheet" href="assets/css/fontawesome.css" />
            <link rel="stylesheet" href="assets/css/templatemo-space-dynamic.css" />
            <link rel="stylesheet" href="assets/css/animated.css" />
            <link rel="stylesheet" href="assets/css/owl.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            {/* <script src="assets/js/owl-carousel.js"></script> */}
            <script src="assets/js/animation.js"></script>
            <script src="assets/js/imagesloaded.js"></script>
            {/* <script src="assets/js/templatemo-custom.js"></script> */}
            </body>
        </Html>
    );
}

CustomDocument.getInitialProps = Document.getInitialProps;

CustomDocument.renderDocument = Document.renderDocument;

export default CustomDocument;