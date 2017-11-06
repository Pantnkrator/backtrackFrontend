import { Routes, RouterModule} from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { HistoryComponent } from './components/history/history.component';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }, {
        path: 'index',
        component: IndexComponent
    }, {
        path: 'history',
        component: HistoryComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);
