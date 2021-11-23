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

export const filterData = data => {
  return data?.data?.map(item => {
    return {
      avatar: item?.owner?.avatar_url,
      fileName: getFileName(item?.files),
      id: item?.id,
    };
  });
};
