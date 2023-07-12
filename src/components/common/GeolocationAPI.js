import Geolocation from '@react-native-community/geolocation';

/**
 * 현재 위치를 가져올 수 있는 API
 * @param setCoord 좌표를 설정하는 setState 함수
 */

export function getCurrentPosition(setCoord) {
  Geolocation.getCurrentPosition(
    (info) => {
      const latitude = info.coords.latitude;
      const longitude = info.coords.longitude;
      setCoord({ latitude: latitude, longitude: longitude });
    },
    (error) => {
      // console.log(error.code, error.message);
    },
    { enableHighAccuracy: true }
  );
}
