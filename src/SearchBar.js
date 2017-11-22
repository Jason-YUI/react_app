import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="search..."/>
        <p>
          <input type="checkbox"/>
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}