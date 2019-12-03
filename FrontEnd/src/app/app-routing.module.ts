import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { SongsComponent } from './songs/songs.component';
import { ReviewComponent } from './review/review.component';
import { SongReviewComponent } from './song-review/song-review.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { DmcaComponent } from './dmca/dmca.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'callback', component: CallbackComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'song-review/:id', component: SongReviewComponent},
  {path: 'song-details/:id', component: SongDetailsComponent},
  {path: 'dmca', component: DmcaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
