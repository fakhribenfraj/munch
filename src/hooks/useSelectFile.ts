import { ChangeEvent, useState } from "react";

const useSelectFile = (src?: string) => {
  const [file, setFile] = useState<string | null>(src ?? null);
  const handleFileSelect = (
    e: ChangeEvent<HTMLInputElement>,
    onSelect?: VoidFunction
  ) => {
    let files = (e.target as HTMLInputElement).files;
    if (files && files?.length > 0) {
      setFile(URL.createObjectURL(files[0]));
      onSelect && onSelect();
    }
  };
  const resetFile = () => {
    setFile(null);
  };
  return { handleFileSelect, file, resetFile, setFile };
};

export default useSelectFile;
