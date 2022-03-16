import { IMAGE_SIZE } from '../constants/image';

interface ImagePathOptions {
  size?: '200x' | '200x200' | '640x' | '800x' | '1280x' | '1920x';
  format?: 'jpg' | 'png' | 'webp';
  type?: string;
}

const buildThumbnailUrl = (
  url: string,
  options: ImagePathOptions = {
    size: IMAGE_SIZE.THUMBNAIL,
  },
): string => {
  if (url && options && options.size && url.indexOf('?') < 0) {
    return `${url}?s=${options.size ?? IMAGE_SIZE.THUMBNAIL}&t=${options.type ?? 'cover'}${
      options.format ? `&f=${options.format}` : ''
    }`;
  }
  return url;
};

export default buildThumbnailUrl;
