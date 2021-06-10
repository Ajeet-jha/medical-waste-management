import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function UpperFooter() {
  const classes = useStyles();

  return (
    <section className={`${classes.root} upper-footer`}>
      <Grid container spacing={0}>
        <Grid item xs={6}>
            <Typography variant="h3" component="h3">
                STAY UP TO DATE
            </Typography>
            <div className="upper-footer__paragraph">
                <p> Join our mailing list to get the latest news and offers form </p>
                <p>MedPro Disposal and our partners! </p>
            </div>
        </Grid>
        <Grid item xs={6}>
            <form>
              <input placeholder="Email Address"/>
              <button>SUBSCRIBE</button>
            </form>
        </Grid>
      </Grid>
    </section>
  );
}

export default UpperFooter;
