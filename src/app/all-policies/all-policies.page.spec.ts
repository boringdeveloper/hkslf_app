import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllPoliciesPage } from './all-policies.page';

describe('AllPoliciesPage', () => {
  let component: AllPoliciesPage;
  let fixture: ComponentFixture<AllPoliciesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPoliciesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllPoliciesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
