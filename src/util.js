export function isImgUrl(url) {
  try {
    fetch(url).then((response) => {
      return response.status === 200 ? true : false;
    });
  } catch (err) {
    console.log(err);
  }
}
export function checkImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onerror = () => resolve(false);
    img.onload = () => resolve(true);
    img.src = url;
  });
}

export function testImage(url) {
  let http = new XMLHttpRequest();

  http.open("HEAD", url, false);
  http.send();

  return http.status === 200;
}
