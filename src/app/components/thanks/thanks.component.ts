import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.scss'
})
export class ThanksComponent {
  @Output() continueClicked = new EventEmitter<void>();

  onContinue(){
    this.continueClicked.emit();
  }

}
