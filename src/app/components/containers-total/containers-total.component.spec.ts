import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainersTotalComponent } from './containers-total.component';

describe('ContainersTotalComponent', () => {
  let component: ContainersTotalComponent;
  let fixture: ComponentFixture<ContainersTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainersTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainersTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
