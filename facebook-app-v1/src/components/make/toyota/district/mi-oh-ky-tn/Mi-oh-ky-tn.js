import React from 'react'

class MiOhKyTnReigon extends React.Component {
  constructor() {
    super()

    this.state = {
      test: 'props passed'
    }
  }
  render() {
    return(
      <div>
      <WalkerToyota
      test={this.state.test}
      />
      </div>
    )
  }
}

export default MiOhKyTnReigon
