import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
    data: { title: 'Lista de Posts' }
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    data: { title: 'Lista de Albums' }
  },
  {
    path: 'todos',
    component: TodosComponent,
    data: { title: 'Lista de TO-DOs' }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
