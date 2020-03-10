import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOpinionPage } from './create-opinion.page';

describe('CreateOpinionPage', () => {
  let component: CreateOpinionPage;
  let fixture: ComponentFixture<CreateOpinionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOpinionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOpinionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
