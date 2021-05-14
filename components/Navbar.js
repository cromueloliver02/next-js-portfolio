import { useState } from 'react';
import {
	Collapse,
	Container,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

import styles from '../styles/Navbar.module.css';

const AppNavbar = () => {
	const [isOpen, toggle] = useState(false);

	return (
		<Navbar
			color='light'
			light
			expand='md'
			fixed='top'
			className={styles.appNavbar}
		>
			<Container>
				<NavbarBrand href='/' className={styles.navBrand}>
					<span className='primary-text'>&lt;&#x0002F;</span>
					<span className={styles.name}>crom</span>
					<span className='text-primary'>&gt;</span>
				</NavbarBrand>
				<NavbarToggler onClick={() => toggle(!isOpen)} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className='ml-auto' navbar>
						<NavItem className='ml-4'>
							<NavLink href='#home'>Home</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#background'>Background</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#skills'>Skills</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#experiences'>Experiences</NavLink>
						</NavItem>
						<NavItem className='ml-4'>
							<NavLink href='#projects'>Projects</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Container>
		</Navbar>
	);
};

export default AppNavbar;
