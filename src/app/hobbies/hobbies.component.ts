import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  title = 'My Hobbies';
  hobbies: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.hobbies = db.list('/hobbies').valueChanges();
   }

  ngOnInit() {
  }

}
