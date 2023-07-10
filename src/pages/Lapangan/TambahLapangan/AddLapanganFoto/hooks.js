import { useDropzone } from 'react-dropzone'

import { MAXIMUM_UPLOAD_FILE_SIZE } from '~/constants/general'

const useCustom = ({ maxFiles, setAlert, setFiles }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      if (
        fileRejections &&
        fileRejections.length > 0 &&
        fileRejections[0].errors[0].code === 'file-too-large'
      ) {
        setAlert((prev) => ({
          ...prev,
          open: true,
          message: 'Ukuran file melebihi 512kb',
        }))
      } else {
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              changed: true,
              preview: URL.createObjectURL(file),
            }),
          ),
        )
      }
    },
    maxFiles,
    maxSize: MAXIMUM_UPLOAD_FILE_SIZE, // ? 512kb
    multiple: maxFiles > 1,
  })

  return {
    dropZone: {
      getInputProps,
      getRootProps,
    },
  }
}

export default useCustom
