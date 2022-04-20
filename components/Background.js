const { background, keyBackgrounds } = require('../assets/data/data.json');

const Background = () => {
	return (
		<section
			id='background'
			className='background bg-light py-5'
			data-aos='fade-in'
			data-aos-offset='250'
			data-aos-once='true'
		>
			<div className='container py-5'>
				<div className='row'>
					<div className='col-md-3 mr-5'>
						<h6 className='section-title'>BACKGROUND</h6>
					</div>
					<div className='col-md-7'>
						{background.map(paragraph => (
							<p
								className='mb-4'
								dangerouslySetInnerHTML={{ __html: paragraph }}
							/>
						))}
						<ul>
							{keyBackgrounds.map(keyBackground => (
								<li>{keyBackground}</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Background;
