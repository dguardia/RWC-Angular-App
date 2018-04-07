import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  title = 'About me';
  header: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.header = db.list('/intros').valueChanges();
   }

  ngOnInit() {
  }

}
