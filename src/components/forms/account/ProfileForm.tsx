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

const FormSchema = z.object({
  firstname: z.string().min(1, {
    message: "firstname is empty",
  }),
  lastname: z.string().min(1, {
    message: "lastname is empty",
  }),
  address: z.string().min(1, {
    message: "address is empty",
  }),
  phone: z.string().min(1, {
    message: "phone is empty",
  }),
});

type FormData = z.infer<typeof FormSchema>;

type ProfileFormProps = {
  defaultValues: FormData;
};
const ProfileForm = ({ defaultValues }: ProfileFormProps) => {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    (data: FormData) =>
      new Promise((resolve) => {
        const params = new URLSearchParams();
        // params.set("email", data.email);
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
            alignSelf: "flex-end",
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
