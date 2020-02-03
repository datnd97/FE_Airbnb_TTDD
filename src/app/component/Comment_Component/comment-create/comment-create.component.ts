import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Home} from '../../../model/home/Home';
import {Comment} from '../../../model/home/Comment';
import {ActivatedRoute} from '@angular/router';
import {CommentService} from '../../../service/comment.service';
import {BookingReponse} from '../../../model/home/BookingReponse';

@Component({
  selector: 'app-comment-create',
  templateUrl: './comment-create.component.html',
  styleUrls: ['./comment-create.component.css']
})
export class CommentCreateComponent implements OnInit {
  @Input() home = Home;
  @Output() valueChange = new EventEmitter<Comment[]>();
  commentList: any;
  formCommentCreate = new FormGroup({
    commentInput: new FormControl('')
  });
  roleId; role; token; name: string;
  id: number;
  homeName: string;
  constructor(private activatedRoute: ActivatedRoute,
              private commentService: CommentService) {
    this.activatedRoute.params.subscribe(
      result => {this.id = result.id; }
    );
  }

  ngOnInit() {
    this.roleId = sessionStorage.getItem('id');
    this.role = sessionStorage.getItem('role');
    this.token = sessionStorage.getItem('token');
    this.name = sessionStorage.getItem('name');
  }

  createComment() {
    const {commentInput} = this.formCommentCreate.value;
    if (commentInput === '') {
      return;
    }
    console.log(this.id);
    const comment: Comment = {
      id: this.id,
      content: commentInput,
      user: {
        id: this.roleId
      }

    };
    this.commentService.createComment(comment, this.id).subscribe(
      result => {
        console.log(result, 'ok');
        this.formCommentCreate.reset();
        this.getAllComment();
      }, error => {
        console.log(error);
      }
    );
  }
  getAllComment() {
    this.commentService.getListComment(this.id).subscribe(
      result =>  {this.commentList = result,
        this.valueChange.emit(this.commentList);
      }
    );
  }
}
