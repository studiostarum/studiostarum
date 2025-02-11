import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function clampFontSize(min: number, max: number, unit: string = 'rem') {
  return `clamp(${min}${unit}, 2svw, ${max}${unit})`;
}
