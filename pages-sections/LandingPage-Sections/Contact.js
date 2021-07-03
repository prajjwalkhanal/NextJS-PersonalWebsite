import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from 'components/CustomButtons/Button.js';

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

import { GridList, Input, InputLabel } from "@material-ui/core";
import { string } from "prop-types";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Warning from "@material-ui/icons/Warning";
// core components
import SnackbarContent from "components/Snackbar/SnackbarContent.js";



const useStyles = makeStyles(styles);

export default function Contact() {
  const classes = useStyles();
  
  async function handleOnSubmit(e) {
    e.preventDefault();
    
    document.getElementById("Notification").style.display="inline";

    const formData = {};
    console.log(e.currentTarget.Name.value);
    console.log(e.currentTarget.Email.value);
    console.log(e.currentTarget.Phone.value);
    console.log(e.currentTarget.Message.value);
    
    formData["Name"] = e.currentTarget.Name.value;
    formData["Email"]= e.currentTarget.Email.value;
    formData["Phone"]= e.currentTarget.Phone.value;
    formData["Message"]= e.currentTarget.Message.value;

   

    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    window.location.reload(5);
  }


  return (
    <div className={classes.section}>
      <GridContainer justify="center">
          <div>
          <GridItem >
          <h2 className={classes.title}>Get in touch</h2>
          </GridItem>
          </div>
      </GridContainer>
      <GridContainer justify="center">
        <div>
        <GridItem >
          <h5 className={classes.description}>
            Feel free to reach out to me for consulting, contract or other opportunities<br/>
          </h5>
          </GridItem>
        </div>
      </GridContainer>
      <form onSubmit={handleOnSubmit}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4} lg={3}>
        <CustomInput
            labelText="Name"
            id="Name"
            name="Name"
            formControlProps={{
            fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
        <CustomInput
            labelText="Email"
            id="Email"
            name="Email"
            formControlProps={{
            fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
        <CustomInput
            labelText="Phone"
            id="Phone"
            name="Phone"
            formControlProps={{
            fullWidth: true
            }}
        />
        </GridItem>
      </GridContainer>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} lg={8}>
          <CustomInput
            labelText="Message"
            id="Message"
            name="Message"
            formControlProps={{
            fullWidth: true
            }}
          />
        </GridItem>
      </GridContainer>

      <GridContainer justify="center">
         <Button type="submit" color="success">Submit</Button>
      </GridContainer>
      <div name="Notification" id= "Notification" style={{display: 'none'}}>
      <SnackbarContent
        message={
          <span>
            <b>SUCCESS ALERT:</b> Your email has been sucessfully delivered
          </span>
        }
        close
        color="success"
        icon={Check}
      />
      </div>

      </form>
      <br/><br/> 
      <GridContainer justify="center">
        <Button href="https://twitter.com/khanal_prajjwal" justIcon link className={classes.margin5} >
          <i className={"fab fa-twitter"} />
        </Button>
        <Button href="https://www.instagram.com/tech_wooer" justIcon link className={classes.margin5} >
          <i className={"fab fa-instagram"} />
        </Button>
        <Button href="https://www.linkedin.com/in/prajjwalkhanal/" justIcon link className={classes.margin5} >
          <i className={"fab fa-linkedin"} />
        </Button>
      </GridContainer>

    </div>
    );
}