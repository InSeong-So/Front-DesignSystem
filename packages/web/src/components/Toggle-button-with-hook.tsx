import React from "react";
import { Button } from "unicorn-ui";
import { useState } from "react";

export const ToggleButtonWithHook = () => {
  //this is a "useState"-hook. In react 17, that's the default way to handle
  //your component's life cycle. Tutorials which show this.setState(...) are older than that
  const [isToggled, setToggled] = useState(true);
  return (
    <Button
      onClick={() => setToggled(!isToggled)}
    ></Button>
  );
};
