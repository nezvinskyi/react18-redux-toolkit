import Image from './Image';
import Title from './Title';
import Author from './Author';

const Book = ({ img, title, author, children, id, getBook, idx }) => {
  return (
    <article className='book'>
      <span className='number'>#{idx + 1}</span>
      <Image img={img} alt={title} />
      <Title title={title} />
      <Author author={author} />
      {children}
      <button onClick={() => getBook(id)}>Get Book</button>
    </article>
  );
};
export default Book;
