import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  title = 'Friends';
  friends: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.friends = db.list('/friends').valueChanges();
  }

  ngOnInit() {
  }

}
