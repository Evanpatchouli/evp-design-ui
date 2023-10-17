export type Protected<Fx extends Function = Function> = Fx;

/**
 * Catch error handling for a given function.
 * @param fn
 * @param catchHanlder
 * @param finallyHandler
 */
export const useCatch = <Fx extends Function = Function>(
  fn: Fx,
  catchHandler?: (err?: any) => any | null,
  finallyHandler?: () => any | null
): Protected<typeof fn> => {
  const fnProtected: Protected<typeof fn> = ((...args: any[]) => {
    try {
      fn(...args);
    } catch (error) {
      if (catchHandler) {
        catchHandler(error);
      } else {
        console.error(error);
      }
    } finally {
      finallyHandler?.();
    }
  }) as unknown as typeof fn;

  return fnProtected;
};

export default useCatch;
