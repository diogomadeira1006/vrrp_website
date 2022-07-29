// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
    marginBottom: 50,
  },
  card: {
    minHeight: 220,
  },
});

export default function ApplicationTypeCard({
  title,
  description,
  id,
  applicationType,
  setApplicationType,
  disabled,
  price,
  setValue,
  paymentType,
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      style={{
        backgroundColor: id === applicationType ? "#474056" : "#FFF",
      }}
    >
      <CardActionArea
        component="a"
        onClick={() => {
          setApplicationType(id);
          setValue("applicationType", paymentType);
        }}
        className={classes.card}
        style={{
          textAlign: "center",
        }}
        disabled={disabled === "open" ? false : true}
      >
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            style={{
              color: id === applicationType ? "#FFF" : "#000",
              opacity: disabled === "open" ? 1 : 0.3,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{
              color: id === applicationType ? "#FFF" : "#000",
              opacity: disabled === "open" ? 1 : 0.3,
              minHeight: 70,
            }}
          >
            {description}
          </Typography>

          <Typography
            variant="h2"
            style={{
              color: id === applicationType ? "#FFF" : "#000",
              opacity: disabled === "open" ? 1 : 0.3,
            }}
            sx={{ mb: 3 }}
          >
            {price}€
          </Typography>

          <Chip
            label={disabled === "open" ? "Aberta" : "Fechada"}
            color={disabled === "open" ? "success" : "error"}
            variant="outlined"
          />
          {/* <Button
            size="small"
            variant="contained"
            color="primary"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={(event) => {
              event.stopPropagation();
              event.preventDefault();
              console.log("Button clicked");
            }}
          >
            Learn More
          </Button> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
