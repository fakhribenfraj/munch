"use client";
import useServerAction from "@/hooks/useServerAction";
import ConfirmationButton, {
  ConfirmationButtonProps,
} from "./ConfirmationButton";
type ActionConfirmationButtonProps = ConfirmationButtonProps & {
  onConfirm: () => Promise<any>;
  onSuccess?: VoidFunction;
};
const ActionConfirmationButton = ({
  onConfirm,
  onSuccess,
  ...props
}: ActionConfirmationButtonProps) => {
  const { startAction, isPending } = useServerAction(onConfirm);

  return (
    <ConfirmationButton
      {...props}
      onConfirm={() => startAction(onSuccess)}
      loading={isPending}
    />
  );
};

export default ActionConfirmationButton;
