import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics'
  name: string = 'Daniel Stonebuilt'
  age: number = 38
  imgURL: string = 'https://fastly.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0'

  GetTitle(): string {
     return this.title
  }

  ChangeImage(e: KeyboardEvent)
  {
     this.imgURL = (e.target as HTMLInputElement).value
  }
}
