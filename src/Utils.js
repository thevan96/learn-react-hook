export const uuid = () => {
  const temp_url = URL.createObjectURL(new Blob());
  const uuid = temp_url.toString();
  URL.revokeObjectURL(temp_url);
  return uuid.substr(uuid.lastIndexOf("/") + 1);
};

export const objectQueryStringParameter = object => {
  if (object) {
    const str = Object.keys(object)
      .map(key => `${key}=${object[key]}`)
      .join("&");
    return str;
  } else {
    throw new Error("parameter is required");
  }
};
