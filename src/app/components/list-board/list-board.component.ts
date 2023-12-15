import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit, inject } from '@angular/core';
import { TodoListGETModel } from '../../models';
import { ListsService } from '../../services/lists-service/lists.service';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-list-board',
  standalone: true,
  imports: [TodoListComponent],
  templateUrl: './list-board.component.html',
  styleUrl: './list-board.component.scss',
})
export class ListBoardComponent implements OnInit {
  private listsService: ListsService = inject(ListsService);

  lists?: TodoListGETModel[];

  ngOnInit() {
    // TODO: Make fetch call
    this.listsService
      .getAllListsData()
      .pipe()
      .subscribe((data: TodoListGETModel[]) => {
        this.lists = data;
      });
  }
}
