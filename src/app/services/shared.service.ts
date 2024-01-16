import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CardDetails {
  cardNumber: string;
  cardholderName: string;
  month: string;
  year: string;
  cvc: string;
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private cardDetailsSource = new BehaviorSubject<CardDetails>({
    cardNumber: "",
    cardholderName: "",
    month: "",
    year: "",
    cvc: ""
  });
  currentCardDetails = this.cardDetailsSource.asObservable();

  constructor() { }

  changeCardDetails(details: CardDetails){
    this.cardDetailsSource.next(details);
  }
}
