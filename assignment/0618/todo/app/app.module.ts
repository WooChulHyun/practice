import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoInputComponent } from './todos/todo-input/todo-input.component';
import { TodoListComponent } from './todos/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoInputComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
