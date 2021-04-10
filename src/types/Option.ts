/**
 * Option type to check allow for undefined.
 */
export type Option<T> = T | undefined;

/**
 * Check if a `IOption` is `T`.
 *
 * @param option api-sidecar TS option type, conceptually mimics Rust option
 */
export function isSome<T>(option: Option<T>): option is T {
  return option !== undefined;
}
