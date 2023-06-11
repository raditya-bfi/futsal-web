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
    savedPhotos.forEach((photo) => {
      set(res, `[${photo.gallery_id - 1}].image`, photo.image)
    })
  }

  return res
}
