import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

  count:number|undefined
  total:number|undefined
  private subscriptions:Subscription[]=[]

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {

    this.subscriptions.push(
      this.ticketService.ticketData$.subscribe((res:any)=>{
        this.count=res.count
        this.total=res.totalClicks
      })
    )
  }

  ngOnDestroy():void{
    this.subscriptions.forEach((sub:Subscription) => {
      sub.unsubscribe()
    });
  }

}
