import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CpedidoPage } from './cpedido.page';

describe('CpedidoPage', () => {
  let component: CpedidoPage;
  let fixture: ComponentFixture<CpedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CpedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
