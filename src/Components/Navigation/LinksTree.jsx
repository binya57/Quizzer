import React, { useState, forwardRef, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { LINKS } from "../../Utils/dec";

// mui components:
import { default as MuiContainer } from "@mui/material/Container";
import { default as MuiList } from "@mui/material/List";
import { default as MuiListItemButton } from "@mui/material/ListItemButton";
import { default as MuiListItemText } from "@mui/material/ListItemText";
import { default as MuiListItem } from "@mui/material/ListItem";
import { default as MuiDivider } from "@mui/material/Divider";
import { default as MuiCollapse } from "@mui/material/Collapse";
import {
  MuiListItemIcon,
  MuiPersonIcon,
  MuiAddIcon,
  MuiQuizIcon,
  MuiPeopleAltIcon,
  MuiFormatListNumberedIcon,
  MuiExpandLess,
  MuiExpandMore,
  MuiPersonAddIcon,
} from "../Icons";

const LinksTree = ({ closeDrawer }) => {
  //
  const ListItemLink = ({ icon, primary, to }) => {
    const renderLink = useMemo(
      () =>
        forwardRef((itemProps, ref) => (
          <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />
        )),
      [to]
    );

    return (
      <li>
        <MuiContainer>
          <MuiListItem button component={renderLink} onClick={closeDrawer}>
            {icon ? <MuiListItemIcon>{icon}</MuiListItemIcon> : null}
            <MuiListItemText primary={primary} />
          </MuiListItem>
        </MuiContainer>
      </li>
    );
  };

  const ExpandableListItem = ({ icon, text, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <MuiList>
        <MuiListItemButton onClick={() => setIsOpen(!isOpen)}>
          <MuiListItemIcon>{icon}</MuiListItemIcon>
          <MuiListItemText primary={text} />
          {isOpen ? <MuiExpandLess /> : <MuiExpandMore />}
        </MuiListItemButton>
        <MuiCollapse in={isOpen} timeout="auto" unmountOnExit>
          {children}
        </MuiCollapse>
      </MuiList>
    );
  };

  return (
    <MuiList
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
    >
      <ExpandableListItem
        icon={<MuiPersonIcon />}
        text={LINKS.CANDIDATES.TEXT.PRIMARY}
      >
        <ListItemLink
          primary={LINKS.CANDIDATES.TEXT.ALL}
          icon={<MuiPeopleAltIcon />}
          to={LINKS.CANDIDATES.PATH}
        />
        <ListItemLink
          primary={`${LINKS.NEW.TEXT} ${LINKS.CANDIDATES.TEXT.SINGLE}`}
          icon={<MuiPersonAddIcon />}
          to={`${LINKS.CANDIDATES.PATH}/${LINKS.NEW.PATH}`}
        />
      </ExpandableListItem>
      <MuiDivider />

      <ExpandableListItem
        icon={<MuiQuizIcon />}
        text={`${LINKS.EXAMS.TEXT.PRIMARY}`}
      >
        <ListItemLink
          primary={LINKS.EXAMS.TEXT.ALL}
          icon={<MuiFormatListNumberedIcon />}
          to={LINKS.EXAMS.PATH}
        />
        <ListItemLink
          primary={`${LINKS.NEW.TEXT} ${LINKS.EXAMS.TEXT.SINGLE}`}
          icon={<MuiAddIcon />}
          to={`${LINKS.EXAMS.PATH}/${LINKS.NEW.PATH}`}
        />
      </ExpandableListItem>
      <MuiDivider />
    </MuiList>
  );
};

export default LinksTree;
