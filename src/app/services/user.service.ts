import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  users$ = new BehaviorSubject<any>(null)

  constructor(private dataService: DataService, private loadingService: LoadingService) { }


  fetchUsers = () => {
    this.loadingService.setLoading(true)
    this.dataService.get('/users').subscribe(res => {
      this.users$.next(res)
      this.loadingService.setLoading(false)
    })
  }
}
