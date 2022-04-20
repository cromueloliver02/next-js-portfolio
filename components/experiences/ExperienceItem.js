import styles from '../../styles/ExperienceItem.module.css';

const ExperienceItem = ({
	exp: { position, company, duration, roles, projects }
}) => {
	return (
		<div className='col-md-12 mb-3'>
			<h6 className={styles.position}>{position}</h6>
			<p>
				<strong>Company</strong>:{' '}
				<span className={!company ? styles.confidential : null}>
					{company ? company : 'confidential'}
				</span>
			</p>
			<p>
				<strong>Duration</strong>: {duration}
			</p>
			<p className='mb-1'>
				<strong>Roles</strong>:
			</p>
			<ul>
				{roles.map(role => (
					<li>{role}</li>
				))}
			</ul>
			<p className='mb-1'>
				<strong>Company Projects</strong>:
			</p>
			<ul>
				{projects.map(project => (
					<li>{project}</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceItem;
