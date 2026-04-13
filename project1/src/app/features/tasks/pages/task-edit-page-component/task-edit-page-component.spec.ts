import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditPageComponent } from './task-edit-page-component';

describe('TaskEditPageComponent', () => {
  let component: TaskEditPageComponent;
  let fixture: ComponentFixture<TaskEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskEditPageComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
