import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// This function combines the clsx and tailwind-merge libraries to create a utility function for merging class names.
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

/**
 * This function converts a date object to a string in the format 'MM/DD/YYYY'.
 * It uses the toLocaleDateString method to format the date according to the 'en-US' locale.
 * 
 * @param date - The date to be converted to a string.
 * @returns A string representing the date in the format 'MM/DD/YYYY'.
 * @example 
 *  const date = new Date('2023-10-01');
 *  const dateString = dateToString(date); // '10/01/2023'
 */
export function dateToString(date: Date, locale: string): string {
  return date.toLocaleDateString(locale = 'fr_FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
}

