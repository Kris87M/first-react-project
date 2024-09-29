import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();
    const handleFavorite = e => {
        e.preventDefault();
        dispatch(toggleFavorite(props.id))
    };
    return (
        <li className={styles.card}>
            {props.title}
            <button className={clsx("fa fa-star-o", styles.button, props.isFavorite && styles.isActive)}onClick={handleFavorite}></button>
        </li>
    );
};

export default Card;