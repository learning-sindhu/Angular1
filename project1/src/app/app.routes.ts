import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout-component/main-layout-component';


export const routes: Routes = [
    {
        path:'',
        component:MainLayoutComponent,
        children:[
         {
            path:'',
            redirectTo:'tasks',
            pathMatch:'full'
         },{
            path:'tasks',
            loadChildren:()=>
                import('./features/tasks/task.routes').then(m=>m.TASK_ROUTES)
         },{
            path:'**',
            redirectTo:'tasks'
         }
        ]
    }
];
