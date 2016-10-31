/**
 * Created by Administrator on 2016/10/14.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CenterComponent } from './center/center.component';

const appRoutes: Routes = [
    {
        path: 'center',
        component: CenterComponent
    },

    {
        path: '',
        redirectTo: '/center',
        pathMatch: 'full'
    }
]
export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);