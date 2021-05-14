import Head from 'next/head';
import { Fragment, useContext, useEffect } from 'react';
import AOS from 'aos';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import Background from '../components/Background';
import Skills from '../components/skills/Skills';
import Experiences from '../components/experiences/Experiences';
import Projects from '../components/projects/Projects';
import globalContext from '../context/globalState/globalContext';

const Home = () => {
	const { loading, cancelLoading } = useContext(globalContext);

	useEffect(() => {
		// scroll to top
		window.scrollTo({ top: 0, behavior: 'smooth' });

		if (loading) {
			document.body.style.overflowY = 'hidden';

			AOS.init({
				startEvent: 'load'
			});
		} else {
			document.body.style.overflowY = 'scroll';
		}

		setTimeout(() => {
			cancelLoading();
		}, 1000);
	}, [loading]);

	return (
		<Fragment>
			<Head>
				<title>Cromuel D. Barut</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			{loading && <Spinner />}

			<Header />
			<Background />
			<Skills />
			<Experiences />
			<Projects />
		</Fragment>
	);
};
export default Home;
