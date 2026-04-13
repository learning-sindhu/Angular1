import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewPageComponent } from './task-new-page-component';

describe('TaskNewPageComponent', () => {
  let component: TaskNewPageComponent;
  let fixture: ComponentFixture<TaskNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskNewPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskNewPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
