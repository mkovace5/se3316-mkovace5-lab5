import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { SongsComponent } from './songs/songs.component';
import { ReviewComponent } from './review/review.component';
import { FilterPipe} from './filter.pipe';
import { SongReviewComponent } from './song-review/song-review.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { DmcaComponent } from './dmca/dmca.component';
import { DcmaNoticeComponent } from './dcma-notice/dcma-notice.component';
import { DmcaFormComponent } from './dmca-form/dmca-form.component';
import { SongDmcaComponent } from './song-dmca/song-dmca.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeComponent,
    CallbackComponent,
    SongsComponent,
    ReviewComponent,
    FilterPipe,
    SongReviewComponent,
    SongDetailsComponent,
    DmcaComponent,
    DcmaNoticeComponent,
    DmcaFormComponent,
    SongDmcaComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
