import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  register = false;

  constructor(public functions: FunctionsService,
              public api: ApiService) {
}

  ngOnInit() {}

}
