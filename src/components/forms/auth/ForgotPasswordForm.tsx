"use client";

import ActionForm from "@/components/common/compound/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import routes from "@/constants/routes";
import useRHFActionForm from "@/hooks/useRHFActionForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
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
  const { onSubmit, response, isPending } = useRHFActionForm(
    methods,
    (data: FormData) =>
      new Promise((resolve) => {
        const params = new URLSearchParams();
        params.set("email", data.email);
        router.push(
          `${routes.FORGOT_PASSWORD}/verify-code?${params.toString()}`
        );
      })
  );

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
      </Stack>
    </ActionForm>
  );
}
