import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class webService {
  scheduleInfos = [];
  constructor() { 

  this.scheduleInfos = [
      {docName : "Ashutosh Gaitunde",
       apointmentDateTime:"25sept2018 23:12",
       docType:"General Physician",
       city: "mumbai",
       address:"At/po-Thane Ghansoli sector1",
       docFile:"",
      },
      {docName : "Ashutosh Sarangi",
       apointmentDateTime:"25sept2018 23:12",
       docType:"General Physician",
       city: "mumbai",
       address:"At/po-Thane Ghansoli sector1",
       docFile:"",
      },
      {docName : "Ashutosh Hotta",
       apointmentDateTime:"25sept2018 23:12",
       docType:"General Physician",
       city: "mumbai",
       address:"At/po-Thane Ghansoli sector1",
       docFile:"",
      },
    ];
  }
  // getWebService(){
  getWebService(endpoint, params, keyName=''){
  	// if(keyName){
  	// 	//get values form session storage and if it is availabele else store it into it.
  	// }
  	alert('services');
  	console.log(window.sessionStorage);
  	window.sessionStorage.setItem('testKey', JSON.stringify(this.scheduleInfos));
  	return this.scheduleInfos; 

  }
}
