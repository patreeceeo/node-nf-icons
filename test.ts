import { names, utf16 } from "./";

Object.entries(names).forEach(([key, fullName]) => {
  console.log(`${utf16(fullName)}  => names.${key}`);
});

