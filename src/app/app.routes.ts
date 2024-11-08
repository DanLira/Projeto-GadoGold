import { Routes } from '@angular/router';
import { CardapioEspetinhosComponent } from './cardapio-espetinhos/cardapio-espetinhos.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    
    {
        path: 'home',
        component: HomeComponent,
    },
    
    {    path: 'cardapio-espetinhos',
         component: CardapioEspetinhosComponent 
    }

];


