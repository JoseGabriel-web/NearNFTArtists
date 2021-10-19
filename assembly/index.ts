import { Context, PersistentVector } from "near-sdk-as";
import Artist from "./models/Artist";

const artistsLists = new PersistentVector<Artist>("l");

export function becomeAnArtist(
  profesionalBackground: string,
  hiringCost: i32,
  emailContact: string
): string {
  assert(
    profesionalBackground.length > 0,
    "Please provide a description on previous work."
  );
  assert(
    profesionalBackground.length > 0,
    "Please provide the amount it will take to hire you."
  );
  const newArtist = new Artist(
    artistsLists.length,
    Context.sender,
    profesionalBackground,
    hiringCost,
    emailContact
  );
  artistsLists.push(newArtist);
  return Context.sender + " you are now register as an NFT artist.";
}

export function listNFTArtists(): Artist[] {
  const artists: Artist[] = new Array<Artist>(artistsLists.length);
  for (let i = 0; i < artistsLists.length; i++) {
    artists[i] = artistsLists[i];
  }
  return artists
}

function getAnArtist(artistID: i32): Artist | null {
  if (!artistsLists.containsIndex(artistID)) {
    throw new Error("Artist not found");
  }
  const artist = artistsLists[artistID];
  return artist;
}

export function checkAnArtist(artistID: i32): Artist | null {
  const artist = getAnArtist(artistID);
  return artist;
}

export function changeStatus(artistID: i32): string {
  if (!artistsLists.containsIndex(artistID)) {
    throw new Error("Artist not found");
  }
  let updatedArtist = artistsLists[artistID];
  assert(updatedArtist.artist == Context.sender, "This can only be changed by the Artist.")
  updatedArtist.changeStatus();
  artistsLists.replace(artistID, updatedArtist);
  let status = "available";
  if (!updatedArtist.available) {
    status = "unavailable";
  }
  return (
    updatedArtist.artist + " availability status has been updated to " + status
  );
}
