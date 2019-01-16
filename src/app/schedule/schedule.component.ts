import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import {webService} from '../data.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  p: number = 1;
  numberOfItems : number = 5;
  btnText:string = "Add Schedule";
  scheduleInfos = [];
  scheduleData={
  docName : "",
  apointmentDateTime:"",
  docType:"NA",
  city: "",
  address:"",
  docFile:""
 };
 testSessionStorage = [];
  constructor(private spinner: NgxSpinnerService, private webservice: webService) { }
  ngOnInit() {
    this.scheduleInfos = this.webservice.getWebService("schedule", {});
    this.testSessionStorage = JSON.parse(window.sessionStorage.getItem('testKey'));
    console.log(this.testSessionStorage);
  }
  deletScheduleRow(info){
    alert('delete');
    console.log(info);
    this.scheduleInfos.splice(this.scheduleInfos.indexOf(info), 1);
  }
  addRow(data){
    alert('add');
    console.log(data);
    this.spinner.show();
    // this.scheduleInfos.push(data);
    this.scheduleInfos.splice(0,0,data);
    this.resetForm();
    setTimeout(()=>{
      this.spinner.hide();
    },1000);
  }
  editRow(data){
    alert('edit');
    console.log(data);
    this.scheduleData = data;
    this.btnText = "Update Schedule"
  }
  resetForm(){
    this.scheduleData={
    docName : "",
    apointmentDateTime:"",
    docType:"NA",
    city: "",
    address:"",
    docFile:""};
  }

}
