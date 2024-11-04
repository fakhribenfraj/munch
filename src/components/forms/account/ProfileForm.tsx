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

const FormSchema = z
  .object({
    name: z.string().min(1, {
      message: "name is empty",
    }),
    email: z.string().email({
      message: "email not correct",
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

const ProfileForm = () => {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    (data: FormData) =>
      new Promise((resolve) => {
        const params = new URLSearchParams();
        params.set("email", data.email);
        // router.push(
        //   `${routes.FORGOT_PASSWORD}/verify-code?${params.toString()}`
        // );
      })
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit} state={response}>
      <Stack gap={4}>
        {[
          {
            title: "Basic Info",
            children: (
              <>
                {[
                  {
                    label: "First Name",
                    name: "firstname",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                  {
                    label: "Last Name",
                    name: "lastname",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                ].map((input) => (
                  <RHFTextField {...input} key={input.name} />
                ))}
                <DatePicker label="Birth date" />
              </>
            ),
          },
          {
            title: "Contact",
            children: (
              <>
                <RHFTelInput name="phone" label="Phone" />
                <RHFTextField name="address" label="Address" />
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
          sx={{
            alignSelf: "flex-start",
            mt: 2,
          }}
        >
          Save
        </Button>
      </Stack>
    </ActionForm>
  );
};

export default ProfileForm;
