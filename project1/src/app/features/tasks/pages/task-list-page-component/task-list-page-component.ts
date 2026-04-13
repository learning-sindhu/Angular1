import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Observable } from 'rxjs';
import { Task } from '../../models';
import { DatePipe , AsyncPipe} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-list-page-component',
  imports: [DatePipe, AsyncPipe, RouterLink],
  templateUrl: './task-list-page-component.html',
  styleUrl: './task-list-page-component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskListPageComponent {
     private taskservice = inject(TaskService);
     
     tasks$:Observable<Task[]> = this.taskservice.getTasks();
   
}
