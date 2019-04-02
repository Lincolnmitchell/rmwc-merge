import * as React from "react";
import SimpleMenuSurface from "../SimpleMenuSurface";
import Button from "../../../Button/Button";

export default (
  <SimpleMenuSurface
    uxpId="0"
    handle={<Button raised uxpId="0.1">Open Simple Menu Surface</Button>}
  >
    <div uxpId="1" style={{padding: '1rem', width: '8rem'}}>Make the content whatever you want.</div>
  </SimpleMenuSurface>
);
