import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from 'components/CustomButtons/Button.js';

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Contact() {
  const classes = useStyles();
  return (
    
    <div className={classes.section}>
      <GridContainer justify="center">
        <div id="inputs">
          <GridItem xs={12} sm={12} md={12} lg={12}>
          <h2 className={classes.title}>Say Hello</h2>
          <h5 className={classes.description}>
            Feel free to reach out to me at anytime.
            <br/>
            I am available for consulting, contract or other opportunities on short to medium range notice.       
            </h5>
          </GridItem>
          <GridContainer justify="center">
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                labelText="Name"
                id="Name"
                formControlProps={{
                    fullWidth: true
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                labelText="Email"
                id="Email"
                formControlProps={{
                    fullWidth: true
                }}
              />
              </GridItem>
              <GridItem xs={12} sm={4} md={4} lg={4}>
              <CustomInput
                labelText="Phone"
                id="Phone"
                formControlProps={{
                    fullWidth: true
                }}
              />
            </GridItem>
            </GridContainer>
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12} lg={12}>
              <CustomInput
                labelText="Message"
                id="Message"
                formControlProps={{
                    fullWidth: true
                }}
              />
            </GridItem>
            </GridContainer>
            <GridContainer justify="center">
            <Button type="button" color="success">Submit</Button>
            </GridContainer>
        </div>
      </GridContainer>
    </div>
    );
}