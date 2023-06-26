import PropTypes from 'prop-types';
import s from './Painting.module.css';
import defaultImage from './default.jpg';

const Painting = ({
  imageUrl = defaultImage,
  title,
  profileUrl,
  author,
  price,
  quantity,
}) => {
  return (
    <div className={s.container}>
      <img src={imageUrl} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={profileUrl}>{author}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Accessibility: {quantity < 10 ? 'end' : 'in stock'}</p>
      <button type="button">Add to Shopping Cart</button>
    </div>
  );
};

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
