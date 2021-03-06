import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { UiModule } from './ui/ui.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './shared/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { DialogDetailsComponent } from './dialog-details/dialog-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ApplyLeaveComponent,
    LeaveHistoryComponent,
    DialogDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    UiModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  entryComponents: [DialogDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
