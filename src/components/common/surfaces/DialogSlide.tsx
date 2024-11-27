import { Dialog, DialogProps, Slide } from "@mui/material";
import { TransitionHandlerProps } from "@mui/material/transitions";
import React from "react";
const Transition = React.forwardRef(function Transition(
  props: TransitionHandlerProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const DialogSlide = ({ ...props }: DialogProps) => {
  return (
    <Dialog
      fullWidth
      maxWidth="md"
    //   disableScrollLock
      disableRestoreFocus
      TransitionComponent={Transition}
      {...props}
    />
  );
};

export default DialogSlide;
