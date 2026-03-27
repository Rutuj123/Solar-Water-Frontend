import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-installations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './installations.html',
  styleUrls: ['./installations.css']
})
export class InstallationsComponent {

  installationForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.installationForm = this.fb.group({
      installationDate: [''],
      technicianName: [''],
      location: [''],
      status: ['PENDING'],
      remarks: [''],
      order: this.fb.group({
        id: ['']
      })
    });
  }

  saveInstallation() {
    this.http.post('http://localhost:8080/api/installations', this.installationForm.value)
      .subscribe(res => {
        alert('Installation Saved Successfully');
        this.installationForm.reset();
      });
  }
}
