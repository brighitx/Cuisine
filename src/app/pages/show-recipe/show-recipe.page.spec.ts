import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShowRecipePage } from './show-recipe.page';

describe('ShowRecipePage', () => {
  let component: ShowRecipePage;
  let fixture: ComponentFixture<ShowRecipePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRecipePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowRecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
