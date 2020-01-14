import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Home} from '../model/home/Home';
// import {realpath} from 'fs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private HomeUrl = environment.homeUrl;

  constructor(private http: HttpClient) {}
  getListHome(): Observable<Home[]> {
    return this.http.get<Home[]>(this.HomeUrl);
  }
  addHome(home: Home): Observable<Home> {
    return this.http.post<Home>(this.HomeUrl, home);
  }
  deleteHome(id: number): Observable<void> {
    return this.http.delete<void>(this.HomeUrl + id);
  }
  updateHome(home: Home, id): Observable<Home> {
    return this.http.put<Home>(this.HomeUrl + home.id, home);
  }
  getHome(id: number): Observable<Home> {
    return this.http.get<Home>(this.HomeUrl + id);
  }
  // public convertHouseList(): HouseConvert[] {
  //   let houseList: HouseConvert[] = [];
  //   let array: DataHouseList[] = [];
  //   this.getList().subscribe(result => {
  //     array = result.data;
  //     // tslint:disable-next-line:prefer-for-of
  //     for (let i = 0; i < array.length; i++) {
  //       const arrayPicture = array[i].picture.split(' ');
  //       const house = new HouseConvert(array[i].id, array[i].name, arrayPicture, array[i].address, array[i].price);
  //
  //       houseList.push(house);
  //       console.log('>>>> ' + houseList);
  //     }
  //   });
  //   return houseList;
  // }

}
