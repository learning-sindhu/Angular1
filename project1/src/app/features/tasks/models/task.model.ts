import { TaskPriority } from "./task.priority";
import { TaskStatus } from "./task.status";

export interface Task{
    id:string;
    title:string;
    description:string;
    status:TaskStatus;
    priority:TaskPriority;
    dueDate:Date;
    completedAt:Date;   
}

