import React from 'react'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import Checkbox from '@material-ui/core/Checkbox';
import Dropdown from './Dropdown'

const trims = [
  {
    value: 'L',
    label: 'L',
  },
  {
    value: 'LE',
    label: 'LE',
  },
  {
    value: 'SE',
    label: 'SE',
  },
  {
    value: 'Hybrid LE',
    label: 'Hybrid LE',
  },
  {
    value: 'XLE',
    label: 'XLE',
  },
  {
    value: 'XSE',
    label: 'XSE',
  },
  {
    value: 'Hybrid SE',
    label: 'Hybrid SE',
  },
  {
    value: 'Hybrid XLE',
    label: 'Hybrid XLE',
  },
  {
    value: 'XLE V6',
    label: 'XLE V6',
  },
  {
    value: 'XSE V6',
    label: 'XSE V6',
  },
];

class PickYourMatch extends React.Component {
  constructor() {
    super()

    this.handleTotal= this.handleTotal.bind(this)
    this.handleNextL = this.handleNextL.bind(this)
    this.handleNextLE = this.handleNextLE.bind(this)
    this.handleNextSE = this.handleNextSE.bind(this)
    this.handleNextHLE = this.handleNextHLE.bind(this)
    this.handleNextXLE = this.handleNextXLE.bind(this)
    this.handleNextXSE = this.handleNextXSE.bind(this)
    this.handleNextHSE = this.handleNextHSE.bind(this)
    this.handleNextHXLE = this.handleNextHXLE.bind(this)
    this.handleNextXLEV6 = this.handleNextXLEV6.bind(this)
    this.handleNextXSEV6 = this.handleNextXSEV6.bind(this)

    this.state = {
      name: '',
      email: '',
      trimLevel: '',
    }
  }

  handleTotal() {
    this.setState({ activeStep: this.state.activeStep + 1 })
    //send email
  }
    handleNextL() {
      this.setState({ trimLevel: 'L' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextLE() {
      this.setState({ trimLevel: 'LE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextSE() {
      this.setState({ trimLevel: 'SE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextHLE() {
      this.setState({ trimLevel: 'Hybrid LE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextXLE() {
      this.setState({ trimLevel: 'XLE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextXSE() {
      this.setState({ trimLevel: 'XSE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextHSE() {
      this.setState({ trimLevel: 'Hybrid SE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextHXLE() {
      this.setState({ trimLevel: 'Hybrid XLE' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextXLEV6() {
      this.setState({ trimLevel: 'XLE V6' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }
    handleNextXSEV6() {
      this.setState({ trimLevel: 'XSE V6' })
      this.setState({ activeStep: this.state.activeStep + 1 })
    }


  render() {
    if ( this.props.PYM === 0) {
      return(
        <Card1
        nextPYM={this.props.nextPYM}
        backPYM={this.props.backPYM}
        />
      )
    } else if (this.props.PYM === 1) {
      return(
         <Card2
         nextPYM={this.props.nextPYM}
         backPYM={this.props.backPYM}
         test={this.props.test}
         handleNextL = {this.handleNextL}
         handleNextLE = {this.handleNextLE}
         handleNextSE = {this.handleNextSE}
         handleNextHLE = {this.handleNextHLE}
         handleNextXLE = {this.handleNextXLE}
         handleNextXSE = {this.handleNextXSE}
         handleNextHSE = {this.handleNextHSE}
         handleNextHXLE = {this.handleNextHXLE}
         handleNextXLEV6 = {this.handleNextXLEV6}
         handleNextXSEV6 = {this.handleNextXSEV6}
         changeToL={this.props.changeToL}
         changeToLE={this.props.changeToLE}
         changeToSE={this.props.changeToSE}
         changeToHLE={this.props.changeToHLE}
         changeToXLE={this.props.changeToXLE}
         changeToXSE={this.props.changeToXSE}
         changeToHSE={this.props.changeToHSE}
         changeToHXLE={this.props.changeToHXLE}
         changeToXLEV6={this.props.changeToXLEV6}
         changeToXSEV6={this.props.changeToXSEV6}

         />
       )
    } else if (this.props.PYM === 2) {
      return(
         <Card3
         nextPYM={this.props.nextPYM}
         backPYM={this.props.backPYM}
         trimLevel={this.state.trimLevel}
         chooseCash={this.props.chooseCash}
         chooseLease={this.props.chooseLease}
         chooseFinance={this.props.chooseFinance}
         lease={this.props.lease}
         finance={this.props.finance}
         cash={this.props.cash}


         />
       )
    }  else if (this.props.PYM === 3) {
      return(
        <Card4
        chooseNoTestDrive={this.props.chooseNoTestDrive}
        chooseYesTestDrive={this.props.chooseYesTestDrive}


        />
      )
    } else if (this.props.PYM === 4) {
      return(
         <Card5
         tradeNo={this.props.tradeNo}
         tradeYes={this.props.tradeYes}


         />
       )
    } else if (this.props.PYM === 5) {
      return(
         <Card6
         financeNo={this.props.financeNo}
         financeYes={this.props.financeYes}


         />
       )
    } else if (this.props.PYM === 6) {
      return(
        <Card7
        handleTotal={this.handleTotal}
        nextPYM={this.props.nextPYM}
        backPYM={this.props.backPYM}
        PYMName={this.props.PYMName}
        PYMEmail={this.props.PYMEmail}
        handleSubmitPYM={this.props.handleSubmitPYM}

        />
      )
    } else if (this.props.PYM === 7) {
      return(
         <Card8
           />
       )
    }
  }
}


class Card1 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-container">
          <div className="responsive-picture dealmaker-icon">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/makedeal-icon.svg")} />
            </picture>
          </div>
          <div className="rule rule-1">
            <hr style={{opacity: .54}}/>
          </div>
        </div>
        <div className="container dealmaker">
          <span className="text-element dealmaker-p">DEALMAKER</span>
          <span className="text-element pock-your-deal-p">PICK YOUR MATCH</span><button onClick={this.props.nextPYM} type="button" className="pick-deal-red-btn">GET&nbsp;STARTED</button>
          <span className="text-element pick-deal-sub-text-p">Get started using our express auto<br/>shopping system</span>
        </div>
      </div>
    )
  }
}
class Card2 extends React.Component {
  constructor() {
    super()

this.handleTrimLevel = this.handleTrimLevel.bind(this)

    this.state = {
      trim: 'L',
    }
  }

  handleChange = name => event => {
     this.setState({
       [name]: event.target.value,
     });
   };

   handleTrimLevel() {
     if (this.state.trim === 'L') {
       this.props.handleNextL()
     } else if (this.state.trim === 'LE') {
       this.props.handleNextLE()
     } else if (this.state.trim === 'SE') {
       this.props.handleNextSE()
     } else if (this.state.trim === 'Hybrid LE') {
       this.props.handleNextHLE()
     } else if (this.state.trim === 'XLE') {
       this.props.handleNextXLE()
     } else if (this.state.trim === 'XSE') {
       this.props.handleNextXSE()
     } else if (this.state.trim === 'Hybrid SE') {
       this.props.handleNextHSE()
     } else if (this.state.trim === 'Hybrid XLE') {
       this.props.handleNextHXLE()
     } else if (this.state.trim === 'XLE V6') {
       this.props.handleNextXLEV6()
     } else if (this.state.trim === 'XSE V6') {
       this.props.handleNextXSEV6()
     }
   }

  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-2-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6-b.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-1">
          <span className="text-element dealmaker-head-step-1">Select Trim Level</span>
          <div className="container step-1-selector">
          <Dropdown
          changeToL={this.props.changeToL}
          changeToLE={this.props.changeToLE}
          changeToSE={this.props.changeToSE}
          changeToHLE={this.props.changeToHLE}
          changeToXLE={this.props.changeToXLE}
          changeToXSE={this.props.changeToXSE}
          changeToHSE={this.props.changeToHSE}
          changeToHXLE={this.props.changeToHXLE}
          changeToXLEV6={this.props.changeToXLEV6}
          changeToXSEV6={this.props.changeToXSEV6}
          />
          </div><button onClick={this.props.backPYM} type="button" className="step-1-back-button">BACK</button><button onClick={this.props.nextPYM} type="button" className="step-2-continue-btn">CONTINUE</button>
        </div>
      </div>
    )
  }
}
class Card3 extends React.Component {
  render() {
    const classes = this.props;

    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")}/>
            </picture>
          </div>
          <div className="responsive-picture step-2-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6-b.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-2">
          <span className="text-element dealmaker-head-step-2">Select Offer Type</span>
          <div className="container step-2-selector">
            <div className="text-element lease-checkbox-text">
              <Checkbox
                checked={this.props.lease}
                onChange={this.props.chooseLease('lease')}
                value={'lease'}
                style={{color: '#c00'}}
                className="checkLine"
                />
              <p style={{color: '#fff', marginTop: '25px'}} className="checkLine">LEASE</p>
              </div>
              <div className="text-element apr-checkbox-text">
                <Checkbox
                  checked={this.props.finance}
                  onChange={this.props.chooseFinance('finance')}
                  value={'finance'}
                  style={{color: '#c00'}}
                  className="checkLine"
                  />
                <p style={{color: '#fff', marginTop: '25px'}} className="checkLine">FINANCE</p>
              </div>
                <div className="text-element cash-checkbox-text">
                  <Checkbox
                    checked={this.props.cash}
                    onChange={this.props.chooseCash('cash')}
                    value={'cash'}
                    style={{color: '#c00'}}
                    className="checkLine"
                    />
                  <p style={{color: '#fff', marginTop: '25px'}} className="checkLine">CASH</p>
              </div>
          </div><button onClick={this.props.backPYM} type="button" className="step-2-back-btn">BACK</button><button onClick={this.props.nextPYM} type="button" className="step-2-continue">CONTINUE</button>
        </div>
      </div>
    )
  }
}
class Card4 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-2-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6-b.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-3">
          <span className="text-element dealmaker-head-step-3">Would you like to schedule<br/>a test drive?</span><button onClick={this.props.chooseNoTestDrive} type="button" className="step-3-no-btn">NO</button><button onClick={this.props.chooseYesTestDrive} type="button" className="step-3-yes-btn">YES</button>
        </div>
      </div>
    )
  }
}
class Card5 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-2-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5-b.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6-b.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-4">
          <span className="text-element dealmaker-head-step-4">Do you have a Trade-In Vehicle?</span><button onClick={this.props.tradeNo} type="button" className="step-4-no">NO</button><button onClick={this.props.tradeYes} type="button" className="step-4-yes">YES</button>
        </div>
      </div>
    )
  }
}
class Card6 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-2-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-b">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6-b.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-5">
          <span className="text-element dealerhead-step-5">Are you in need of financing?</span><button onClick={this.props.financeNo} type="button" className="step-5-no">NO</button><button onClick={this.props.financeYes} type="button" className="step-5-yes">YES</button>
        </div>
      </div>
    )
  }
}
class Card7 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container timeline-containter-steps">
          <div className="responsive-picture step-1">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-1.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-2-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-2.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-3-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-3.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-4-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-4.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-5-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-5.svg")} />
            </picture>
          </div>
          <div className="responsive-picture step-6-on">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/d-6.svg")} />
            </picture>
          </div>
        </div>
        <div className="container dealmaker-6"><input onChange={this.props.PYMName} placeholder="Name" name="text-name" type="text" className="step-6-name-input" title="Name" /><input onChange={this.props.PYMEmail} placeholder="Email" name="Email" type="email" className="step-6-email" title="Email" form="Email" /><button onClick={this.props.handleSubmitPYM} type="button" className="step-6-btn">REQUEST&nbsp;QUOTE</button>
        </div>
      </div>
    )
  }
}
class Card8 extends React.Component {
  render() {
    return(
      <div className="container form-holder">
        <div className="container dealamker-confirmation-head">
          <span className="text-element text-1">DEALMAKER</span>
        </div>
        <div className="container dealmaker-7">
          <div className="responsive-picture dealmaker-icon-lrg">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/dealmaker/money-icon.svg")} />
            </picture>
          </div>
          <span className="text-element dealmaker-accepted-head">Accepted!</span>
          <p className="paragraph dealmaker-7-p">Your information has been accepted. You will recieve a confiramation email shortly.</p>
        </div>
      </div>
    )
  }
}

const textField = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '170px',
}

const styles = theme => ({
  textColor: {
    color: '#09f',
  },
});

export default PickYourMatch
