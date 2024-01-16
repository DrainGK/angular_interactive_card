import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetails, SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{

  cardDetails!: CardDetails;

  constructor(private sharedService: SharedService) {}

  ngOnInit(){
    this.sharedService.currentCardDetails.subscribe(data => this.cardDetails = data)
  }

  getFormattedCvc(): string {
    return this.cardDetails.cvc.toString().padStart(3, '0');
  }

  getFormattedMonth(): string {
    return this.cardDetails.month.toString().padStart(2, '0');
  }

  getFormattedYear(): string {
    return this.cardDetails.year.toString().padStart(2, '0');
  }
  

}
