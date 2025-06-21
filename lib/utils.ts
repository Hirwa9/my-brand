import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format big number count to K, M, B, etc.
 * @param num
 * @param usePlusSign?
 * @returns converted string. Eg: 1000 -> 1K
 */
export function convertCount({
  num, usePlusSign = false
}: { num: number, usePlusSign?: boolean }): string {
  let result = num.toString()
  if (num >= 1000 && num < 1000000) result = `${(num / 1000).toFixed(1)}K`
  if (num >= 1000000 && num < 1000000000) result = `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000000000 && num < 1000000000000) result = `${(num / 1000000000).toFixed(1)}B`
  return usePlusSign ? `${result}+` : result;
}