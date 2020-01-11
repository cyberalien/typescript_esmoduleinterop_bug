# Bug demo

This code shows esModuleInterop TypeScript bug.

## Description

This code uses dependency `request` that exports default value. If esModuleInterop is disabled, this will cause error:

```
src/get_uri.ts:1:8 - error TS1259: Module '"node_modules/@types/request/index"' can only be default-imported using the 'esModuleInterop' flag

1 import request, { Response } from 'request';
         ~~~~~~~

  node_modules/@types/request/index.d.ts:405:1
    405 export = request;
        ~~~~~~~~~~~~~~~~~
    This module is declared with using 'export =', and can only be used with a default import when using the 'esModuleInterop' flag.


Found 1 error.
```

However in tsconfig-base.json as well as src/tsconfig.json and tests/tsconfig.json, `esModuleInterop` is set to `true`.

## Steps to reproduce

Attempt to compile code by running `tsc -b`.

## Expected behavior

Code should compile without issues.

## Actual behavior

TypeScript throws error telling that default exports are not allowed unless esModuleInterop is enabled. However esModuleInterop is enabled, twice (to show that neither entry is working)!

## Workaround

Temporary workaround is to enable `esModuleInterop` from root tsconfig.json. Also set `noEmit` to `true` because otherwise TypeScript will compile second set of files in "src" and "tests". See tsconfig-workaround.json
