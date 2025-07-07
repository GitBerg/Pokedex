export const getIdFromSpeciesUrl = (url: string): number =>
  parseInt(url.split('/').filter(Boolean).pop() || '0', 10)

