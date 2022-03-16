type ImageSizeProps = {
  [key: string]: '200x' | '200x200' | '640x' | '800x' | '1280x' | '1920x';
};

export const IMAGE_SIZE: ImageSizeProps = {
  THUMBNAIL: '200x',
  THUMBNAIL_SQUARE: '200x200',
  MIDDLE: '640x',
  MIDDLE_LV2: '800x',
  BIG: '1280x',
  BIG_LV2: '1920x',
};
