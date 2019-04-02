import * as React from "react";
import SimpleMenu from "../SimpleMenu";
import MenuItem from "../../MenuItem/MenuItem";
import Button from "../../../Button/Button";

export default (
  <SimpleMenu
    uxpId="0"
    handle={<Button raised uxpId="0.1">Open Simple Menu</Button>}
  >
    <MenuItem uxpId="1">Cookies</MenuItem>
    <MenuItem uxpId="2">Pizza</MenuItem>
    <MenuItem uxpId="3">Icecream</MenuItem>
  </SimpleMenu>
);
