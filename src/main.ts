import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UsersComponent } from './app/users/users.component';
import { HelloComponent } from './app/hello/hello.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent, HelloComponent],
  template: `
<hello name="{{ name }}"></hello>
<p>
  Start editing to see some magic happen :)
</p>
<app-users></app-users>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
