import React, { Component } from 'react';
//glue between react and redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    { book.title }
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}
//anything returned from this function will end up
// on the BookList container
function mapDispathcToProps(dispatch) {
    //whenever selectBook is called, action has to be passed to the reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

//promote BookList from a component to a  container
//makes selectBook available as this.props.selectBook
//whenever state changes, container BookList will re-render
export default connect(mapStateToProps, mapDispathcToProps)(BookList);
