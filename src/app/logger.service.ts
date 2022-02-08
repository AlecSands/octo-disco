import { Injectable } from '@angular/core';
// import {  } from "module";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  constructor() { }

  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
}
