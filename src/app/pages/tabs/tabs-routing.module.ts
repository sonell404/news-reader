import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'headlines',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../headlines/headlines.module').then(
                (m) => m.HeadlinesPageModule
              ),
          },
          {
            path: '',
            loadChildren: () =>
              import('../article/article.module').then(
                (m) => m.ArticlePageModule
              ),
          },
        ],
      },
      {
        path: 'tech-news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tech-news/tech-news.module').then(
                (m) => m.TechNewsPageModule
              ),
          },
          {
            path: '',
            loadChildren: () =>
              import('../article/article.module').then(
                (m) => m.ArticlePageModule
              ),
          },
        ],
      },
      {
        path: 'business-news',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../business-news/business-news.module').then(
                (m) => m.BusinessNewsPageModule
              ),
          },
          {
            path: '',
            loadChildren: () =>
              import('../article/article.module').then(
                (m) => m.ArticlePageModule
              ),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/headlines',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
