import React from 'react'

export class AfterCheckout extends React.Component {
  render() {
    console.log('in the render in aftercheckout')
    return (
      <div id="aftercheckoutForm">
        <p>Thank you for your order :)</p>
      </div>
    )
  }
}
