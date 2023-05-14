import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: '', children: [
    {path: 'portfolio', component: PortfolioComponent, data: {animation: 'PortfolioComponentPage'}},
    {path: 'blog', component: BlogComponent, data: {animation: 'BlogComponentPage'}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
