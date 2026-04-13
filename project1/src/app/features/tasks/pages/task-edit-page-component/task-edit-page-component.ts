import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-edit-page-component',
  imports: [RouterLink],
  templateUrl: './task-edit-page-component.html',
  styleUrl: './task-edit-page-component.scss',
})
export class TaskEditPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly taskId = this.route.snapshot.paramMap.get('id');
}
