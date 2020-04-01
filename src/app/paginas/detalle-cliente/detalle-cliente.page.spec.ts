import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleClientePage } from './detalle-cliente.page';

describe('DetalleClientePage', () => {
  let component: DetalleClientePage;
  let fixture: ComponentFixture<DetalleClientePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleClientePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
