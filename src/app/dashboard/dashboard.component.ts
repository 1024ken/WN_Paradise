import { Component, OnInit } from '@angular/core';
import { Pet } from '../pets';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  pets: Pet[] = [];

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets.slice(1, 5));
  }
}
