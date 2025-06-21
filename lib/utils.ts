import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert big number count to K, M, B, etc.
 * @param num
 * @returns converted string. Eg: 1000 -> 1K
 */
export function convertCount(num: number): string {
  if (num < 1000) return num.toString()
  if (num < 1000000) return `${(num / 1000).toFixed(1)}K`
  if (num < 1000000000) return `${(num / 1000000).toFixed(1)}M`
  if (num < 1000000000000) return `${(num / 1000000000).toFixed(1)}B`
  return `${(num / 1000000000000).toFixed(1)}T`
}