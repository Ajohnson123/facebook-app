import React from 'react'

class CamryTrim extends React.Component {
  render() {
    return(
      <div className="container trim-hero">
        <div className="container hero-image">
          <div className="responsive-picture camry-hero-1">
            <picture><img alt="Camry-L" style={{width: '100%', height: '100%'}} src={this.props.src}/>
            </picture>
          </div>
        </div>
        <h1 className="msrp-price">{this.props.price}</h1>
        <h1 className="devider">|</h1>
        <p className="paragraph starting-msrp">starting msrp</p>
        <h1 className="mpg-mi">{this.props.mpg}</h1>
        <h1 className="mpg-mi">{this.props.mpg}</h1>
        <p className="paragraph mpg-est">est.mpg</p>
      </div>
    )
  }
}

export default CamryTrim
