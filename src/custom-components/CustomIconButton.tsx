/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React, { PropsWithChildren } from "react";
import { makeStyles, styled } from "@mui/styles";
import { IconButton, Tooltip } from "@mui/material";

const StyledIconButton = styled(IconButton)({
  width: "40px",
  height: "40px",
  backgroundColor: "rgba(0, 0, 0, 0.575) !important",
  marginRight: "2rem !important",
  padding: "0px !important",
});

const useStyles = makeStyles(() => ({
  toolTip: {
    "& .MuiTooltip-popper": {
      color: "red !important",
    },
    "&.MuiTooltip-arrow": {
      color: "red !important",
    },
  },
}));

type Props = {
  title: string;
  onClick?: () => void;
};

export default function CustomIconButton(props: PropsWithChildren<Props>) {
  const classes = useStyles();
  const {title, children, ...remaining} = props;
  return (
    <Tooltip arrow title={title} className={classes.toolTip}>
      <StyledIconButton {...remaining}>
        {children}
      </StyledIconButton>
    </Tooltip>
  );
}
