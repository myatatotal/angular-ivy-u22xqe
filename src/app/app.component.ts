import { Component } from '@angular/core';
import { WavesurferService } from './wavesurfer.service';

@Component({
  selector: 'my-app',
  template: `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Godfather Theme Playlist</h5>
        <p class="card-text">
          Same song
        </p>
      </div>
      <div class="list-group">
        <button
          *ngFor="let playitem of ws.playlist"
          (click)="ws.playTrack(playitem.url, playitem.trackid, playitem.title)"
          type="button"
          class="list-group-item list-group-item-action"
          [ngClass]="{ active: playitem.trackid == ws.nowplayingTrackid }"
        >
          {{ playitem.title }}
        </button>
      </div>
      <div class="card-body">
        <a href="#" class="card-link"><i class="fas fa-heart"></i></a>
        <a href="#" class="card-link"><i class="fas fa-share"></i></a>
      </div>
    </div>

    <footer class="bg-black sticky text-white text-center text-lg-start">
      <div
        class="text-center p-3"
        style="background-color: rgba(0, 0, 0, 0.2);"
      >
        <div class="grid-container">
          <div>
            <div class="btn-group">
              <a
                href="#!"
                class="btn"
                [ngClass]="{
                  'btn-success': ws.isPlaying,
                  'btn-outline-success': !ws.isPlaying
                }"
                (click)="ws.playPause()"
                ><i class="fas fa-play"></i
              ></a>
              <a
                href="#!"
                class="btn"
                [ngClass]="{
                  'btn-success': ws.isPaused,
                  'btn-outline-success': !ws.isPaused
                }"
                (click)="ws.playPause()"
                ><i class="fas fa-pause"></i
              ></a>
              <a
                href="#!"
                class="btn"
                [ngClass]="{
                  'btn-success': ws.isStopped,
                  'btn-outline-success': !ws.isStopped
                }"
                (click)="ws.onStopPressed()"
                ><i class="fas fa-stop"></i
              ></a>
            </div>
          </div>

          <div id="waveform"></div>
          <div>{{ ws.nowplayingState }} {{ ws.nowplayingTitle }}</div>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public ws: WavesurferService) {}
}
