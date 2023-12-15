import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  private baseURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllListsData(): Observable<any> {
    return this.http.get(this.baseURL + '/lists/tasks', {});
  }
}
