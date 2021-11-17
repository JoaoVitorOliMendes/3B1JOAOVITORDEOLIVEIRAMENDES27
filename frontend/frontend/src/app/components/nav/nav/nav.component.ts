import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SidenavComponent } from '../../sidenav/sidenav/sidenav.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() title: any;


  constructor(
    private fb: FormBuilder,
    private sidenav: SidenavComponent
  ) { }

  ngOnInit(): void {
  }

  toggle() {
    this.sidenav.toggle();
  }

}
