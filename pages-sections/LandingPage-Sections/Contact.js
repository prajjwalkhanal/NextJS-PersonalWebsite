import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from 'components/CustomButtons/Button.js';

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";
import { GridList } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function Contact() {
  const classes = useStyles();
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
      <GridContainer justify="center">
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Name"
            id="Name"
            formControlProps={{
            fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
          <CustomInput
            labelText="Email"
            id="Email"
            formControlProps={{
            fullWidth: true
            }}
          />
        </GridItem>
        <GridItem xs={12} sm={4} md={4} lg={3}>
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
      <GridItem xs={12} sm={12} md={8} lg={8}>
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