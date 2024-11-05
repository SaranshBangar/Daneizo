// global.d.ts
export {};

declare global {
  var mongoose: {
    conn: any;
    promise: Promise<any> | null;
  };
}
