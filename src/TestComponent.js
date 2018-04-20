import React from 'react';

class TestComponent extends React.Component {

   state = {
      count: 0
   }

   testFunc = () => {
      this.setState({ count: this.state.count + 1 });
   };

   render() {
      return (
         <div>
            <button onClick={this.testFunc}>click me</button>
            Count: {this.state.count}
         </div>
      );
   }

   static propTypes = {
   };
}

export default TestComponent;