import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  title = 'My education';
  education: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    this.education = db.list('/education').valueChanges();
  }

  ngOnInit() {
  }

}
