import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];
  loading: boolean = true;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contactService.getContacts().subscribe((data) => {
      this.contacts = data;
      this.loading = false;
    });
  }
}