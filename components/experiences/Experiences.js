import ExperienceItem from '../experiences/ExperienceItem';

const Skills = ({ experiences }) => {
	return (
		<section id='experiences' className='experiences bg-light py-5'>
			<div className='container py-5'>
				<div
					className='row'
					data-aos='fade-in'
					data-aos-offset='100'
					data-aos-once='true'
				>
					<div className='col-md-3 mr-5'>
						<h6 className='section-title'>EXPERIENCES</h6>
					</div>
					<div className='col-md-7'>
						<div className='row'>
							{experiences.map((exp, idx) => (
								<ExperienceItem key={idx} exp={exp} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
