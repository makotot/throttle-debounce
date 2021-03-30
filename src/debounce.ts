export const debounce = <F extends Function>(callback: F) => {
  let reqID: number | null = null;

  const exec = (args: F["arguments"]) => () => {
    callback(...args);
  };

  return (...args: F["arguments"]) => {
    if (reqID) {
      cancelAnimationFrame(reqID);
    }
    reqID = requestAnimationFrame(exec(args));
  };
};
