import React from "react";
import { makeStyles } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar-us.jpeg";

const Avatar = () => {
  const classes = useStyles();
  return (
      <img src={AvatarImg} alt="Usaid Ahmed Ansari" className={classes.avatarImg} />
  );
};

const useStyles = makeStyles((theme) => ({
  avatarImg: {
    borderRadius:'50%',
    width:"300px",
    height:"300px",
    objectFit:'cover',
    objectPosition: "0 -1px",
    boxShadow:theme.shadows[10]
  },
}));

export default Avatar;
