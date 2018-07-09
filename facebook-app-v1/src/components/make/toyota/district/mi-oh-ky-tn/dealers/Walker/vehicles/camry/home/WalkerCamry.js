import React from 'react'
import CamryTrim from '../trims/CamryTrim'
import SwipeableViews from 'react-swipeable-views';
import TextField from '@material-ui/core/TextField';
import TabsSheet from '../tabs/Tabs'
import PickYourMatch from '../pickyourmatch/PickYourMatch'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'


class WalkerCamry extends React.Component {
  constructor() {
    super()

    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack2 = this.handleBack2.bind(this)
    this.handleNext2 = this.handleNext2.bind(this)
    this.setOffer = this.setOffer.bind(this)
    this.setTrim = this.setTrim.bind(this)
    this.chooseNoTestDrive = this.chooseNoTestDrive.bind(this)
    this.chooseYesTestDrive = this.chooseYesTestDrive.bind(this)
    this.tradeNo = this.tradeNo.bind(this)
    this.tradeYes = this.tradeYes.bind(this)
    this.financeNo = this.financeNo.bind(this)
    this.financeYes = this.financeYes.bind(this)
    this.nextPYM = this.nextPYM.bind(this)
    this.backPYM = this.backPYM.bind(this)
    this.changeToL = this.changeToL.bind(this)
    this.changeToLE = this.changeToLE.bind(this)
    this.changeToSE = this.changeToSE.bind(this)
    this.changeToHLE = this.changeToHLE.bind(this)
    this.changeToXLE = this.changeToXLE.bind(this)
    this.changeToXSE = this.changeToXSE.bind(this)
    this.changeToHSE = this.changeToHSE.bind(this)
    this.changeToHXLE = this.changeToHXLE.bind(this)
    this.changeToXLEV6 = this.changeToXLEV6.bind(this)
    this.changeToXSEV6 = this.changeToXSEV6.bind(this)
    this.PYMName = this.PYMName.bind(this)
    this.PYMEmail = this.PYMEmail.bind(this)
    this.formName = this.formName.bind(this)
    this.formEmail = this.formEmail.bind(this)
    this.handleSubmitPYM = this.handleSubmitPYM.bind(this)
    this.handleSubmitForm = this.handleSubmitForm.bind(this)


    this.state = {
      leftOpacity: .30,
      rightOpacity: 1,
      activeStep: 0,
      leftOpacity2: .30,
      rightOpacity2: 1,
      activeStep2: 0,
      trimLevel: 'L',
      expDate: 'Exp. 7/9',
      payment: '$309',
      term: '36',
      dueAtSigning: '$0',
      offerType: 'LEASE',
      lease: false,
      finance: false,
      cash: false,
      military: false,
      college: false,
      testDrive: false,
      tradeIN: false,
      financeNeeded: false,
      PYM: 0,
      chosenTrimLevel: '',
      namePYM: '',
      emailPYM: '',
      nameForm: '',
      emailForm: '',
      dealerTitle: 'walker toyota, so count increases to track',
      dealerPhone: '9374334950',
      dealerMap: "https://goo.gl/maps/Bgu3pzXRzwT2",
      dealerEmail: "mailto:mail@example.org",
      dealerInventory: "https://www.walkertoyota.com/new-inventory/index.htm?search=&model=Camry&year=2018&gvBodyStyle=Sedan",
      toyotaCare: "https://www.walkertoyota.com/toyotacare.htm"
    }
  }

  handleBack = () => {
    if (this.state.activeStep <= 0) {
      this.setState({activeStep: 0})
    } else {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
    this.setState({leftOpacity: 1})
    this.setState({rightOpacity: 1})
    }
  };

  handleStepChange = activeStep => {
     this.setState({ activeStep });
   };

  handleNext = () => {
    if (this.state.activeStep === 9) {
      this.setState({activeStep: 9})

    } else {
      this.setState(prevState => ({
        activeStep: prevState.activeStep + 1,
      }));
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    }
  };

  async handleSubmitPYM(e) {
    e.preventDefault()

    this.setState({ PYM: this.state.PYM + 1 })

    const PYMForm = await axios.post('/PYMForm', {
      trimWanted: this.state.chosenTrimLevel,
      leaseWanted: this.state.lease,
      financeWanted: this.state.finance,
      cashWanted: this.state.cash,
      militaryWanted: this.state.military,
      collegeWanted: this.state.college,
      testDriveWanted: this.state.testDrive,
      tradeWanted: this.state.tradeIN,
      financeNeeded: this.state.financeNeeded,
      name: this.state.namePYM,
      email: this.state.emailPYM
    })
  }
  async handleSubmitForm(e) {
    const tempName = this.state.nameForm
    const tempEmail = this.state.emailForm
    this.setState({ nameForm: '' })
    this.setState({ emailForm: '' })
    e.preventDefault()

    const contactForm = await axios.post('/contact-form', {
      name: tempName,
      email: tempEmail
    })
  }

  setTrim() {
    if (this.state.activeStep === 1) {
      this.setState({ trimLevel: 'LE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    } else if (this.state.activeStep === 2) {
      this.setState({ trimLevel: 'SE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    } else if (this.state.activeStep === 3) {
      this.setState({ trimLevel: 'Hybrid LE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    } else if (this.state.activeStep === 4) {
      this.setState({ trimLevel: 'XLE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    } else if (this.state.activeStep === 5) {
      this.setState({ trimLevel: 'XSE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    }  else if (this.state.activeStep === 6) {
      this.setState({ trimLevel: 'Hybrid SE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    }  else if (this.state.activeStep === 7) {
      this.setState({ trimLevel: 'Hybrid XLE'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    }  else if (this.state.activeStep === 8) {
      this.setState({ trimLevel: 'XLE V6'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: 1})
    }  else if (this.state.activeStep === 9) {
      this.setState({ trimLevel: 'XSE V6'})
      this.setState({rightOpacity: .10})
      this.setState({leftOpacity: 1})
    }  else if (this.state.activeStep === 0) {
      this.setState({ trimLevel: 'L'})
      this.setState({rightOpacity: 1})
      this.setState({leftOpacity: .10})
    }
  }

  handleBack2 = () => {
    if (this.state.activeStep2 <= 0) {
      this.setState({activeStep2: 0})
    } else {
    this.setState(prevState => ({
      activeStep2: prevState.activeStep2 - 1,
    }));
    this.setState({leftOpacity2: 1})
    this.setState({rightOpacity2: 1})
    }
  };

  handleStepChange2 = activeStep2 => {
     this.setState({ activeStep2 });
   };

  handleNext2 = () => {
    if (this.state.activeStep2 === 4) {
      this.setState({activeStep2: 4})

    } else {
      this.setState(prevState => ({
        activeStep2: prevState.activeStep2 + 1,
      }));
      this.setState({rightOpacity2: 1})
      this.setState({leftOpacity2: 1})
    }
  };
  nextPYM() {
    this.setState({ PYM: this.state.PYM + 1 })
  }

  backPYM() {
    this.setState({ PYM: this.state.PYM - 1 })
  }


  chooseNoTestDrive() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ testDrive: false })
  }
  chooseYesTestDrive() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ testDrive: true })
  }
  tradeNo() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ tradeIN: false })
  }
  tradeYes() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ tradeIN: true })
  }
  financeNo() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ financeNeeded: false })
  }
  financeYes() {
    this.setState({ PYM: this.state.PYM + 1 })
    this.setState({ financeNeeded: true })
  }

  setOffer() {
    if (this.state.activeStep2 === 1) {
      this.setState({offerType: 'FINANCE'})
      this.setState({rightOpacity2: 1})
      this.setState({leftOpacity2: 1})
    } else if (this.state.activeStep2 === 2) {
      this.setState({offerType: 'CASH'})
      this.setState({rightOpacity2: 1})
      this.setState({leftOpacity2: 1})
    } else if (this.state.activeStep2 === 3) {
        this.setState({offerType: 'COLLEGE'})
        this.setState({rightOpacity2: 1})
        this.setState({leftOpacity2: 1})
    } else if (this.state.activeStep2 === 4) {
        this.setState({offerType: 'MILITARY'})
        this.setState({rightOpacity2: .30})
        this.setState({leftOpacity2: 1})
    } else if (this.state.activeStep2 === 0) {
      this.setState({offerType: 'LEASE'})
      this.setState({rightOpacity2: 1})
      this.setState({leftOpacity2: .30})
  }
}

chooseCash = name => event => {
 this.setState({ [name]: event.target.checked });
};
chooseLease = name => event => {
 this.setState({ [name]: event.target.checked });
};
chooseFinance = name => event => {
 this.setState({ [name]: event.target.checked });
};
chooseMilitary = name => event => {
 this.setState({ [name]: event.target.checked });
};
chooseCollege = name => event => {
 this.setState({ [name]: event.target.checked });
};


  openInventory() {
    window.location.href = `${this.state.dealerInventory}`
  }

  openMap() {
    window.location.href = `${this.state.dealerMap}`
  }

  openEmail() {
    window.location.href = `${this.state.dealerEmail}`
  }

  openPhone() {
    window.parent.location.href = `tel:1${this.state.dealerPhone}`
  }

  changeToL() {
    this.setState({ chosenTrimLevel: 'L' })
  }

  changeToLE() {
    this.setState({ chosenTrimLevel: 'LE' })
  }

  changeToSE() {
    this.setState({ chosenTrimLevel: 'SE' })
  }

  changeToHLE() {
    this.setState({ chosenTrimLevel: 'Hybrid LE' })
  }

  changeToXLE() {
    this.setState({ chosenTrimLevel: 'XLE' })
  }

  changeToXSE() {
    this.setState({ chosenTrimLevel: 'XSE' })
  }

  changeToHSE() {
    this.setState({ chosenTrimLevel: 'Hybrid SE' })
  }

  changeToHXLE() {
    this.setState({ chosenTrimLevel: 'Hybrid XLE' })
  }

  changeToXLEV6() {
    this.setState({ chosenTrimLevel: 'XLE V6' })
  }

  changeToXSEV6() {
    this.setState({ chosenTrimLevel: 'XSE V6' })
  }

  PYMName(evt) {
    this.setState({ namePYM: evt.target.value })
  }
  PYMEmail(evt) {
    this.setState({ emailPYM: evt.target.value })
  }

  formName(evt) {
this.setState({ nameForm: evt.target.value })
  }

  formEmail(evt) {
this.setState({ emailForm: evt.target.value })
  }

  render() {
    return(
      <body className="app-body">
        <div className="container app-header">
          <div className="responsive-picture toyotalogo">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/toyota-logo.svg")}/>
            </picture>
          </div>
          <span className="text-element make-model-p">CAMRY</span>
        </div>
        <div className="container app-banner"></div>
        <div className="container model-holder">
          <div className="container trim-level">
            <div onClick={this.handleBack} style={{opacity: this.state.leftOpacity}} className="responsive-picture model-selector-lt-arrow">
              <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/model-selector-arrow-lt.svg")}/>
              </picture>
            </div>
            <div onClick={this.handleNext} style={{opacity: this.state.rightOpacity}} className="responsive-picture model-selector-rt-arrow">
              <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/model-selector-arrow-rt.svg")}/>
              </picture>
            </div>
            <h1 className="trim-indicator">{this.state.trimLevel}</h1>
          </div>
          <SwipeableViews
            enableMouseEvents
            index={this.state.activeStep}
            onChangeIndex={this.handleStepChange}
            onTransitionEnd={this.setTrim}
          >
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$23,495'}
            mpg={'29/41'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-L.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$24,000'}
            mpg={'28/39'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-LE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$25,200'}
            mpg={'28/39'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-SE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$27,800'}
            mpg={'51/53'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-Hybrid-LE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$28,450'}
            mpg={'28/39'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-XLE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$29,000'}
            mpg={'28/39'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry_XSE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$29,500'}
            mpg={'44/47'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry_Hybrid-SE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$32,250'}
            mpg={'44/47'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-Hybrid-XLE.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$34,400'}
            mpg={'22/33'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-XLE-V6.png")}
            />
            </div>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <CamryTrim
            price={'$34,950'}
            mpg={'22/33'}
            src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/Camry-XSE-V6.png")}
            />
            </div>
            </SwipeableViews>
        </div>
        <div className="container card-holder">
          <SwipeableViews
            style={{backgroundColor: '#edf0f5'}}
            enableMouseEvents
            index={this.state.activeStep2}
            onChangeIndex={this.handleStepChange2}
            onTransitionEnd={this.setOffer}
          >
          <div style={Object.assign({}, styles2.slide, styles2.slide1)}>
          <div className="container lease-offer-card">
            <span className="text-element exp-date">{this.state.expDate}</span>
                <Checkbox
                checked={this.state.lease}
                onChange={this.chooseLease('lease')}
                value={'lease'}
                className="checkbox"
                style={checkbox}
                />
            <span className="text-element lease-monthly-payment">{this.state.payment}</span>
            <span className="text-element lease-per-month-txt">per month</span>
            <span className="text-element lease-monthly-term">{this.state.term}</span>
            <span className="text-element lease-monthly-term-p">months</span>
            <span className="text-element lease-money-down">{this.state.dueAtSigning}</span>
            <span className="text-element lease-money-due-p">due at signing</span>
          </div>
          </div>
          <div style={Object.assign({}, styles2.slide, styles2.slide1)}>
          <div className="container apr-offer-card">
            <span className="text-element exp-date">{this.state.expDate}</span>
              <Checkbox
                checked={this.state.finance}
                onChange={this.chooseFinance('finance')}
                value={'finance'}
                className="checkbox"
                style={checkbox}
                />
            <span className="text-element apr-rate">0.9</span>
            <span className="text-element apr-p">per month</span>
            <span className="text-element apr-monthly-term">48</span>
            <span className="text-element apr-monthly-trem-p">months</span>
          </div>
          </div>
          <div style={Object.assign({}, styles2.slide, styles2.slide1)}>
          <div className="container cash-card">
            <span className="text-element exp-date">{this.state.expDate}</span>
              <Checkbox
                checked={this.state.cash}
                onChange={this.chooseCash('cash')}
                value={'cash'}
                className="checkbox"
                style={checkbox}
                />
              <span className="text-element cash-amount">$0</span>
            <span className="text-element cash-p">No offers at this time</span>
          </div>
          </div>
          <div style={Object.assign({}, styles2.slide, styles2.slide1)}>
            <div className="container military-card">
              <span className="text-element exp-date">{this.state.expDate}</span>
                <Checkbox
                  checked={this.props.college}
                  onChange={this.chooseCollege('college')}
                  value={'college'}
                  className="checkbox"
                  style={checkbox}
                  />
                <span className="text-element college-grad-cash-amount">$750</span>
              <span className="text-element college-grad-p">College Grad</span>
              <div className="responsive-picture college-grad-logo">
                <picture><img alt="Placeholder Picture" style={{width: '100%', height: '100%'}} src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/collegegrad-logo.svg")} />
                </picture>
              </div>
            </div>
          </div>
          <div style={Object.assign({}, styles2.slide, styles2.slide1)}>
          <div className="container military-card">
            <span className="text-element exp-date">{this.state.expDate}</span>
              <Checkbox
                checked={this.props.military}
                onChange={this.chooseMilitary('military')}
                value={'military'}
                className="checkbox"
                style={checkbox}
                />
            <span className="text-element military-cash-amount">$1000</span>
            <span className="text-element military-cash-p">Military Cash</span>
            <div className="responsive-picture military-logo">
              <picture><img alt="Placeholder Picture" style={{width: '100%', height: '100%', marginBottom: '50px'}} src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/miltary_logo.svg")} />
              </picture>
            </div>
          </div>
          </div>
            </SwipeableViews>

            <div className="container offer-selector">
              <div onClick={this.handleBack2} style={{opacity: this.state.leftOpacity2}} className="responsive-picture offer-selector-arrow-lt">
                <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/offer-selector-arrow-lt.svg")}/>
                </picture>
              </div>
              <div onClick={this.handleNext2} style={{opacity: this.state.rightOpacity2}} className="responsive-picture offer-selector-arrow-rt">
                <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/offer-selector-arrow-rt.svg")}/>
                </picture>
              </div>
              <h4 className="offer-type-main">{this.state.offerType}</h4>
            </div>
        </div>
            <PickYourMatch
              chooseCash={this.chooseCash}
              chooseLease={this.chooseLease}
              chooseFinance={this.chooseFinance}
              lease={this.state.lease}
              finance={this.state.finance}
              cash={this.state.cash}
              chooseNoTestDrive={this.chooseNoTestDrive}
              chooseYesTestDrive={this.chooseYesTestDrive}
              tradeNo={this.tradeNo}
              tradeYes={this.tradeYes}
              financeNo={this.financeNo}
              financeYes={this.financeYes}
              nextPYM={this.nextPYM}
              backPYM={this.backPYM}
              PYM={this.state.PYM}
              changeToL={this.changeToL}
              changeToLE={this.changeToLE}
              changeToSE={this.changeToSE}
              changeToHLE={this.changeToHLE}
              changeToXLE={this.changeToXLE}
              changeToXSE={this.changeToXSE}
              changeToHSE={this.changeToHSE}
              changeToHXLE={this.changeToHXLE}
              changeToXLEV6={this.changeToXLEV6}
              changeToXSEV6={this.changeToXSEV6}
              PYMName={this.PYMName}
              PYMEmail={this.PYMEmail}
              formName={this.formName}
              formEmail={this.formEmail}
              handleSubmitPYM={this.handleSubmitPYM}
              />
        <div className="container warranty-holder">
          <div className="responsive-picture toyotacare-icon">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/manuAssets/toyotacare-icon.svg")}/>
            </picture>
          </div>
          <p className="paragraph toyotacare-copy-p"><br/>Your exceptional ownership experience starts <br/>with ToyotaCare, a no cost maintenance plan with 24‑hour roadside assistance.</p>
          <a className="link-text toyotacare-brochure-link" href={this.state.toyotaCare}>Program Information</a>
        </div>
        <div className="container gallery-holder">
          <div className="responsive-picture camry-pic-1">
            <picture><img alt="Placeholder Picture" style={{width: '100%', height: '100%'}} src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/CAM_MY18_0048_V001.jpg")}/>
            </picture>
          </div>
        </div>
        <div className="container model-reviews">
          <span className="text-element review-header">5-Star Safety Rating:</span>
          <span className="text-element review-p">2018 Toyota Camry<br/>Received the NHTSA 5-Star<br/>Overall Safety Rating</span>
          <div className="responsive-picture review-picture">
            <picture><img alt="Placeholder Picture" style={{width: '100%', height: '100%'}} src={require("../../../../../../../../../../img/Manufacturer/toyota/models/camry/2018/5_star_safety.jpg")}/>
            </picture>
          </div><button onClick={this.openInventory.bind(this)} type="button" className="inventory-btn">{<Explore />}</button>
        </div>
        <div className="container contact-form">
          <span className="text-element contactus-head-p">CONTACT US</span>
          <div className="rule contact-rule">
            <hr/>
            </div>
            <input onChange={this.formName} placeholder='Name' value={this.state.nameForm} className='name-form' /><input onChange={this.formEmail} placeholder='Email' value={this.state.emailForm} className='email-form' /><button onClick={this.handleSubmitForm}  type="button" className="email-form-btn">SUBMIT</button>
        </div>
        <div className="container dealer-holder">
          <div className="responsive-picture walker-toyota-logo">
            <picture><img alt="Placeholder Picture" src={require("../../../../../../../../../../img/Manufacturer/toyota/dealers/walker/walkertoyota-icon.svg")}/>
            </picture>
          </div>
          <div className="responsive-picture map-image">
            <picture><img alt="Placeholder Picture" style={{width: '100%', height: '100%'}} src={require("../../../../../../../../../../img/Manufacturer/toyota/dealers/walker/walkertoyotamap.jpg")}/>
            </picture>
          </div>
          <div className="container dealer-info"><button onClick={this.openMap.bind(this)} type="button" className="mapit-btn"></button><button type="button" onClick={this.openPhone.bind(this)} className="phonit"></button><button type="button" className="emailit"></button><button onClick={this.openEmail.bind(this)} type="button" className="emailit"></button>
          </div>
          <span className="text-element dealer-address">8457 Springboro Pike. Miamisburg, OH 45342</span>
        </div>
        <div className="container disclaimer-holder">

            <span style={{marginLeft: 'auto', marginRight: 'auto'}} className="text-element disclaimer-text-p">* While every reasonable effort is made to ensure the accuracy of this information, we are not responsible for any errors or omissions contained on these pages. Please verify any information in question with Walker Toyota.</span>
          <div className="container disclaimer-tab-holder">
          <TabsSheet />
          </div>
        </div>
        <div className="container copyright-holder">
          <span className="text-element copyright">© 2018 WalkerToyota | Powered By Autogy</span>
        </div>
        </body>
    )
  }
}

const styles = {
  slide: {
    color: '#000',
  },
  slide1: {
    background: '#edf1f6',
  },

};

const styles2 = {
  slide: {
    color: '#000',
  },
  slide1: {
    background: '#edf0f5',
  },
  slide2: {
      background: '#edf0f5',
    },
    slide3: {
        background: '#edf0f5',
      },
};

class Explore extends React.Component {
  render() {
    return(
      <p style={{fontSize: '14px'}}>EXPLORE&nbsp;INVENTORY</p>
    )
  }
}


const checkbox = {
  marginTop: '28px',
  marginRight: '28px',
  marginLeft: '0',
  padding: '0',
  minWidth: '18auto',
  minHeight: '18px',
  width: '18px',
  height: '18px',
  borderWidth: '.1875rem',
  borderColor: '#c00',
  borderRadius: '4px',
  backgroundColor: '#fff',
  color: '#c00',

  gridArea: 'lease-checkbox',
  justifySelf: 'right',
}


export default WalkerCamry
