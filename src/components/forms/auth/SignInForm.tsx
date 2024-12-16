"use client";

import ActionForm from "@/components/common/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { routes } from "@/constants/routes";
import useServerAction from "@/hooks/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link, Stack, Typography } from "@mui/material";
import { signIn, SignInResponse } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "email not correct",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function SignInForm() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
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
        ].map((input) => (
          <RHFTextField {...input} key={input.name} />
        ))}
        <Link
          href={routes.FORGOT_PASSWORD}
          sx={{
            textAlign: "right",
            alignSelf: "flex-end",
          }}
        >
          forgot password
        </Link>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            alignSelf: "center",
            borderRadius: 4,
            mt: 4,
            fontSize: "1rem",
          }}
        >
          Login
        </Button>
        {response && !response?.ok && (
          <Typography color="error">{response?.error}</Typography>
        )}
      </Stack>
    </ActionForm>
  );
}
