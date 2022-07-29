// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";
import { TextField, Typography, Box } from "@mui/material";

import MomentUtils from "@date-io/moment";
import "moment/locale/pt";
import { useState } from "react";

export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  const [open, setOpen] = useState(false);

  return (
    <LocalizationProvider
      dateAdapter={AdapterMoment}
      adapterLocale="pt"
      // utils={MomentUtils}
    >
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <Box>
            <Typography variant="label">{label}</Typography>
            <DatePicker
              open={open}
              onOpen={() => setOpen(true)}
              onClose={() => setOpen(false)}
              // label={label}
              inputFormat="DD-MM-yyyy"
              value={value}
              onChange={onChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  onClick={(e) => setOpen(true)}
                  inputProps={{
                    ...params.inputProps,
                    // placeholder: "dd-mm-yyyy",
                    readOnly: true,
                  }}
                  helperText={error ? error.message : null}
                  size="small"
                  error={!!error}
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
};
