import testfuncRenamed from './test.mjs';
testfuncRenamed(5, 6);

import {
  string,
  arr as arrRenamed
} from './test.mjs';

console.log(string, arrRenamed[2]);