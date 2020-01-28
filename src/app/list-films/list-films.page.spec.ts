import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListFilmsPage } from './list-films.page';

describe('ListFilmsPage', () => {
  let component: ListFilmsPage;
  let fixture: ComponentFixture<ListFilmsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFilmsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
