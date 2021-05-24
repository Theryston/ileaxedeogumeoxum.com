import { NavService } from './../../services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  get isOpen(): boolean {
    return this.navService.isOpen
  }

}
