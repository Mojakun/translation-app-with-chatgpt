type AppendUnderscore<P extends string> = `__${P}`;
type Map<T extends string | number | symbol> = { [P in T]: P };
type Underscored<T extends string> = Map<AppendUnderscore<T>>;

export type Brand<K, T extends string> = K & Underscored<T>;
