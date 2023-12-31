import Painting from './Painting/Painting';
import PropTypes from 'prop-types';
import list from './Painting/Painting.module.css';

function PaintingList({ items }) {
  return (
    <ul className={list.list}>
      {items.map(item => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;
