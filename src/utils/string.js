export const stringAvatar = (name) => {
  if (!name || name.trim() === '') {
    return ''
  }

  const trimmedName = name.trim() // Handle trailing whitespaces gives error in regex

  const avatarName = trimmedName.replace(/\b\w/g, (letter) => letter.toUpperCase())
  const nameParts = avatarName.split(' ')
  let initials = ''

  if (nameParts.length >= 1) {
    initials += nameParts[0][0]
  }

  if (nameParts.length >= 2) {
    initials += nameParts[1][0]
  }

  return initials
}

export const removeSeconds = (time = '') => {
  const res = ''
  if (time && time.length > 0) {
    const tempTime = time.split(':')
    return `${tempTime[0]}:${tempTime[1]}`
  }
  return res
}
