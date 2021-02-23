import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';

describe('TicketService', () => {
  let service: TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add 1 to count', ()=>{
    service.add()
    expect(service.ticketData$.getValue().count).toEqual(1)
  })

  it('should subtract 1 from count', ()=>{
    service.subtract()
    expect(service.ticketData$.getValue().count).toEqual(-1)
  })
});
