import SkillItem from './SkillItem';

const skills = require('../../assets/data/data.json').skills;

const Skills = () => {
	return (
		<section id='skills' className='bg-light py-5'>
			<div className='container py-5'>
				<div
					className='row'
					data-aos='fade-in'
					data-aos-offset='100'
					data-aos-once='true'
				>
					<div className='col-md-3 mr-5'>
						<h6 className='section-title'>SKILLS</h6>
					</div>
					<div className='col-md-7'>
						<div className='row'>
							{skills.map((skill, idx) => (
								<SkillItem key={idx} skill={skill} />
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
