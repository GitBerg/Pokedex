type FlavorEntry = {
  flavor_text: string
  language: { name: string }
}

export const buildFlavorText = (entries: FlavorEntry[]): string => {
  const texts = entries
    .filter((e) => e.language?.name === 'en') 
    .map((e) =>
      e.flavor_text
        .replace(/\f|\n/g, ' ') 
        .trim(),
    )

  const unique = Array.from(new Set(texts)) 
  return unique.join(' ')
}