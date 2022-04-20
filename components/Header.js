import styles from '../styles/Header.module.css';

const Header = ({ briefBackground }) => {
	return (
		<header id='home' className='bg-light'>
			<div className='container'>
				<div className={styles.showcaseContent}>
					<h1 className={`${styles.showcaseText} mb-5`}>Hello! 👋</h1>

					<h1
						className={styles.showcaseText}
						dangerouslySetInnerHTML={{ __html: briefBackground }}
					/>

					{/* <h5 className='mt-5'>
						Get in touch 👉{' '}
						<span className='text-email'>rbeast238@gmail.com</span>
					</h5> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
