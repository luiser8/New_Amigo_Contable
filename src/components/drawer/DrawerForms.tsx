import React, { Fragment, useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

type Anchor = "top" | "left" | "bottom" | "right";
type Props = {
    children: any,
    open: boolean,
    setOpen: Function
}
const DrawerForms = (props: Props) => {
  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      props.setOpen(open);
    };

    useEffect(() => {
      if(props.open)
        toggleDrawer(props.open);
    }, []);

  return (
    <Fragment>
      {/* <Button onClick={toggleDrawer("right", props.open)}>{"right"}</Button> */}
      <Drawer
        variant={"temporary"}
        color={"white"}
        anchor={"right"}
        open={props.open}
        onClose={toggleDrawer(false)}
        PaperProps={{
            sx: {
              backgroundColor: "#fff",
              width: "40%",
              padding: "10px"
            }
          }}
      >
        {props.children}
      </Drawer>
    </Fragment>
  );
};

export default DrawerForms;
