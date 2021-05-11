const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-light fixed-top bg-light'>
			<div className='container'>
				<button
					className='navbar-toggler'
					data-toggle='collapse'
					data-target='#navbar-menu'
				>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div id='navbar-menu' className='collapse navbar-collapse'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item ml-4'>
							<a href='#home' className='nav-link'>
								Home
							</a>
						</li>
						<li className='nav-item ml-4'>
							<a href='#background' className='nav-link'>
								Background
							</a>
						</li>
						<li className='nav-item ml-4'>
							<a href='#skills' className='nav-link'>
								Skills
							</a>
						</li>
						<li className='nav-item ml-4'>
							<a href='#projects' className='nav-link'>
								Projects
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
