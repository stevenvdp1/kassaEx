import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ITicketData {
    count:number,
    totalClicks:number
}

@Injectable({
  providedIn: 'root'
})

export class TicketService {

  ticketData$: BehaviorSubject<ITicketData> = new BehaviorSubject({count:0, totalClicks:0}) 
  
  constructor() {
  }

  add = () =>{
    let ticketData = this.ticketData$.getValue()
    ticketData.count++
    ticketData.totalClicks++
    this.ticketData$.next(ticketData)
  }

  subtract = () =>{
    let ticketData = this.ticketData$.getValue()
    ticketData.count--
    ticketData.totalClicks++
    this.ticketData$.next(ticketData)
  }


}

