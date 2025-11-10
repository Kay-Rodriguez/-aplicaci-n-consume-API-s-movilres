import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  jokes: any[] = [];
  cats: any[] = [];
  loading = false;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient
  ) {}

ionViewWillEnter() {
    this.getJokesAndCats();
  }

  getJokesAndCats() {
    this.loading = true;
    this.jokes = [];
    this.cats = [];

    // Obtener chistes
    this.http.get('https://v2.jokeapi.dev/joke/Any?amount=6&lang=es').subscribe((data: any) => {
      this.jokes = data.jokes || [];
    });

    // Obtener fotos de gatos
    this.http.get('https://api.thecatapi.com/v1/images/search?limit=6').subscribe((data: any) => {
      this.cats = data;
      this.loading = false;
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
