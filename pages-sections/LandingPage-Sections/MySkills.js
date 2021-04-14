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

export default function MySkills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
      <div className={classes.title}>
            <h2 className={classes.title}>Some of my skills</h2>
      </div>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <br />
          <GridContainer>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={atlassian}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={aws}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={azure}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={windowsserver}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
          
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={mysql}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={docker}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            
            
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={forticlient}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={vmware}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={saas}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>            
            <GridItem xs={5} sm={3} className={classes.marginRight}>
              <img
                src={php}
                alt="..."
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
            
            </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
      </GridContainer>
    </div>
  );
}
