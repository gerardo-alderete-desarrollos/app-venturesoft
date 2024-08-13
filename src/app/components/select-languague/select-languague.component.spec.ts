import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLanguagueComponent } from './select-languague.component';

describe('SelectLanguagueComponent', () => {
  let component: SelectLanguagueComponent;
  let fixture: ComponentFixture<SelectLanguagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectLanguagueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectLanguagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
