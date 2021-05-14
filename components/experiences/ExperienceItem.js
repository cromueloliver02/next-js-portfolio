import styles from '../../styles/ExperienceItem.module.css';

const ExperienceItem = ({ exp: { position, company, duration, role } }) => {
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
			<p>
				<strong>Role</strong>: {role}
			</p>
		</div>
	);
};

export default ExperienceItem;
