/**
 * Object.keys() except typed properly for a map type
 */
export function typedObjectKeys<T extends {}>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[];
}
