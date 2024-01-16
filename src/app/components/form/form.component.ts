import { Component, OnInit } from '@angular/core';
import { 
  FormControl, 
  FormGroupDirective,
  NgForm, 
  Validators, 
  FormsModule, 
  ReactiveFormsModule, 
  AbstractControl,
  ValidatorFn
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CardDetails, SharedService } from '../../services/shared.service';
import { ThanksComponent } from '../thanks/thanks.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, ThanksComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent{
  numberOnlyRegex = /^[0-9]*$/;
  submitted = false;
  formattedCvc: string = '000';

  nameFormControl = new FormControl('', [Validators.required]);
  cardNumberFormControl = new FormControl('', [Validators.required, this.cardNumberValidator()]);
  expMonthFormControl = new FormControl('', [Validators.required, Validators.pattern(this.numberOnlyRegex)]);
  expYearFormControl = new FormControl('', [Validators.required, Validators.pattern(this.numberOnlyRegex)]);
  cvcFormControl = new FormControl('', [Validators.required, Validators.pattern(this.numberOnlyRegex)]);

  matcher = new MyErrorStateMatcher();

  cardDetails: CardDetails = {
    cardNumber: "0000 0000 0000 0000",
    cardholderName: "Jane Appleseed",
    month: "00",
    year: "00",
    cvc: "000"
  };

  constructor(private sharedService: SharedService) {}

  cardNumberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        let valid = /^\d{4} \d{4} \d{4} \d{4}$/.test(control.value);
        return valid ? null : {'invalidCardNumber': {value: control.value}};
    };
  }

  formatCardNumber(event: any) {
    let input = event.target.value.split(' ').join(''); // Remove existing spaces
    if (input.length > 16) {
        input = input.substr(0, 16); // Limit to 16 digits
    }

    // Add spaces every 4 digits
    input = input.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');

    event.target.value = input.trim(); // Update the input field
  }

  onInputChange(){
    this.sharedService.changeCardDetails(this.cardDetails);
  }

  onContinue() {
    this.submitted = false;
  }

  onSubmit(){
    if (this.nameFormControl.valid && this.cardNumberFormControl.valid && this.expMonthFormControl.valid && this.expYearFormControl.valid && this.cvcFormControl.valid){
      this.submitted = true;
    } else {
      alert("form is not valid")
    }
  }
}
