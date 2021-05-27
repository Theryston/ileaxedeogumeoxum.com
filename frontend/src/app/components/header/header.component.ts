import { NavService } from './../../services/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavService) { }

  ngOnInit(): void {
  }

  change(): void {
    if (this.navService.isOpen) {
      this.navService.change = false
    } else {
      this.navService.change = true
    }
  }

  openNav(): void {
    this.navService.change = true
  }

  closeNav(): void {
    this.navService.change = false
  }

}
