import styles from '../styles/Header.module.css';

const Header = () => {
	return (
		<header id='home' className='bg-light'>
			<div className='container'>
				<div className={styles.showcaseContent}>
					<h1 className='showcase-text mb-5'>Hello!</h1>

					<h1 className='showcase-text'>
						I'm <span className={styles.showcaseName}>Cromuel Barut</span>
						, a web developer skilled in React, Node, Express, MongoDB and
						other stuffs.
					</h1>

					<h5 className='mt-5'>
						Get in touch 👉{' '}
						<span className='text-email'>cromuelbarut@gmail.com</span>
					</h5>
				</div>
			</div>
		</header>
	);
};

export default Header;
