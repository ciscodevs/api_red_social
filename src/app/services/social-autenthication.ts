import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocialAutenthication {

  private tokenSignal = signal<string | null>(null);

  setToken(token:string) {
    this.tokenSignal.set(token);
    // localStorage es una BD pequeña en el navegador, que nos permite
    // guardar información del usuario
    localStorage.setItem('social_token', token);
  }

  loadToken() {
    // guardamos en token la clave que hay en localstorage
    const token = localStorage.getItem('social_token');
    // si hay datos en token se asigna a tokenSignal
    if(token) this.tokenSignal.set(token);
  }

  get token() {
    return this.tokenSignal();
  }

  logout() {
    this.tokenSignal.set(null);
    localStorage.removeItem('social_token');
  }
  
}
