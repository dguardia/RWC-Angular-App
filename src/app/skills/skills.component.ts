import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import * as $ from 'jquery';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'My skills';
  skills: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.skills = db.list('/skills').valueChanges();
  }

  ngOnInit() {
    $(document).ready(function () {
      $('button').on('click', function () {
        const div = $('div');
        div.animate({left: '100px'}, 'slow');
        div.animate({fontSize: '5em'}, 'slow');
      });
    });
  }

}
