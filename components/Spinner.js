import RingLoader from 'react-spinners/RingLoader';
import styles from '../styles/Spinner.module.css';

const Spinner = () => {
	return (
		<div className={styles.loaderBackground}>
			<RingLoader color={'#007bff'} loading={true} />
		</div>
	);
};

export default Spinner;
