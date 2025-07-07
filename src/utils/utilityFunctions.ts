export function formatWithLeadingZeros(id?: number, size = 3): string {
  return id ? id.toString().padStart(size, '0') : ''
}

export function kilogramsToPounds(kilograms:string) {
  return ((parseFloat(kilograms) / 10) * 2.20462).toFixed(1);
}

export function heightToImperial(decimeters: number): string {
  const totalFeet = decimeters * 0.328084

  const feet = Math.floor(totalFeet)                   
  const inches = Math.round((totalFeet - feet) * 12)    
 
  const inchesPadded = inches.toString().padStart(2, '0')

  return `${feet}'${inchesPadded}"`

}

export function firstLetterUpper(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export const extractId = (url: string) =>
  parseInt(url.split('/').filter(Boolean).pop() || '0', 10)