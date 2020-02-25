export const ALBUM_FETCH = "app/ALBUM_FETCH";
export const ALBUM_FETCH_SUCCESS = "app/ALBUM_FETCH_SUCCESS";
export const ALBUM_FETCH_FAIL = "app/ALBUM_FETCH_FAIL";
export const FILTER = "FILTER";
export const GETPHOTOS = "GETPHOTOS";
export const SETALBUMPHOTOS = "SETALBUMPHOTOS";
export const ALBUMPHOTOSERROR = "ALBUMPHOTOSERROR";

export function albumFetchAction() {
  return {
    type: ALBUM_FETCH
  };
}

export function albumFetchSuccessAction(data) {
  return {
    type: ALBUM_FETCH_SUCCESS,
    data
  };
}

export function albumFetchFailAction(error) {
  return {
    type: ALBUM_FETCH_FAIL,
    error
  };
}

export function filterAlbum() {
  return {
    type: FILTER
  };
}

export function getAlbumPhotos(albumId) {
  return {
    type: GETPHOTOS,
    albumId
  };
}
export function setAlbumPhotos(data) {
  return {
    type: SETALBUMPHOTOS,
    data
  };
}
export function albumPhotosError(error) {
  return {
    type: ALBUMPHOTOSERROR,
    error
  };
}
