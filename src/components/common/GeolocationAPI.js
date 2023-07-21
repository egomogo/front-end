import Geolocation from '@react-native-community/geolocation';
/**
 * 현재 위치를 가져올 수 있는 API
 * @param setX y 좌표를 설정하는 recoil 함수
 * @param setY y 좌표를 설정하는 recoil 함수
 */

export function getCurrentPosition(setX, setY) {
  Geolocation.getCurrentPosition(
    (info) => {
      const latitude = info.coords.latitude;
      const longitude = info.coords.longitude;
      setX(longitude);
      setY(latitude);
    },
    (error) => {
      // console.log(error.code, error.message);
    },
    { enableHighAccuracy: true }
  );
}
