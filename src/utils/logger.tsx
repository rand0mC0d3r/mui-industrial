/* eslint-disable @typescript-eslint/no-explicit-any */
export const packageName = 'mui-industrial';

export const logPackage = (...props: any) => {
  console.log(`[${packageName}]:`, ...props);
};

export const lognPackage = (...props: any) => {
  console.log(`\n\n[${packageName}]:`, ...props);
};
