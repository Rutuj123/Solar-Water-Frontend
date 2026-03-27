import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { QuotationService } from '../quotation-service';

@Component({
  selector: 'app-quotation',
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './quotation.html',
  styleUrl: './quotation.css',
})
export class Quotation implements OnInit {

  quotationForm: FormGroup;
  quotations: any[] = [];
  showModal = false;
  showEditModal = false;
  selectedQuotation: any = null;

  constructor(
    private fb: FormBuilder,
    private quotationService: QuotationService
  ) {
    this.quotationForm = this.createForm();
  }

  ngOnInit(): void {
    this.loadQuotations();
  }

  // ===============================
  // FORM CREATION
  // ===============================

  createForm(): FormGroup {
    return this.fb.group({
      id: [],
      sellerName: ['SolarTech Pvt Ltd'],
      sellerAddress: ['Nagpur, Maharashtra'],
      sellerGST: [''],
      buyerName: [''],
      buyerAddress: [''],
      quotationNumber: ['QTN-001'],
      date: [new Date().toISOString().substring(0, 10)],
      items: this.fb.array([this.createItem()]),
      paymentTerms: [''],
      deliveryTerms: [''],
      validity: ['15 Days'],
      notes: ['']
    });
  }

  get items(): FormArray {
    return this.quotationForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      description: [''],
      quantity: [1],
      unitPrice: [0]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  calculateTotal(): number {
    return this.items.value.reduce((sum: number, item: any) =>
      sum + (item.quantity * item.unitPrice), 0);
  }

  // ===============================
  // MODAL METHODS
  // ===============================

  openAddModal() {
    this.quotationForm = this.createForm();
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  openEditModal(q: any) {
    this.selectedQuotation = q;

    this.quotationForm.patchValue(q);

    this.items.clear();

    q.items.forEach((item: any) => {
      this.items.push(
        this.fb.group({
          description: [item.description],
          quantity: [item.quantity],
          unitPrice: [item.unitPrice]
        })
      );
    });

    this.showEditModal = true;
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  // ===============================
  // CREATE QUOTATION
  // ===============================

  submitQuotation() {

    const payload = {
      ...this.quotationForm.value,
      quotationDate: this.quotationForm.value.date,
      totalAmount: this.calculateTotal()
    };

    this.quotationService.saveQuotation(payload)
      .subscribe({
        next: () => {
          alert('Quotation Created Successfully!');
          this.loadQuotations();
          this.closeModal();
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  // ===============================
  // UPDATE QUOTATION
  // ===============================

  submitEditQuotation() {

    const payload = {
      ...this.quotationForm.value,
      totalAmount: this.calculateTotal()
    };

    this.quotationService.updateQuotation(this.selectedQuotation.id, payload)
      .subscribe({
        next: () => {
          alert('Quotation Updated Successfully!');
          this.loadQuotations();
          this.closeEditModal();
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  // ===============================
  // DELETE QUOTATION
  // ===============================

  deleteQuotation(id: number) {

    if (!confirm('Are you sure you want to delete this quotation?')) {
      return;
    }

    this.quotationService.deleteQuotation(id)
      .subscribe({
        next: () => {
          alert('Quotation Deleted Successfully!');
          this.loadQuotations();
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  // ===============================
  // LOAD ALL QUOTATIONS
  // ===============================

  loadQuotations() {
    this.quotationService.getAllQuotations()
      .subscribe({
        next: (data: any) => {
          this.quotations = data;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  // ===============================
  // PDF DOWNLOAD
  // ===============================

  downloadPDF() {
    const data = document.getElementById('quotationContent');
    if (!data) return;

    html2canvas(data).then(canvas => {
      const imgWidth = 208;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${this.quotationForm.value.quotationNumber}.pdf`);
    });
  }
}




