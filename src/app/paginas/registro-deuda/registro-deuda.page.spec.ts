import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegistroDeudaPage } from './registro-deuda.page';

describe('RegistroDeudaPage', () => {
  let component: RegistroDeudaPage;
  let fixture: ComponentFixture<RegistroDeudaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDeudaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroDeudaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
