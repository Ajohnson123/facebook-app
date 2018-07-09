import React from 'react'

class Backend extends React.Component {
  constructor() {
    super()

    this.state = {
      expDate: '',
      payment: '',
      term: '',
      dueAtSigning: '',
    }
  }
  setExpDate(evt) {
      this.setState({ expDate: evt.target.value })
  }

  setPayment(evt) {
    this.setState({ payment: evt.target.value })
  }

  setTerm(evt) {
    this.setState({ term: evt.target.value })
  }

  setDueAtSigning(evt) {
    this.setState({ dueAtSigning: evt.target.value })
  }


    print() {
      console.log(this.state.expDate)
      console.log(this.state.payment)
      console.log(this.state.term)
      console.log(this.state.dueAtSigning)
    }

  render() {
    return(
      <div style={{backgroundColor: '#edf0f5', width: 'auto', height: 'auto'}}>
      <div>
      <label>Expiration Date</label>
      <input
      name={'expDate'}
      onChange={this.setExpDate.bind(this)}
      />
      <label>Payment</label>
      <input
      name={'payment'}
      onChange={this.setPayment.bind(this)}
      />
      <label>Term</label>
      <input
      name={'term'}
      onChange={this.setTerm.bind(this)}
      />
      <label>Due at signing</label>
      <input
      name={'dueAtSigning'}
      onChange={this.setDueAtSigning.bind(this)}
      />
      </div>
      <button onClick={this.print.bind(this)}>Print</button>
      </div>
    )
  }
}

export default Backend
