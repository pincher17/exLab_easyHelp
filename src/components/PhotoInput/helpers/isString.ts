export function isString(url: string | ArrayBuffer | null): url is string {
  return typeof url === 'string'
}
