import { AsyncPipe, formatDate } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-posted',
  templateUrl: './date-posted.component.html',
  styleUrls: ['./date-posted.component.css']
})
export class DatePostedComponent implements OnInit{

  @Input()
  postedDate: any ;

    _tempDate : any ;
    _timeAgo: any;
    _datePosted: any;

  constructor() {}

  ngOnInit(): void {


    this._tempDate = new Date(formatDate(this.postedDate, 'medium', 'en-US', 'GMT-4:00'));
    this._timeAgo = this.transformDate(this._tempDate) ;
    this._datePosted = formatDate(this._tempDate, 'fullDate', 'en-US');
  }

  transformDate(postDate:Date) {
      // current time
    let now = new Date().getTime();

    // time since message was sent in seconds
    let delta = (now - postDate.getTime()) / 1000;

    // format string
    if (delta < 60)
    { // sent in last minute
      return  'Posted ' + Math.floor(delta) + '  seconds ago';
    }
    else if (delta < 3600)
    { // sent in last hour
      return 'Posted ' + Math.floor(delta / 60) + ' minutes ago';
    }
    else if (delta < 86400)
    { // sent on last 24 hour
      return 'Posted ' + Math.floor(delta / 3600) + ' hours ago';
    }
    else if (delta < 604800)
    { // sent within one week ago
      return 'Posted ' + Math.floor(delta / 86400) + ' days ago';
    }
    else if (delta < 2628000)
    { // sent within one moth ago
      return 'Posted ' + Math.floor(delta / 604800) + ' weeks ago';
    }
    else if (delta < 31536000)
    { // sent within one year ago
      return 'Posted ' + Math.floor(delta / 2628000) + ' months ago';
    }
    else{
      return "";
    }
  }
}
function locale(postedDate: any, arg1: string, locale: any): any {
  throw new Error('Function not implemented.');
}

