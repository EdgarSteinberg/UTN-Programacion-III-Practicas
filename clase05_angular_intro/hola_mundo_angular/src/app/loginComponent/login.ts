import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.html',
    styleUrls: ['./login.css'],
    standalone: false
})
export class LoginComponent {
    //1. @Output() → "quiero comunicar algo hacia mi padre" pero 
    @Output() loginRequested = new EventEmitter<string>();

    onSubmit(event: Event, username: string): void {
        event.preventDefault();
        this.loginRequested.emit(username);
    }
}