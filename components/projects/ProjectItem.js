import { Fragment } from 'react';
import styles from '../../styles/ProjectItem.module.css';

const ProjectItem = ({
	project: { project_name, description, photo, techs_used, html_url, repo_url }
}) => {
	return (
		<div
			className='mb-5 pb-5'
			data-aos='fade-in'
			data-aos-offset='250'
			data-aos-once='true'
		>
			<div className='d-sm-flex align-items-center mb-3'>
				<h6 className={styles.projectTitle}>{project_name}</h6>
				<a
					className='btn btn-dark btn-sm ml-sm-4'
					href={html_url}
					target='_blank'
				>
					<i className='fas fa-external-link-square-alt'></i>
					&nbsp;&nbsp;&nbsp;Visit site
				</a>
				<a
					className='btn btn-secondary btn-sm ml-2'
					href={repo_url}
					target='_blank'
				>
					<i className='fab fa-github'></i>&nbsp;&nbsp;&nbsp;View source
					code
				</a>
			</div>
			<p>{description}</p>
			<div className='mb-5'>
				{techs_used.map((tech_used, idx) => (
					<Fragment key={idx}>
						<div className='badge badge-primary'>{tech_used}</div>{' '}
					</Fragment>
				))}
			</div>

			<img
				className='img-fluid mb-5'
				src={`./assets/img/${photo}`}
				alt={project_name}
			/>
		</div>
	);
};

export default ProjectItem;
