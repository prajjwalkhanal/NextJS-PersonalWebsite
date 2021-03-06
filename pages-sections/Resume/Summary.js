import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { FormatAlignLeft } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function AboutMe() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} >
          <h3 className={classes.title}>CAREER OBJECTIVE</h3>
          <h6 className={classes.title}>
            Solution driven AWS Certified SysOps Administrator adept at contributing to a highly collaborative 
            work environment with proven experience in Infrastructure (Cloud and On-prem), SaaS, CyberSecurity, 
            and customer satisfaction with background on web application and database. Seeking for an 
            opportunity to leverage proven ability in DevOps domain.
            </h6>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>TECHNICAL SKILL</h3>
          <h5 className={classes.description} align="left">
              <ul>
                <li className={classes.description} align="left">Experience in <b>CI/CD</b> (Continuous Integration/ Continuous Deployment) process, Strong background in Windows <b>Server Administration</b> & Management and <b>Cloud Implementation</b> all within that suit the needs of an environment under <b>DevOps</b> Culture</li>
                <li className={classes.description} align="left">Understanding of <b>SDLC, Traditional, Agile,</b> and other methodologies</li>
                <li className={classes.description} align="left">Knowledge of <b>version control systems </b> like Git and source code management tools GitHub and Bitbucket including command line application</li>
                <li className={classes.description} align="left">Managed <b>Amazon Web Services</b> like Virtual Private Cloud (VPC) EC2, S3 bucket, RDS, ELB, ASG, AMI, IAM and others</li>
                <li className={classes.description} align="left">Good Working experience with <b>bash script</b></li>
                <li className={classes.description} align="left">Hand-on experience with databases and query languages <b>(MySQL, SQLite)</b></li>
                <li className={classes.description} align="left">Good knowledge of <b>HTML5, CSS3, C and PHP</b></li>
                <li className={classes.description} align="left">Excellent understanding of <b>Active Directory, DHCP, DNS, Remote Desktop, Exchange server and File Server</b></li>
                <li className={classes.description} align="left">Experience in administering <b>SaaS</b>, such as Microsoft Azure, Dropbox and Zoom</li>
                <li className={classes.description} align="left">Worked with FortiGate Firewall to enhance <b>cybersecurity</b></li>
                <li className={classes.description} align="left">Experience in issue tracking tools like <b>Jira</b></li>
              </ul>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>EDUCATION</h3>
            <h5 className={classes.description} align="left">
            <h6 className={classes.title}>Professional Year | Performance Education, Australia
              <br/>2019
              <br/>
              <br/>Master Of Information Technolgy | Charles Sturt University, Australia
              <br/>2017-2019
            </h6>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h3 className={classes.title}>EXPERIENCE</h3>
            <h5 className={classes.description} align="left">
            <h6 className={classes.title}>INFRASTRUCTURE SYSTEM ENGINEER | RUGBY AUSTRALIA
                <br/>OCT 2019 - CURRENT
                <br/><br/>Responsibilities
              </h6>
                <ul>
                  <li>Researching, analyzing, and evaluating system program needs</li>
                  <li>Establishing complex systems, defining their configuration, and executing their installation as per the network standards</li>
                  <li>Preparing reports regarding the performance of a system</li>
                  <li>Maintaining the network system by upgrading the hardware and software timely</li>
                  <li>Administrating the access of third-party applications to avoid any damage to the company???s data and information</li>
                  <li>Finding faults in the system and repairing them</li>
                  <li>Providing System and Network support to the users and clients through phone or email</li>
                  <li>Monitoring the system concerning the traffic, activity status, usage, and capacity to ensure its optimal working</li>
                  <li>Coordinating with the staff and the departments of the organisation and establishing effective communication with the team to ensure smooth working of the network systems</li> 
                </ul>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description} align="left">
            <h6 className={classes.title}>IT SUPPORT ENGINEER | Medical Staff Pty Ltd
                <br/>APRIL 2018 ??? OCT 2019
                <br/><br/>Responsibilities
            </h6>
                <h5>??? Install and configure computer hardware, software, system, network, printer and scanner</h5>
                <h5>??? Maintain and monitor computer system, servers, and network</h5>
                <h5>??? Provide technical support across the company (on-site and remote)</h5>
                <h5>??? Active Directory, File server, and Exchange server monitoring and maintenance</h5>
                <h5>??? New user setup, assign system right and provide an orientation to IT infrastructure</h5>
                <h5>??? Website development, host, and maintenance</h5>
                <h5>??? Broad knowledge of SMS gateway and mass SMS</h5>
                <h5>??? Social media, digital marketing, and data analysis</h5>
                <h5>??? System design liaise with extern support to develop and implement the system</h5>
                <h5>??? Windows Upgrade, Venus Upgrade and MYOB upgrade</h5>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description} align="left">
              <h6 className={classes.title}>Information Management Officer | ACTED Nepal
                <br/>MARCH 2016 ??? DECEMBER 2016
                <br/><br/>Responsibilities
              </h6>
              <ul>
                <li>Support the District Coordinator to provide local government and partner's timely, consistent, and compatible data and information on I/NGO activities throughout the district</li>
                <li>Act as the DLSA District-level focal point in cross-sector and cross-coordination forums for information management and analysis</li>
                <li>Work in coordination with relevant sectors or forums in developing common district-level information management architecture for data collection, collation, dissemination, and analysis, including archiving, and application of common tools, standards, and indicators</li>               
                <li>Act as the DLSA IM focal-point for linkages with all district-level stakeholders, particularly local actors, for enhanced sectoral risk mapping and gap identification</li>
                <li>Provide district-level sector-specific maps and graphics regularly that aid the District Coordinator, the VSO Coordinator, and other district-level actors, in forwarding planning and analysis</li>                
                <li>Support National level IM activities as required, particularly with analysis of information</li>
                <li>Liaise with relevant government counterparts and participate in IM Network meetings as required</li>
              </ul>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
            <h5 className={classes.description} align="left">
              <h6 className={classes.title}>Software Engineer | ICT IN AGRICULTURE, Kathmandu
                <br/>FEBRUARY 2014 ??? FEBRUARY 2016
                <br/><br/>Responsibilities
              </h6>
              <ul>
                <li>Designing software as per project requirements for optimal operation efficiency</li>
                <li>Using PASCAL, PHP and MYSQL to develop SQL Master scripts to support the ETL process</li>              
                <li>Developing and managing projects using version control system and project management software</li>                           
                <li>Developing web and mobile applications using Java and PHP</li>
                <li>Coordinating with the development team to increase the flexibility and usability of the design</li>              
                <li>Conducting software system testing and validation procedures, programming and documentation based on user stories formulated by Senior Business Analysts</li>
              </ul>
            </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.title}>KEY ATTRIBUTES</h3>
          <h5 className={classes.description} align="left">
            <ul>
                <li>Team-player with good coordination skills</li>
                <li>Highly motivated results-driven with a strong work ethic</li>
                <li>Effective at multitasking and able to take direction</li>
                <li>Possess strong analytical and problem-solving skills, with the ability to make well thought out decision</li>
                <li>Honest, reliable, and punctual</li>
                <li>Flexible, adaptable, and keen to take initiatives</li>
            </ul>
          </h5>
        </GridItem>
      </GridContainer>
      </div>
    );
}