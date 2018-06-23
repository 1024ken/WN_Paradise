import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pet } from '../pets';
import { PetService }  from '../pet.service';

@Component({
  selector: 'app-pet_detail',
  templateUrl: './pet_detail.component.html',
  styleUrls: ['./pet_detail.component.scss']
})

export class PetDetailComponent implements OnInit {

  @Input() pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }
 
  goBack(): void {
    this.location.back();
  }  

  save(): void {
    this.petService.updatePet(this.pet)
      .subscribe(() => this.goBack());
  }
}
