// eslint-disable @typescript-eslint/ban-ts-comment
// @ts-nocheck

import * as React from "react";
import {
  useForm,
  UseFormReturn,
  SubmitHandler,
  UseFormProps,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

type FormProps = {
  className?: string;
  onSubmit: SubmitHandler<any>;
  children: (methods: UseFormReturn<any>) => React.ReactNode;
  options?: UseFormProps<any>;
  id?: string;
  schema?: any;
  defaultValues?: any;
};

export const Form = ({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
  defaultValues,
}: FormProps) => {
  const methods = useForm({
    ...options,
    resolver: schema && yupResolver(schema),
    defaultValues: defaultValues,
  });
  return (
    <form
      className={className}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
