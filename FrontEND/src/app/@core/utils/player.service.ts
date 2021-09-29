import { Injectable } from '@angular/core';

export class Track {
  name: string;
  artist: string;
  url: string;
  cover: string;
}

@Injectable()
export class PlayerService {
  current: number;
  playlist: Track[] = [
    {
      name: 'The Cup Of Life',
      artist: 'Ricky Martin',
      url: 'assets/mp3/go.mp3',
      cover: 'assets/images/go.jpg',
    },
    {
      name: 'La La La',
      artist: 'Shakira ft. Carlinhos Brown',
      url: 'assets/mp3/la.mp3',
      cover: 'assets/images/la.jpg',
    },
    {
      name: 'Waka Waka',
      artist: 'Shakira',
      url: 'assets/mp3/waka.mp3',
      cover: 'assets/images/waka.jpg',
    },
  ];

  random(): Track {
    this.current = Math.floor(Math.random() * this.playlist.length);
    return this.playlist[this.current];
  }

  next(): Track {
    return this.getNextTrack();
  }

  prev() {
    return this.getPrevTrack();
  }

  private getNextTrack(): Track {
    if (this.current === this.playlist.length - 1) {
      this.current = 0;
    } else {
      this.current++;
    }

    return this.playlist[this.current];
  }

  private getPrevTrack(): Track {
    if (this.current === 0) {
      this.current = this.playlist.length - 1;
    } else {
      this.current--;
    }

    return this.playlist[this.current];
  }
}
