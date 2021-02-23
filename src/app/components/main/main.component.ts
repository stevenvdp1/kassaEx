import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
  }


  add = () => {
    this.ticketService.add()
  }

  subtract = () => {
    this.ticketService.subtract()
  }
}

