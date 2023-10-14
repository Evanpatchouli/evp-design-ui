export interface PropsParserFunc {
    <R>(): R;
    <A, R>(args1: A): R;
    <A, B, R>(args1: A, args2: B): R;
    <A, B, C, R>(args1: A, args2: B, args3: C): R;
    <A, B, C, D, R>(args1: A, args: B, args2: C, args3: D): R;
    <A, B, C, D, E, R>(args1: A, args?: B, args2?: C, args3?: D, args4?: E): R;
    <R>(...args: any): R;
}
