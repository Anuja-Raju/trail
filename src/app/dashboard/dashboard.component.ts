// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      textBox1: ['', Validators.required],
      textBox2: ['', Validators.required],
      textBox3: ['', Validators.required],
    });
  }

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted!', this.myForm.value);
  }
}
