// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import {
  Typography,
  Box,
  TextField,
  Select,
  SelectChangeEvent,
  MenuItem,
  FormHelperText,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputSelect = ({
  name,
  control,
  label,
  options,
}: FormInputProps) => {
  // const [selected, setSelected] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setSelected(event.target.value as string);
  // };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Stack direction="column">
          <Typography variant="label">{label}</Typography>
          <Select
            labelId="select-label"
            id="select"
            value={value}
            // label="Age"
            // onChange={handleChange}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            error={!!error}
          >
            {options.map((item, key) => (
              <MenuItem value={item} key={key}>
                {item}
              </MenuItem>
            ))}
            {/* <MenuItem value="male">Masculino</MenuItem>
            <MenuItem value="female">Feminino</MenuItem>
            <MenuItem value="other">Outro</MenuItem> */}
          </Select>
          <FormHelperText>{error ? error.message : null}</FormHelperText>
        </Stack>
      )}
    />
  );
};
