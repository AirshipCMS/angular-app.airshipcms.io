import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirshipSchemaComponent } from './airship-schema.component';

describe('AirshipSchemaComponent', () => {
  let component: AirshipSchemaComponent;
  let fixture: ComponentFixture<AirshipSchemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirshipSchemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirshipSchemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
