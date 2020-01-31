import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../service/comment.service';
import {Comment} from '../../../model/home/Comment';
import {Home} from '../../../model/home/Home';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() home: Home;
  commentList: Comment;
  name: string;
  role: string;
  token: string;
  roleId: string;
  idComment: number;
  constructor(private commentService: CommentService) { }
  ngOnInit() {
    this.getAllComment();
    this.roleId = sessionStorage.getItem('id');
    this.role = sessionStorage.getItem('role');
    this.token = sessionStorage.getItem('token');
    this.name = sessionStorage.getItem('name');
  }

  getAllComment() {
    this.commentService.getListComment(this.home.id).subscribe(
      result => { this.commentList = result,
      console.log('>>>> Comment List: ' + JSON.stringify(this.commentList)); },
      error => {
        console.log(error);
      }
    );
  }
  getIdComment(id: number) {
    this.idComment = id;
    alert(this.idComment);
  }
  deleteComment(closeModalRef2: HTMLButtonElement) {
    this.commentService.deleteComment(this.idComment).subscribe(result => {
      this.getAllComment();
      closeModalRef2.click();
    }, error => {
      console.log(error);
    });
  }

}
