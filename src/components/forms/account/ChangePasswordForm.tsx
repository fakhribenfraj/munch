"use client";
import ActionForm from "@/components/common/compound/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import useRHFActionForm from "@/hooks/useRHFActionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import RHFTelInput from "@/components/hook-form/text/RHFTelInput";
import FormSection from "../FormSection";
import updatePassword from "@/actions/profile/updatePassword";

const FormSchema = z
  .object({
    oldPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

type FormData = z.infer<typeof FormSchema>;

type ChangePasswordFormProps = {};
const ChangePasswordForm = ({}: ChangePasswordFormProps) => {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
  });
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    (data: FormData) =>
      updatePassword(data.oldPassword, data.password, data.confirmPassword)
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit} state={response}>
      <Stack gap={4}>
        {[
          {
            title: "Change password",
            children: (
              <>
                {[
                  {
                    label: "old Password",
                    name: "oldPassword",
                    type: "password",
                    placeholder: "Enter your name",
                  },
                  {
                    label: "password",
                    name: "password",
                    type: "password",
                    placeholder: "Enter your name",
                  },
                  {
                    label: "confirm Password",
                    name: "confirmPassword",
                    type: "password",
                    placeholder: "Enter your name",
                  },
                ].map((input) => (
                  <RHFTextField {...input} key={input.name} />
                ))}
              </>
            ),
          },
        ].map((section) => (
          <FormSection key={section.title} {...section} />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isPending}
          sx={{
            alignSelf: "flex-end",
            mt: 2,
          }}
        >
          Save
        </Button>
        {response && (
          <Typography color={response.errors ? "error" : "success"}>
            {response?.message}
          </Typography>
        )}
      </Stack>
    </ActionForm>
  );
};

export default ChangePasswordForm;
