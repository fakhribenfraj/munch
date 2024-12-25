"use client";
import updatePassword from "@/actions/profile/updatePassword";
import ActionForm from "@/components/common/ActionForm";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormSection from "../FormSection";
import useServerAction from "@/hooks/common/useServerAction";
import { useTranslations } from "next-intl";

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
  const t = useTranslations();
  const methods = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });
  const { handleSubmit } = methods;
  const { startAction, response, isPending } = useServerAction<{
    message: string;
    errors: string;
  }>();

  const onSubmit = handleSubmit((data: FormData) =>
    startAction(
      updatePassword(data.oldPassword, data.password, data.confirmPassword)
    )
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
      <Stack gap={4}>
        {[
          {
            title: t("CHANGE_PASSWORD"),
            children: (
              <>
                {[
                  {
                    label: t("OLD_PASSWORD"),
                    name: "oldPassword",
                    type: "password",
                    placeholder: "Enter your name",
                  },
                  {
                    label: t("PASSWORD"),
                    name: "password",
                    type: "password",
                    placeholder: "Enter your name",
                  },
                  {
                    label: t("CONFIRM_PASSWORD"),
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
            textTransform: "capitalize",
            alignSelf: "flex-end",
            mt: 2,
          }}
        >
          {t("SAVE")}
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
