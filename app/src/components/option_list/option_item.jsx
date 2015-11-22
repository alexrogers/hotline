import React from 'react';

class OptionItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired,
    index: React.PropTypes.number.isRequired,
  }

  constructor() {
    super();
  }

  handleOptionClick = (e) => {
    e.preventDefault();

    console.log(this.props.index);

    // set state to modal index
  }

  render() {
    return (
      <li onClick={ this.handleOptionClick }>
        <span className='option-temptation'>
          { this.props.item.temptation  }
        </span>
        <span className='lots-of-dots'></span>
        <span className='option-passage'>
          { this.props.item.passage }
        </span>
      </li>
    );
  }
}

export default OptionItem;
