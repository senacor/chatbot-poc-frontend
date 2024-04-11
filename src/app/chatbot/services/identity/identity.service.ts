import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {
  private identity: string;

  constructor() { 
    this.identity = new Date().getTime().toString(36) + Math.random().toString(36);
  }

  getIdentity = () => {
    return this.identity;
  }
}
