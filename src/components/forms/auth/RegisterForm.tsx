"use client";

import ActionForm from "@/components/common/ActionForm";
import RHFTelInput from "@/components/hook-form/text/RHFTelInput";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { routes } from "@/constants/routes";
import useServerAction from "@/hooks/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

export default function RegisterForm() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { handleSubmit } = methods;
  const { startAction, response } = useServerAction<SignInResponse>();
  const onSubmit = handleSubmit((data: FormData) =>
    startAction(
      signIn("credentials", {
        ...data,
        redirect: false,
      }),
      () => router.push(routes.HOME)
    )
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
      <Stack gap={2}>
        <RHFTelInput name="phoneNumber" label="phone number" />
        {[
          {
            label: "Name",
            name: "name",
            type: "text",
            placeholder: "Enter your name",
          },
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
        {response && !response?.ok && (
          <Typography color="error">{response?.error}</Typography>
        )}
      </Stack>
    </ActionForm>
  );
}
