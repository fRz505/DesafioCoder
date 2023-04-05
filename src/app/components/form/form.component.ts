import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    
    alumnosForm: FormGroup;
      
  constructor(public formBuilder: FormBuilder) {
      this.alumnosForm = this.formBuilder.group({
        usuario: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]], 
        email: ['',[Validators.email]],
        password: ['',[Validators.required, Validators.minLength(6), Validators.maxLength(12)]]
      })
   }

   onSubmit():void {
    console.log(this.alumnosForm.get("email")?.value);
    console.log(this.alumnosForm.get("usuario")?.invalid);
    
   }

  ngOnInit() {

  }

}
