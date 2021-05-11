import GlobalState from '../context/globalState/GlobalState';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<GlobalState>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalState>
	);
};

export default MyApp;
