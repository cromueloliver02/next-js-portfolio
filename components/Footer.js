const Footer = () => {
	const currentYear = () => new Date().getFullYear();

	return (
		<footer className='bg-light py-4'>
			<div className='container'>
				<p className='text-center mb-0'>
					Developed by Cromuel Barut | &copy;{currentYear()}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
