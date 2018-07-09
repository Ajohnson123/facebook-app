import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const options = [
  'L',
  'LE',
  'SE',
  'Hybrid LE',
  'XLE',
  'XSE',
  'Hybrid SE',
  'Hybrid XLE',
  'XLE V6',
  'XSE V6',
];

class ConfirmationDialogRaw extends React.Component {
  radioGroup = null;

  constructor(props) {
    super(props);

    this.state.value = this.props.value;
  }

  state = {};

  // TODO
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  handleEntering = () => {
    this.radioGroup.focus();
  };

  handleCancel = () => {
    this.props.onClose(this.props.value);
  };

  handleOk = () => {
    this.props.onClose(this.state.value);
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value, ...other } = this.props;

    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        onEntering={this.handleEntering}
        aria-labelledby="confirmation-dialog-title"
        {...other}
      >
        <DialogTitle id="confirmation-dialog-title">Trim Level Options</DialogTitle>
        <DialogContent>
          <RadioGroup
            ref={node => {
              this.radioGroup = node;
            }}
            aria-label="ringtone"
            name="ringtone"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {options.map(option => (
              <FormControlLabel value={option} key={option} control={<Radio style={{color: '#c00'}}/>} label={option} />
            ))}
          </RadioGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCancel} style={{opacity: .54}} color="#000">
            Cancel
          </Button>
          <Button onClick={this.handleOk} style={{color:"#09f"}}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func,
  value: PropTypes.string,
};

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'transparent',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
});

class Dropdown extends React.Component {
  button = null;

  state = {
    open: false,
    value: 'L',
    textColor: '#09f',
  };

  handleClickListItem = () => {
    this.setState({ open: true });
  };

  handleClose = value => {
    this.setState({ value, open: false });
  };

  print() {
    console.log(this.state.newValue)
  }
  componentWillUnmount() {
    if (this.state.value === 'L') {
      this.props.changeToL()
    } else if (this.state.value === 'LE') {
      this.props.changeToLE()
    }  else if (this.state.value === 'SE') {
      this.props.changeToSE()
    }  else if (this.state.value === 'Hybrid LE') {
      this.props.changeToHLE()
    }  else if (this.state.value === 'XLE') {
      this.props.changeToXLE()
    }  else if (this.state.value === 'XSE') {
      this.props.changeToXSE()
    }  else if (this.state.value === 'Hybrid SE') {
      this.props.changeToHSE()
    }  else if (this.state.value === 'Hybrid XLE') {
      this.props.changeToHXLE()
    }  else if (this.state.value === 'XLE V6') {
      this.props.changeToXLEV6()
    }  else if (this.state.value === 'XSE V6') {
      this.props.changeToXSEV6()
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            divider
            aria-haspopup="true"
            aria-controls="ringtone-menu"
            aria-label="Trim level options"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              classes={{
                textColor: classes.textColor,
              }}
              primary= {<WhiteText statement="Select Trim Level" />}
              secondary= {<WhiteText statement={this.state.value} />}
              />
          </ListItem>
          <ConfirmationDialogRaw
            classes={{
              paper: classes.paper,
            }}
            open={this.state.open}
            onClose={this.handleClose}
            value={this.state.value}
          />
        </List>
      </div>
    );
  }
}
class WhiteText extends React.Component {
  render() {
    return(
      <p style={{color: '#fff', margin: '0px'}}>{this.props.statement}</p>
    )
  }
}

Dropdown.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dropdown);
