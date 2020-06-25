import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";
import "./styles.css";

function Dropzone({ onFileUploaded }) {
  const [selectedFile, setSelectedFile] = useState("");

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFile(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFile ? (
        <img src={selectedFile} alt="point thumbnail" />
      ) : (
        <p>
          <FiUpload />
          Clique ou arraste a imagem do estabelecimento.
        </p>
      )}
    </div>
  );
}

export default Dropzone;
