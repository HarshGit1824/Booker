import Form from "./Form";
import { useReducer } from "react";
import {booksReducer} from "../lib/reducer";

function App() {
  const [books, dispatch] = useReducer(booksReducer, [
    {
      id: crypto.randomUUID(),
      text: "The Great Gatsby",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: "1984",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: "The Monk Who Sold His ferrari",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: "The Catcher in the Rye",
      likes: 0,
    },
    {
      id: crypto.randomUUID(),
      text: "Pride and Prejudice",
      likes: 0,
    }

    // "The Great Gatsby",
    // "The Catcher in the Rye",
    // "To Kill a Mockingbird",
    // "1984",
    // "Pride and Prejudice",
  ]);

  // const addBook = (book) => {
  //   const newBook = {
  //     id: crypto.randomUUID(),
  //     text: book,
  //     likes: 0,
  //   };
  //   setBooks([newBook, ...books]);
  // };
  // const deleteBook = (id) => {
  //   setBooks(books.filter((b) => b.id !== id));
  // };

  // const likeBook = (id) => {
  //   setBooks((prevState) => {
  //     return prevState.map((book) =>
  //       book.id === id ? { ...book, likes: book.likes + 1 } : book
  //     );
  //   });
  // };
  // const dislikeBook = (id) => {
  //   setBooks((prevState) => {
  //     return prevState.map((book) =>
  //       book.id === id ? { ...book, likes: book.likes - 1 } : book
  //     );
  //   });
  // };

  // const handleSort = () => {
  //   setBooks([...books].sort((a, b) => b.likes - a.likes));
  // };

  return (
    <>
      <header>
        <h1>Booker</h1>
      </header>
      <Form
        onSubmit={(name) => dispatch({ type: "ADD", payload: name })}
        onSort={() => dispatch({ type: "SORT" })}
        onOrder={() => dispatch({ type: "ORDER" })}
      />
      {books.map((book) => (
        <pre key={book.id}>
          <h3>{book.text}</h3>
          <p>{book.likes}</p>
          <div style={{ display: "flex", gap: "5px" }}>
            <button
              onClick={() => dispatch({ type: "LIKE", payload: book.id })}
            >
              Like
            </button>
            <button
              onClick={() => dispatch({ type: "DISLIKE", payload: book.id })}
            >
              Dislike
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", payload: book.id })}
            >
              Delete
            </button>
          </div>
        </pre>
      ))}
    </>
  );
}
export default App;
