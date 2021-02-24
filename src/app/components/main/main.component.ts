import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  users: any

  constructor(private ticketService: TicketService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.users$.subscribe((users: any) => {
      this.users = users
    })
    this.userService.fetchUsers()
  }

  add = () => {
    this.ticketService.add()
  }

  subtract = () => {
    this.ticketService.subtract()
  }
}

