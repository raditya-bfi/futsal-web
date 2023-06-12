/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import React from 'react'

import { Typography } from '@mui/material'

import { UserIcon } from '~/assets/svg'

import useCustom from './hooks'
import useStyle from './style'

function OperatorPhoto({ editMode, files, maxFiles, setAlert, setFiles }) {
  const { dropZone, refs, state } = useCustom({ editMode, files, maxFiles, setAlert, setFiles })
  const classes = useStyle()

  // ? : Multiple Files
  const thumbs = state.filePreview.map((file) => (
    <div className={classes.thumb} key={file.name}>
      <div className={classes.thumbInner}>
        <img
          className={classes.img}
          src={file.preview}
          // Revoke data uri after image is loaded
          alt='preview'
          onLoad={() => {
            URL.revokeObjectURL(file.preview)
          }}
        />
      </div>
    </div>
  ))

  return (
    <section className={classes.container}>
      <div
        {...dropZone.getRootProps({
          className: classes.dropZone,
        })}
        style={{ padding: files && files.length > 0 ? '0px' : '7px 0px' }}
      >
        <input multiple={maxFiles > 1} {...dropZone.getInputProps()} required />
        {state.filePreview && state.filePreview.length > 0 && maxFiles === 1 ? (
          <div className={classes.previewWrapper}>
            <img
              className={classes.imgPreview}
              src={state.filePreview[0].preview}
              // Revoke data uri after image is loaded
              alt='preview'
              ref={refs.previewImageRef}
              onLoad={() => {
                URL.revokeObjectURL(state.filePreview[0].preview)
              }}
              // style={{
              //   ...state.previewImageSize,
              // }}
            />
          </div>
        ) : (
          <>
            <div className={classes.iconWrapper}>
              <img className={classes.userIconUpload} src={UserIcon} alt='add-operator-user-icon' />
            </div>
            <Typography className={classes.uploadLabel}>Klik untuk menambah gambar</Typography>
          </>
        )}
      </div>
      {maxFiles > 1 && <aside className={classes.thumbsContainer}>{thumbs}</aside>}
    </section>
  )
}

OperatorPhoto.defaultProps = {
  editMode: false,
  files: [],
  maxFiles: 1,
}

OperatorPhoto.propTypes = {
  editMode: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  files: PropTypes.array,
  maxFiles: PropTypes.number,
  setAlert: PropTypes.func.isRequired,
  setFiles: PropTypes.func.isRequired,
}

export default OperatorPhoto
