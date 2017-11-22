import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import Item from './Item';

export default class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const todos = ['finish doc', 'submit pr', 'nag dan to review'];
    const myVariable = true;
    return (
      <div>
        <SearchBar/>
        <ProductTable products={this.props.products}/>
        <ul>
          {todos.map((message) => <Item key={message} message={message}/>)}
        </ul>
        {this.props.message === 0 &&
          <Item message={this.props.message}/>
        }
        <div>My JavaScript variable is {String(myVariable)}</div>
      </div>
    );
  }
}