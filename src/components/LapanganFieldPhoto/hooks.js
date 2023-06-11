import { useDropzone } from 'react-dropzone'

const useCustom = ({ photoId, handleUpload }) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      handleUpload(photoId, {
        fieldImages: acceptedFiles && acceptedFiles.length > 0 ? acceptedFiles[0] : null,
      })
    },
    maxFiles: 1,
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
