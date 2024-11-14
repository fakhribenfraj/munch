"use client";

import { forgotPassword } from "@/actions/authorization/forgotPassword";
import ActionForm from "@/components/common/compound/ActionForm";
import DigitInput from "@/components/common/inputs/DigitInput";
import { routes } from "@/constants/routes";
import useServerAction from "@/hooks/useServerAction";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const FormSchema = z.object({
  1: z.number().nullable(),
  2: z.number().nullable(),
  3: z.number().nullable(),
  4: z.number().nullable(),
});

type FormData = z.infer<typeof FormSchema>;

export default function VerifyResetCode() {
  const router = useRouter();
  const methods = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      1: null,
      2: null,
      3: null,
      4: null,
    },
  });
  const { handleSubmit, getValues } = methods;
  const { startAction, response } = useServerAction<{
    message: string;
  }>();

  const onSubmit = handleSubmit((data: FormData) =>
    startAction(forgotPassword("test"), () => router.push(routes.HOME))
  );
  return (
    <ActionForm methods={methods} onSubmit={onSubmit}>
      <Stack gap={2}>
        <DigitInput name="validate" length={5} />
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
          verify code
        </Button>
      </Stack>
    </ActionForm>
  );
}
