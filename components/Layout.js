import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

const Layout = ({ children }) => {
	return (
		<Fragment>
			<Head>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
					integrity='sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=='
					crossorigin='anonymous'
				/>
			</Head>

			<Navbar />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
