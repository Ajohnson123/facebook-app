import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class TabsSheet extends React.Component {
  state = {
    value: 0,
    indColor: '#09f',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const primary = '#0099ff';
    const width = window.innerWidth;

    return (
      <div>
          <AppBar style={{backgroundColor: 'rgba(62, 62, 62, .54)'}}  position="static">
            <Tabs fullWidth={true} centered={true} indicatorColor='primary' value={value} onChange={this.handleChange}>
              <Tab label={"Lease"} />
              <Tab label={"APR"} />
              <Tab label={"Cash"} />
            </Tabs>
          </AppBar>
        {value === 0 && <TabContainer>
        <p className="paragraph paragraph-1">
          Lease a new 2018 Toyota Camry for just $309 a month. 36 Months closed end lease on Camry 2018 Model 2532. $0 Due at Lease Signing. $0 Customer Down Payment. $0 First Month’s Payment. $0 Security Deposit. $650 Acquisition Fee & $500 Toyota Financial Services Lease Subvention Cash is included in $24,621 Net Cap Cost. First month’s payment of $309 paid by dealer. Remaining 35 payments totaling $10,815 paid by lessee. Lease vehicle includes the following optional equipment: All-Weather Floor Liner Package, 50 State Emissions. MSRP $25,149 includes destination charge. Your payment may vary depending on final price. Base monthly payment of $309 does not include tax. Taxes, license, title, insurance, regionally required equipment, and other dealer charges are extra, and are not included in amounts shown. Excludes $350 disposition fee due at lease end. Lessee pays maintenance, excess wear and tear and $0.15 per mile charge for all mileage over 12,000 miles per year. Lease end purchase option $13,580. Available to qualified customers through Toyota Financial Services. Not all customers will qualify. Delivery must be taken from dealer stock between 06-05-18 and 07-09-18 and is subject to availability. Lease offer may not be combined with cash back or APR offers. Offers may vary by region. Individual dealer prices may vary. See participating dealers for details. Vehicle image is for display purposes only.**2018 EPA-estimated 28 city/39 highway/32 combined mpg for Camry LE/SE/XLE/XSE – 4-cylinder models. Actual mileage will vary. ***Toyota vehicle and components assembled using U.S. and globally sourced parts.
        </p>
          </TabContainer>}
        {value === 1 && <TabContainer>
          <p className="paragraph paragraph-1">
            0.9% APR Financing for 36 Months - $28.16 per $1,000 borrowed OR 0.9% APR Financing for 48 Months - $21.22 per $1,000 borrowed OR 1.9% APR Financing for 60 Months - $17.48 per $1,000 borrowed OR 3.49% APR Financing for 72 Months - $15.41 per $1,000 borrowed. No down payment with approved credit through Toyota Financial Services – Tier 1 Plus and 1 only. Not all customers will qualify for lowest rate. Must take retail delivery from new 2018 dealer stock between 06-05-2018 and 07-09-2018. Subject to availability. Details and qualifications apply. Offers may vary by region. Individual dealer prices and document fees may vary. See participating dealer for details. *Covers normal factory scheduled service for 2 years or 25,000 miles, whichever comes first. See Toyota dealer for details and exclusions. Valid only in the continental U.S. and Alaska. **2018 EPA-estimated 28 city/39 highway/32 combined mpg for Camry LE/SE/XLE/XSE – 4-cylinder models. Actual mileage will vary. ***Toyota vehicle and components assembled using U.S. and globally sourced parts.
          </p>
          </TabContainer>}
        {value === 2 && <TabContainer>
          <p className="paragraph paragraph-1">
            Currrently there are no offers at this time. Please contact Walker Toyota for more information regarding cash offers.
          </p>
          </TabContainer>}
      </div>
    );
  }
}


TabsSheet.propTypes = {
  classes: PropTypes.object,
};

export default TabsSheet
