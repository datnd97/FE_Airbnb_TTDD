import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Comment} from '../model/home/Comment';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  getListComment(id: number): Observable<Comment> {
    return this.http.get<Comment>('http://localhost:8080/api/comment/' + id);
  }
  createComment(comment: Comment, id: number): Observable<Comment> {
    return this.http.post<Comment>('http://localhost:8080/api/comment/' + id, comment);
  }
  deleteComment(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/api/comment/' + id);
  }
}
