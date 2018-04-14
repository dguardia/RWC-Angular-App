import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {AngularFireDatabase} from 'angularfire2/database';
import * as $ from 'jquery';
import 'easy-pie-chart/dist/jquery.easypiechart.js';
import * as EasyPieChart from 'easy-pie-chart/dist/jquery.easypiechart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  title = 'My skills';
  skills: Observable<any[]>;
  newSkills: any[];
  constructor(db: AngularFireDatabase) {
    this.skills = db.list('/skills').valueChanges();
    this.skills.subscribe(newSkills => {
      this.newSkills = newSkills;
    });
  }
  ngOnInit() {
    $(document).ready(function () {
      $('button').on('click', function () {
        const div = $('div');
        div.animate({left: '100px'}, 'slow');
        div.animate({fontSize: '5em'}, 'slow');
      });
      $('.chart').easyPieChart({
        scaleColor: '#ecf0f1',
        lineWidth: 20,
        lineCap: 'butt',
        barColor: '#1abc9c',
        trackColor:	'#ecf0f1',
        size: 160,
        animate: 500
      });
    });
  }


}
