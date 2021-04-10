import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-listado-canciones',
  templateUrl: './listado-canciones.component.html',
  styleUrls: ['./listado-canciones.component.css']
})
export class ListadoCancionesComponent implements OnInit {

songs = [
  {
  track: 1,
  title: "Yesterday",
  composer: ["John Lennon", "Paul McCartney"],
  performer: ["The Beatles"],
  style: ["British Invasion", "Contemporary Pop/Rock", "Rock & Roll", "AM Pop", "Folk-Rock", "Psychedelic/Garage", "Soundtracks"],
  time: "02:05",
  year: "1965",
},
  {
  track: 2,
  title: "Get Lucky",
  composer: ["Thomas Bangalter", "Guy-Manuel de Homem-Christo", "Nile Rodgers", "Pharrell Williams"],
  performer: ["Daft Punk"],
  style: ["Club/Dance"],
  time: "06:09",
  year: "2013",
},
  {
  track: 3,
  title: "Blinding Lights",
  composer: ["Ahmad Balshe", "Oscar Holter", "Max Martin", "Jason Quenneville", "Abel Tesfaye"],
  performer: ["The Weeknd"],
  style: ["Alternative R&B", "Contemporary R&B", "Pop"],
  time: "03:24",
  year: "2020",
},
  {
  track: 4,
  title: "You Only Live Twice - Main Title",
  composer: ["John Barry", "Leslie Bricusse"],
  performer: ["Nancy Sinatra"],
  style: ["Stage & Screen"],
  time: "02:45",
  year: "1967",
},
  {
  track: 5,
  title: "The Girl from Ipanema",
  composer: ["Norman Gimbel", "Antônio Carlos Jobim", "Vinícius de Moraes"],
  performer: ["Stan Getz", "João Gilberto feat: Antônio Carlos Jobim"],
  style: ["Bossa Nova", "Brazilian Traditions", "Brazilian Jazz", "Global Jazz", "Mainstream Jazz"],
  time: "05:17",
  year: "1964",
},
  {
  track: 6,
  title: "Entre Dos Aguas",
  composer: ["Paco de Lucía", "José Torregrosa"],
  performer: ["Paco de Lucía"],
  style: ["Flamenco", "Western European Traditions", "Global Jazz", "Contemporary Flamenco", "Guitar Jazz", "Jazz Instrument"],
  time: "06:02",
  year: "1986",
},
  {
  track: 7,
  title: "Surf Rider",
  composer: ["Dick Dale"],
  performer: ["The Lively Ones"],
  style: ["", "Instrumental Rock", "Rock & Roll", "Surf"],
  time: "03:03",
  year: "1963",
},
  {
  track: 8,
  title: "Tamacun",
  composer: ["Tamacun"],
  performer: ["Rodrigo y Gabriela"],
  style: ["Alternative/Indie Rock"],
  time: "06:45",
  year: "2006",
},
  {
  track: 9,
  title: "Sultans of Swing",
  composer: ["Mark Knopfler"],
  performer: ["Dire Straits"],
  style: ["Album Rock", "Contemporary Pop/Rock", "Rock & Roll"],
  time: "05:47",
  year: "1978",
},
  {
  track: 10,
  title: "Out Of Space",
  composer: ["Liam Howlett", "Kool Keith", "C. Miller", "M. Smith"],
  performer: ["The Prodigy"],
  style: ["Club/Dance", "Hardcore Techno", "Techno", "Rave"],
  time: "03:41",
  year: "1992",
},

];
selectedSong?: string;

  onSelect(listedSong: string): void {
     this.selectedSong = listedSong;
   }

  constructor() { }

  ngOnInit() {
  }

}