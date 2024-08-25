const MAX_FILE_SIZE = 6000 * 1024

export const isLarge = (size: number | undefined): boolean => {
  if (typeof size === 'number' && size > MAX_FILE_SIZE) return true

  return false
}
