import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private _isOpen = new BehaviorSubject<boolean>(false)

  constructor() { }

  get isOpen(): boolean {
    return this._isOpen.value
  }

  set change(status: boolean) {
    this._isOpen.next(status)
  }
}
