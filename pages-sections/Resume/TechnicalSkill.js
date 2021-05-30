import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>TECHNICAL SKILL</h2>
          <h5 className={classes.description}>
                Experience in CI/CD (Continuous Integration/ Continuous Deployment) process, Strong background in Windows Server Administration & Management and Cloud Implementation all within that suite the needs of an environment under DevOps Culture
                Understanding of SDLC, Traditional, Agile, and other methodologies
                Knowledge of version control system like Git and used source code management tools GitHub and Bitbucket including command line application
                Managed Amazon Web Services like Virtual Private cloud (VPC) EC2, S3 bucket, RDS, ELB, ASG, AMI, IAM and others
                Good Working experience with bash script
                Hand-on experience with database (MySQL, SQLite)
                Good knowledge of HTML5, CSS3, C and PHP
                Excellent understanding of Active Directory, DHCP, DNS, Remote Desktop, Exchange server and File Server
                Experience in administering SaaS, such as Microsoft Azure, Dropbox and Zoom
                Worked with FortiGate Firewall to enhance organizational security
                Experience in issue tracking tool like Jira
            </h5>
        </GridItem>
      </GridContainer>
      </div>
    );
}