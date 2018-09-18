import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/user-service/client/client.service';
import { Client } from '../../../services/user-service/client/client.model';

declare var M: any;
@Component({
  selector: 'app-add-new-clients',
  templateUrl: './add-new-clients.component.html',
  styleUrls: ['./add-new-clients.component.css'],
  providers:[ClientService]
})
export class AddNewClientsComponent implements OnInit {

  constructor(public clientService: ClientService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.clientService.selectedClient = {
      _id:"",
      fname: "",
      lname:"",
<<<<<<< HEAD
      username: "",
      password: "",
      email:"",
      telephone: null,
      address: "",
      noofvisitors: null,
      foodperfer:"",
=======
      password: "",
      email:"",
      telephone: [""],
      address: "",
      city:"",
      country:"",
      noofvisitors: null,
      foodprefer:[""],
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
      intactivities:[""],
      agegroup:"",
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.clientService.postClient(form.value).subscribe((res) => {
<<<<<<< HEAD
        
        this.resetForm(form);
        this.flashMessage.show('Client Saved', { cssClass: 'alert-success', timeout: 4000 });
=======
        this.resetForm(form);
        this.flashMessage.show('Client Saved', { cssClass: 'alert-success', timeout: 4000 });
        alert('Client Saved');
        console.log("Saved");
        this.router.navigateByUrl('/travelagent-account');
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
      });
    }
    else {
      this.clientService.putClient(form.value).subscribe((res) => {
        this.resetForm(form);
        this.flashMessage.show('Client Updated', { cssClass: 'alert-success', timeout: 4000 });
<<<<<<< HEAD
=======
        alert('Client Updated');
        console.log("Updated");
        this.router.navigateByUrl('/travelagent-account');
>>>>>>> d3781741f7c18321f7e55de499af5469f249c38b
      });
    }
  }
}