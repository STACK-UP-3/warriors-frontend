export const imageUpload = async (file) => {
  const data = new FormData();
  data.append('file', file[0]);
  data.append('upload_preset', 'barefoot_nomad');
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/dcna45id5/image/upload`,
      {
        method: 'POST',
        body: data,
      },
    );
    /* istanbul ignore next */
    return res.json();
  } catch (err) {
    return {
      message: 'Image not uploaded successfuly, Try again',
      error: true,
    };
  }
};
