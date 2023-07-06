import { set } from 'lodash-es'

export const getFieldGalleries = (savedPhotos = []) => {
  const res = [
    {
      id: 1,
      image: null,
    },
    {
      id: 2,
      image: null,
    },
    {
      id: 3,
      image: null,
    },
    {
      id: 4,
      image: null,
    },
    {
      id: 5,
      image: null,
    },
  ]

  if (savedPhotos && savedPhotos.length > 0) {
    savedPhotos.forEach((photo, index) => {
      set(res, `[${index}].gallery_id`, photo.gallery_id)
      set(res, `[${index}].image`, photo.image)
    })
  }

  return res
}
