@nearBindgen
 class Artist {
  artistID: number;
  artist: string;
  profesionalBackground: string;
  emailContact: string;
  hiringCost: i32;
  available: boolean;

  constructor(
    artistID: number,
    artist: string,
    profesionalBackground: string,
    hiringCost: i32,
    emailContact: string
  ) {
    this.artistID = artistID;
    this.artist = artist;
    this.profesionalBackground = profesionalBackground;
    this.hiringCost = hiringCost;
    this.available = true;
    this.emailContact = emailContact;
  }

  changeStatus(): void {
    this.available = !this.available;
  }
}

export default Artist