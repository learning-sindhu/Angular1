import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Task, TaskStatus, TaskPriority, TASK_STATUS, TASK_PRIORITY } from "../models";

@Injectable({
    providedIn:'root'
})

export class TaskService {
     constructor(){}
     
      getTasks(): Observable<Task[]>{
        const tasks: Task[]= [
            {
                id: '1',
                title: 'Learn Angular',
                description: 'Understand components and services',
                status: TASK_STATUS.PENDING,
                priority: TASK_PRIORITY.HIGH,
                dueDate: new Date(),
                completedAt: new Date()
              },
              {
                id: '2',
                title: 'Build Task App',
                status: TASK_STATUS.IN_PROGRESS,
                priority: TASK_PRIORITY.MEDIUM,
                description: "",
                dueDate: new Date(),
                completedAt: new Date()
             },
              {
                  id: '3',
                  title: 'Test Application',
                  status: TASK_STATUS.COMPLETED,
                  priority: TASK_PRIORITY.LOW,
                  completedAt: new Date(),
                  description: "",
                  dueDate: new Date(),
              }
        ] ;
        return of(tasks);
      }

}