export function currency(locales: string | string[], value: number, options?: Intl.NumberFormatOptions | undefined) {
  return new Intl.NumberFormat(locales, { ...options }).format(value);
}