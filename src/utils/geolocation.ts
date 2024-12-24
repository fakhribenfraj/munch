export function getGeoDistance(
  startPosition: { lng: number; lat: number },
  endPosition: { lng: number; lat: number }
) {

  const r = 6371; // km
  const p = Math.PI / 180;

  const a =
    0.5 -
    Math.cos((endPosition.lat - startPosition.lat) * p) / 2 +
    (Math.cos(startPosition.lat * p) *
      Math.cos(endPosition.lat * p) *
      (1 - Math.cos((endPosition.lng - startPosition.lng) * p))) /
      2;

  return 2 * r * Math.asin(Math.sqrt(a));
}
