import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { Typography } from "@material-ui/core";

const Logo = (props) => {
  const controls = useAnimation();
  return (
    <>
      <Typography
        component={motion.p}
        animate={controls}
        // custom={2}
        variant="h5"
        color="primary"
        // className={classes.subTitle}
      >
        Usaid Ahmed Ansari
      </Typography>
    </>
  );
};

export default Logo;
