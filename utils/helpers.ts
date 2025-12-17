


// Block the processes in the function for "ms" milliseconds
export function sleep(ms: number) {
  return new Promise<void>(resolve => setTimeout(resolve, ms));
};