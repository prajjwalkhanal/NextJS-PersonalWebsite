import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import atlassian from "assets/img/Skills/Atlassian.png";
import aws from "assets/img/Skills/aws.png";
import docker from "assets/img/Skills/docker.png";
import forticlient from "assets/img/Skills/forticlient.png";
import azure from "assets/img/Skills/Microsoft_Azure.png";
import mysql from "assets/img/Skills/mysql.png";
import php from "assets/img/Skills/php.png";
import saas from "assets/img/Skills/Saas.png";
import vmware from "assets/img/Skills/vmware.png";
import windowsserver from "assets/img/Skills/WindowsServer.png";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const useStyles = makeStyles(styles);

export default function MySkills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.space50} />
        <div id="images">
          <div className={classes.title}>
            <h2>Some of my skills</h2>
          </div>
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
    </div>
  );
}
