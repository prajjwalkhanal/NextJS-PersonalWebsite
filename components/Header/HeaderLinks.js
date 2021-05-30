/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <a href="/landingpage">
            <Button
            color="transparent"
            target="_blank"
            className={classes.navLink}
            >
            <Icon className={classes.icons}>unarchive</Icon> Home
            </Button>
          </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href="/resume">
          <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
          >
          <CloudDownload className={classes.icons} /> Resume
          </Button>
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="linkedin-tooltip"
          title="Connect on LinkedIn"
          placement={"top"}
          classes={{ tooltip: classes.tooltip }}
        >
          <a href="https://www.linkedin.com/in/prajjwalkhanal/">
            <Button
            color="transparent"
            href="https://www.linkedin.com/in/prajjwalkhanal/"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-linkedin"} />
          </Button>
          </a>
        </Tooltip>
      </ListItem>
    </List>
  );
}
