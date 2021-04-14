import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import atlassian from "assets/img/skills/Atlassian.png";
import aws from "assets/img/skills/aws.png";
import docker from "assets/img/skills/docker.png";
import forticlient from "assets/img/skills/forticlient.png";
import azure from "assets/img/skills/Microsoft_Azure.png";
import mysql from "assets/img/skills/mysql.png";
import php from "assets/img/skills/php.png";
import saas from "assets/img/skills/Saas.png";
import vmware from "assets/img/skills/vmware.png";
import windowsserver from "assets/img/skills/WindowsServer.png";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Say Hello</h2>
      <div>
            Feel free to reach out to me at anytime.<br/>
            I am available for consulting, contract or other opportunities on short to medium range notice.
      </div>
      <div>
      <GridContainer>
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
            <GridItem xs={1} sm={1} md={3} lg={3}>
              <CustomInput
                labelText="Phone"
                id="Phone"
                formControlProps={{
                  fullWidth: true
                }}
              />
            </GridItem>
        </GridContainer>
      <GridContainer>
            <GridItem xs={1} xs={1} sm={1} md={1} lg={1}>
                <CustomInput
                    id="regular"
                    inputProps={{
                    placeholder: "Regular"
                    }}
                        formControlProps={{
                        fullWidth: true
                    }}
                />

            </GridItem>
        </GridContainer>
      </div>
    </div>
    );
}