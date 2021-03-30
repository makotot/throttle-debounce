export const throttle = <F extends Function>(callback: F) => {
  let reqID: number | null = null;

  const exec = (args: F["arguments"]) => () => {
    callback(...args);
    reqID = null;
  };

  return (...args: F["arguments"]) => {
    if (!reqID) {
      reqID = requestAnimationFrame(exec(args));
    }
  };
};
