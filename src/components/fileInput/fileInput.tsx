import React, { useState, useRef, FC } from "react";
import styles from "./FileInput.module.scss";
import { UploadToCloudIcon } from "../../assets/icons/outline";

export type FileInputProps = {
  onFileInput?: (file: File) => void;
};

export const FileInput: FC<FileInputProps> = ({
  onFileInput,
}: FileInputProps) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileInput?.(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      setFileName(file.name);
      onFileInput?.(file);
    }
  };

  return (
    <div
      className={styles.dropZone}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <input
        type="file"
        ref={inputRef}
        className={styles.hiddenInput}
        onChange={handleFileChange}
      />
      <div className={styles.icon}>
        <UploadToCloudIcon />
      </div>
      <p className={styles.text}>
        <strong>Нажмите для выбора файла</strong> или <br /> перетащите его сюда
      </p>
      {fileName && <p className={styles.fileName}>{fileName}</p>}
    </div>
  );
};

export default FileInput;
