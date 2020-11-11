// First thing you should do is add the HttpClientModule and FormsModule imports
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http/';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent
  ],
  // Put them here, too
  imports: [
    BrowserModule,FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
