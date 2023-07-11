import { useDropzone } from 'react-dropzone'

import { MAXIMUM_UPLOAD_FILE_SIZE } from '~/constants/general'

const useCustom = ({ handleUpload, setAlert }) => {
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
        handleUpload({
          fieldImages: acceptedFiles && acceptedFiles.length > 0 ? acceptedFiles[0] : null,
        })
      }
    },
    maxFiles: 1,
    maxSize: MAXIMUM_UPLOAD_FILE_SIZE, // ? 512kb
    multiple: false,
  })

  return {
    dropZone: {
      getInputProps,
      getRootProps,
    },
  }
}

export default useCustom
