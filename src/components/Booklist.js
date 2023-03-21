import Book from './Book';
import { books } from '../data/books';

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);

    console.log('book', book);
  };

  return (
    <section className='booklist'>
      {books.map((book, idx) => {
        return (
          <Book
            {...book}
            id={book.id}
            getBook={getBook}
            key={book.id}
            idx={idx}
          />
        );
      })}
    </section>
  );
};
export default Booklist;
