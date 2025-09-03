import Layout from '../Layout.jsx'; // Importa il tuo componente Layout
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // Avvolge ogni pagina con il Layout
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
