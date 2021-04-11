import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About Prajjwal</h2>
          <h5 className={classes.description}>
            Prajjwal Khanal is a Nepalese born engineer residing in Australia since 2017. 
            He is an Infrastructure System Enginner for Rugby Australia working closely with department heads, development teams, executives and IT service desk to produce world class service.
            He has over 3 years of experience in system administration (Windows Server and Enterprise Security), cloud application(AWS, Azure and SaaS) and background in web application and database.
            <br/><br/>        
            He graduated Master's degree in Information Technology specializing in Cloud Computing from Charles Sturt University with academic achivement award in 2019.
            He has devoted his entire life in field of computer science and information technology. His current field of interent are Devops and cloud security.
          </h5>
        </GridItem>
      </GridContainer>
      </div>
    );
}