export function tryCatch<Params = unknown, Result = unknown>({
  tryer,
  catcher,
}: {
  tryer: (params: Params) => Result;
  catcher: (params: Params, message: string) => Result;
}) {
  return (params: Params) => {
    try {
      return tryer(params);
    } catch (error) {
      let message = "Something went wrong";

      if (error instanceof Error) {
        message = error.message;
      }

      return catcher(params, message);
    }
  };
}
