// export function isImgUrl(url) {
//   const img = new Image();
//   img.src = url;
//   return new Promise((resolve) => {
//     img.onload = () => resolve(true);
//     img.onerror = () => resolve(false);
//     console.log();
//   });

//   try {
//     const response = fetch(url);
//     if (response.status === "200") return true;
//     return false;
//   } catch (err) {
//     console.log(err);
//   }
// }

export function isImgUrl(url) {
  try {
    fetch(url).then((response) => {
      return response.status === 200;
    });
  } catch (err) {
    console.log(err);
  }
}
