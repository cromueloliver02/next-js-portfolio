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
			<ul class='list-group list-group-flush mb-4'>
				{roles.map(role => (
					<li class='list-group-item'>{role}</li>
				))}
			</ul>
			<p className='mb-1'>
				<strong>Company Projects</strong>:
			</p>
			<ul class='list-group list-group-flush'>
				{projects.map(project => (
					<li class='list-group-item'>
						<div className='d-flex justify-content-between'>
							<span>{project.name}</span>
							{project.url && (
								<span>
									<a
										href={project.url}
										target='_blank'
										rel='noopener noreferrer'
										className='btn btn-light btn-sm'
									>
										Visit site
									</a>
								</span>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExperienceItem;
