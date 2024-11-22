// socket.service.ts
import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;

  // available backend host links active

  // https://ws-backend-6wrs.onrender.com

  // https://back-one-orcin.vercel.app

  constructor() {
    this.socket = io('https://ws-backend-6wrs.onrender.com');
  }

  // Emit new user data to the server
  addUser(user: any) {
    this.socket.emit('addUser', user);
  }

  // Listen for user list updates
  getUserList(): Observable<any[]> {
    return new Observable((observer) => {
      this.socket.on('updateUserList', (users: any[]) => {
        observer.next(users);
      });
    });
  }
}
