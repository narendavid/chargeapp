import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeudaPage } from './deuda.page';

describe('DeudaPage', () => {
  let component: DeudaPage;
  let fixture: ComponentFixture<DeudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
