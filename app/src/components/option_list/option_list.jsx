import React from 'react';
import OptionItem from './option_item';

class OptionList extends React.Component {
  render() {
    const list = [
      {
        temptation: 'Worry Hotline',
        passage: '1 Peter 5:7',
        fullVerse: 'some really long string here',
      },
      {
        temptation: 'Fear Hotline',
        passage: 'Isaiah 41:10',
        fullVerse: 'some alternative string here',
      },
    ];

    return (
      <ul className='option-list'>
        {
          list.map((item, index) => {
            return (
              <OptionItem item={ item } key={ index } index={ index } />
            );
          })
        }
      </ul>
    );
  }
}

export default OptionList;
