"use client";

import ActionForm from "@/components/common/compound/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { routes } from "@/constants/routes";
import useRHFActionForm from "@/hooks/useRHFActionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Link, Stack, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
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
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    (data: FormData) =>
      signIn("credentials", {
        ...data,
        redirect: false,
      })
  );

  useEffect(() => {
    if (response?.ok) {
      router.push(routes.HOME);
    }
  }, [response, router]);
  return (
    <ActionForm methods={methods} onSubmit={onSubmit} state={response}>
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
