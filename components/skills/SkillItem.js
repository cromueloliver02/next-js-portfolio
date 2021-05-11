import PropTypes from 'prop-types';
import styles from '../../styles/SkillItem.module.css';

const SkillItem = ({ skill: { skillCategory, skillItems } }) => {
	return (
		<div className='col-md-4 mb-3'>
			<h6 className={styles.skillCategory}>{skillCategory}</h6>
			{skillItems.map((skillItem, idx) => (
				<p key={idx} className={styles.skillItem}>
					{skillItem}
				</p>
			))}
		</div>
	);
};

SkillItem.propTypes = {
	skill: PropTypes.object.isRequired
};

export default SkillItem;
