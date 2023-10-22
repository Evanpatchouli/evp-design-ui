export type Protected<Fx extends Function = Function> = Fx;
/**
 * Catch error handling for a given function.
 * @param fn
 * @param catchHanlder
 * @param finallyHandler
 */
export declare const useCatch: <Fx extends Function = Function>(fn: Fx, catchHandler?: ((err?: any) => any | null) | undefined, finallyHandler?: () => any | null) => Fx;
export default useCatch;
