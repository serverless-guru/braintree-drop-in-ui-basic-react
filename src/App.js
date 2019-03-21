import React, { Component } from 'react';
import dropin from 'braintree-web-drop-in';

class App extends Component {
  
  componentDidMount() {
    dropin.create(
      {
        authorization: '[tokenization key from Braintree sandbox settings]',
        container: this.refs.payment,
      },
      (err, clientInstance) => {
        console.error(err)
        console.log(clientInstance)
      },
    )
  }

  
  render() {
    return (
      <div>
        <section>
          <div>
            <div ref="payment" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
