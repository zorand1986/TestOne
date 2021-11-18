let parsedFileName;

export default function getFileName(obj) {
  if (obj.filename) {
    parsedFileName = obj.filename;
    return parsedFileName;
  } else {
    for (let key in obj) {
      getFileName(obj[key]);
    }
  }
  return parsedFileName;
}
