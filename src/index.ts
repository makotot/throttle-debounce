import { throttle } from "./throttle";
import { debounce } from "./debounce";

const log = (a: number) => {
  const result = a;
  console.log({ result });
};
const throttleLog = throttle(log);
throttleLog(1);
throttleLog(2);
setTimeout(() => throttleLog(3), 1000);

const debounceLog = debounce(log);
debounceLog(11);
debounceLog(12);
