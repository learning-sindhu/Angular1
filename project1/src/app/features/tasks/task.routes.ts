import { Routes } from "@angular/router";
import { TaskListPageComponent } from "./pages/task-list-page-component/task-list-page-component";
import { TaskNewPageComponent } from "./pages/task-new-page-component/task-new-page-component";
import { TaskEditPageComponent } from "./pages/task-edit-page-component/task-edit-page-component";

export const TASK_ROUTES:Routes =[
    {
        path:'',
        component:TaskListPageComponent
    },
    {
        path:'new',
        component:TaskNewPageComponent
    },
    {
        path:':id/edit',
        component:TaskEditPageComponent
    }
];  