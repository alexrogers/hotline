import React from 'react';

class OptionList extends React.Component {
  render() {
    return (
      <ul className="option-list">
        <li>
          <span className="option-temptation">
            Worry Hotline
          </span>
          <span className="lots-of-dots"></span>
          <span className="option-passage">
            1 Peter 5:7
          </span>
        </li>
        <li>
          <span className="option-temptation">
            Fear Hotline
          </span>
          <span className="lots-of-dots"></span>
          <span className="option-passage">
            Isaiah 41:10
          </span>
        </li>
      </ul>
    );
  }
}

export default OptionList;
