import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFilmPage } from './add-film.page';

describe('AddFilmPage', () => {
  let component: AddFilmPage;
  let fixture: ComponentFixture<AddFilmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFilmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFilmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
