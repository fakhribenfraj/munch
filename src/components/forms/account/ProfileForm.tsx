"use client";
import ActionForm from "@/components/common/compound/ActionForm";
import RHFTelInput from "@/components/hook-form/text/RHFTelInput";
import RHFTextField from "@/components/hook-form/text/RHFTextField";
import useServerAction from "@/hooks/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
  const t = useTranslations();

  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  const { startAction, response } = useServerAction<{
    message: string;
  }>();

  const onSubmit = handleSubmit((data: FormData) =>
    startAction(
      new Promise((resolve) => {
        const params = new URLSearchParams();
      })
    )
  );

  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
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
          {t("SAVE")}
        </Button>
      </Stack>
    </ActionForm>
  );
};

export default ProfileForm;
