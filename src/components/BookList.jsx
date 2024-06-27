import { Component } from "react";
import { Form } from "react-bootstrap";
import booksData from "./books/fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchInput: "",
  };

  render() {
    const { searchInput } = this.state;
    const filteredBooks = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="container">
        <Form style={{ marginBottom: "20px" }}>
          <Form.Group controlId="formBookSearch">
            <Form.Label>Search Book</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book name"
              value={searchInput}
              onChange={(e) => this.setState({ searchInput: e.target.value })}
            />
          </Form.Group>
        </Form>
        <div className="row">
          {searchInput &&
            filteredBooks.length > 0 &&
            filteredBooks.map((book) => (
              <div key={book.asin} className="col-md-3 mb-4">
                <SingleBook book={book} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default BookList;
