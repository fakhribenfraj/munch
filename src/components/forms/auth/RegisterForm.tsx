"use client";

import { registerUser } from "@/actions/authorization/register";
import ActionForm from "@/components/common/compound/ActionForm";
import RHFTelInput from "@/components/hook-form/text/RHFTelInput";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import useRHFActionForm from "@/hooks/useRHFActionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "email not correct",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function RegisterForm() {
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    registerUser
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit} state={response}>
      <Stack gap={2}>
        <RHFTelInput name="phoneNumber" label="phone number" />
        {[
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "enter your email",
          },
          {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "enter your password",
          },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
            placeholder: "confirm your password",
          },
        ].map((input) => (
          <RHFTextField {...input} key={input.name} />
        ))}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{
            alignSelf: "center",
            borderRadius: 4,
            mt: 4,
          }}
        >
          Sign up
        </Button>
      </Stack>
    </ActionForm>
  );
}
