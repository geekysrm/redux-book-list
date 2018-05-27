//Container/smart component - Component that has direct access to state produced by Redux
import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside BookList
  return {
    books: state.books
  };
}

//Function mapDispatchToProps - Anything returned from this //function will end up as props on BookList container
function mapDispatchToProps(dispatch) {
  //bindActionCreators - Whenever selectBook is called, result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//Promote BookList from a component to a container.
//It needs to know about this new dispatch method, selectBook.
//Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
