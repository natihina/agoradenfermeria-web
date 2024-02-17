import type {Ref} from "vue";

export interface CachedItem<T> {
  key: string;
  value: T;
  fetchedAt: Date;
}

export async function getCached<T>(cache: Ref<CachedItem<T>[]>, key: string, TTL: number, fetchFn: () => Promise<T>): Promise<T> {
  const candidate = cache.value.find((item) => item.key === key)
  if (candidate && candidate.fetchedAt > new Date(new Date().getTime() - TTL)) {
    return candidate.value
  }
  const value = await fetchFn()
  if (candidate) {
    candidate.value = value
    candidate.fetchedAt = new Date()
  } else {
    cache.value.push({
      key: key,
      value: value,
      fetchedAt: new Date(),
    })
  }
  return value
}
