import ProjectItem from './ProjectItem';

const { projects } = require('../../assets/data/data.json');

const Projects = () => {
	return (
		<section id='projects' className='projects py-5'>
			<div className='container py-5'>
				<div className='row'>
					<div
						className='col-md-3 mr-5'
						data-aos='fade-in'
						data-aos-offset='250'
						data-aos-once='true'
					>
						<h6 className='section-title'>PROJECTS</h6>
					</div>
					<div className='col-md-7'>
						{projects.map((project, idx) => (
							<ProjectItem key={idx} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
