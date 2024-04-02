// import A from "./components/A";
// import B from "./components/B";
// import C from "./components/C";
import Book from "./components/Book.jsx";
import books from "./data/books.json"
const App = () => {

    return (
        <div>
            {/* <A></A><B></B><C></C> */}
            {books.map((book) => <Book key={book.title} book={book} />)}

        </div>
    );
}

export default App
