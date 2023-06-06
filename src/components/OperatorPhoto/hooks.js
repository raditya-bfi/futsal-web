import { useEffect, useState, useRef } from 'react'

import { useDropzone } from 'react-dropzone'

const useCustom = ({ editMode, files, maxFiles, setEditMode, setFiles }) => {
  const previewImageRef = useRef(null)
  const [filePreview, setFilePreview] = useState([])
  const [previewImageSize, setPreviewImageSize] = useState({ height: '0px', width: '0px' })
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles)
      setFilePreview(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      )
      if (editMode) {
        setEditMode(false)
      }
    },
    maxFiles,
    multiple: maxFiles > 1,
  })

  const getPreviewImageSize = () => {
    const newWidth = previewImageRef?.current?.naturalWidth
    const newHeight = previewImageRef?.current?.naturalHeight
    setPreviewImageSize({
      height: `${newHeight}px`,
      width: `${newWidth}px`,
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      getPreviewImageSize()
    }, 250)
    return () => clearTimeout(timeout)
  }, [filePreview[0], previewImageRef])

  useEffect(() => {
    if (editMode) {
      setFilePreview(files)
    }
  }, [editMode, files])

  useEffect(
    () =>
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      () =>
        filePreview.forEach((file) => URL.revokeObjectURL(file.preview)),
    [],
  )

  return {
    dropZone: {
      getInputProps,
      getRootProps,
    },
    state: {
      filePreview,
      previewImageSize,
    },
    refs: {
      previewImageRef,
    },
  }
}

export default useCustom
