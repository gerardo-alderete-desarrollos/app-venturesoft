import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMarcaComponent } from './card-marca.component';

describe('CardDetailComponent', () => {
  let component: CardMarcaComponent;
  let fixture: ComponentFixture<CardMarcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMarcaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
