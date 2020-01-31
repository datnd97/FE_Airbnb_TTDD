import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../../service/comment.service';
import {Comment} from '../../../model/home/Comment';
import {Home} from '../../../model/home/Home';
import {FormControl} from '@angular/forms';
import {BookingReponse} from '../../../model/home/BookingReponse';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() home: Home;
  commentList: any;
  name: string;
  role: string;
  token: string;
  roleId: string;
  idComment: number;
  commentUpdate = new FormControl();
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
  }
  deleteComment(closeModalRef2: HTMLButtonElement) {
    console.log('Da vao');
    this.commentService.deleteCommentById(this.idComment).subscribe(result => {
      this.getAllComment();
      closeModalRef2.click();
    }, error => {
      console.log(error);
    });
  }

  closeForm(closeModalRef: HTMLAnchorElement) {
    closeModalRef.click();
    this.getAllComment();
    this.commentUpdate.reset();
  }

  updateComment(commentId: number, closeModalRef: HTMLAnchorElement) {
    if (this.commentUpdate.value == null) {
      return this.closeForm(closeModalRef);
    }
    const comment: Comment = {
      id: commentId,
      content: this.commentUpdate.value
    };
    this.commentService.updateComment(comment).subscribe(
      result => {this.closeForm(closeModalRef); }
      // tslint:disable-next-line:no-unused-expression
    ), fail => {console.log(fail); };
  }

  receiveComment(listComment: Comment[]) {
    this.commentList = listComment;
  }
}
