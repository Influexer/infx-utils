export function patternMatching<K = unknown, R = unknown>(
  cases: [K, R][]
): (v: K) => R | undefined;
export function patternMatching<K = unknown, R = unknown>(
  cases: [K, R][],
  fallback: R
): (v: K) => R;
export function patternMatching<K = unknown, R = unknown>(
  cases: [K, R][],
  fallback?: R
) {
  return (value: K) => {
    for (const [$case, $return] of cases) {
      if (
        Array.isArray($case)
          ? JSON.stringify($case) === JSON.stringify(value)
          : $case === value
      ) {
        return $return;
      }
    }

    if (fallback) {
      return fallback;
    } else {
      return undefined;
    }
  };
}
