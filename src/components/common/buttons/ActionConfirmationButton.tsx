"use client";
import useServerAction from "@/hooks/common/useServerAction";
import ConfirmationButton, {
  ConfirmationButtonProps,
} from "./ConfirmationButton";
type ActionConfirmationButtonProps = Omit<
  ConfirmationButtonProps,
  "onConfirm"
> & {
  onConfirm: () => Promise<any>;
  onSuccess?: VoidFunction;
};
const ActionConfirmationButton = ({
  onConfirm,
  onSuccess,
  ...props
}: ActionConfirmationButtonProps) => {
  const { startAction, isPending } = useServerAction();

  return (
    <ConfirmationButton
      {...props}
      onConfirm={() => startAction(onConfirm(), onSuccess)}
      loading={isPending}
    />
  );
};

export default ActionConfirmationButton;
