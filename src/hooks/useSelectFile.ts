import { ChangeEvent, useState } from "react";

const useSelectFile = () => {
  const [file, setFile] = useState<File | undefined>();
  const handleFileSelect = (
    e: ChangeEvent<HTMLInputElement>,
    onSelect?: VoidFunction
  ) => {
    let files = (e.target as HTMLInputElement).files;
    if (files && files?.length > 0) {
      setFile(files[0]);
      onSelect && onSelect();
    }
  };
  const resetFile = () => {
    setFile(undefined);
  };
  return { handleFileSelect, file, resetFile, setFile };
};

export default useSelectFile;
