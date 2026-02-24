import { Component, signal } from '@angular/core';
import { SocialApi } from '../../services/social-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feed',
  imports: [FormsModule],
  templateUrl: './feed.html',
  styleUrl: './feed.css',
})
export class Feed {

  posts = signal<any[]>([]);
  postText = '';

  constructor(private api: SocialApi) {

  }

  ngOnInit() {
    this.load()
  }

  load() {
    this.api.getPosts().subscribe((data: any) => {
      this.posts.set(data);
    });
  }

  // Ejemplo de cómo actualizaría la Signal en tu componente
  publish() {
    if (this.postText.trim()) {
      const nuevoPost = { text: this.postText };
      // Actualizamos la Signal agregando el nuevo post al principio
      this.posts.update(prev => [nuevoPost, ...prev]);
      this.postText = ''; // Limpiamos el input
    }
  }

}
