import { AuthUserProvider } from "../firebase/AuthUserContext";
import { useEffect } from "react";
import Layout from "../components/layout";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/forms.css"
import "../styles/styles.css"


function MyApp({ Component, pageProps }) {

    // effectively onMount
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <AuthUserProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthUserProvider>

    )
}

export default MyApp;