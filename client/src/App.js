import React from 'react';

const Child = ({ value }) => <h1>{ value }</h1>

class App extends React.Component {

  render() {
    return (
        <div className="inner">
          { [1, 2, 3, 4].map( x => <Child key={x} value={x} />) }
        </div>
    );
  }
};

export default App;
