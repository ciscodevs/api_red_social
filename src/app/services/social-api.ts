import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../config/environment.config';
import { SocialAutenthication } from './social-autenthication';

@Injectable({
  providedIn: 'root',
})
export class SocialApi {

  private http = inject(HttpClient);
  private auth = inject(SocialAutenthication);

  private headers() {
    return new HttpHeaders({
      Authorization: `Bearer ${this.auth.token}`,
      'Content-Type': 'application/json'
    });
  }

  // obtener publicaciones
  getPosts() {
    return this.http.get(`${environment.apiUrl}/posts`, {
      headers: this.headers()
    });
  }

  // publicar mensaje
  createPost(text:string){
    return this.http.post(`${environment.apiUrl}/posts`,
      { text },
      { headers: this.headers() }
    );
  }

  // obtener perfil
  getProfile(){
    return this.http.get(`${environment.apiUrl}/me`, {
      headers: this.headers()
    })
  }
  
}
