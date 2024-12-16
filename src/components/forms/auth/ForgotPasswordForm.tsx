"use client";

import { forgotPassword } from "@/actions/authorization/forgotPassword";
import ActionForm from "@/components/common/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { routes } from "@/constants/routes";
import useServerAction from "@/hooks/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  email: z.string().email({
    message: "email not correct",
  }),
});

type FormData = z.infer<typeof FormSchema>;

export default function ForgotPasswordForm() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });
  const { handleSubmit, getValues } = methods;
  const { startAction, response } = useServerAction<{
    message: string;
  }>();

  const onSubmit = handleSubmit((data: FormData) =>
    startAction(forgotPassword(data.email), () => {
      const params = new URLSearchParams();
      params.set("email", getValues("email"));
      router.push(`${routes.FORGOT_PASSWORD}/verify-code?${params.toString()}`);
    })
  );
  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
      <Stack spacing={2}>
        {[
          {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "enter your email",
          },
        ].map((input) => (
          <RHFTextField {...input} key={input.name} />
        ))}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            alignSelf: "center",
            borderRadius: 4,
            mt: 2,
          }}
        >
          reset password
        </Button>
        <Typography>{response?.message}</Typography>
      </Stack>
    </ActionForm>
  );
}
