// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { Typography, Box, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({
  name,
  control,
  label,
  multiline,
  rows,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box>
          <Typography variant="label">{label}</Typography>
          <TextField
            helperText={error ? error.message : null}
            size="small"
            error={!!error}
            onChange={onChange}
            value={value}
            variant="outlined"
            // placeholder=""
            fullWidth
            multiline={multiline || false}
            rows={rows || 0}
          />
        </Box>
      )}
    />
  );
};
