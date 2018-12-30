export function hello1() {console.log('hello1');}
export function hello2() {console.log('hello2');}
export function hello3() {console.log('hello3');}

export type HelloType = typeof import('./hello')
