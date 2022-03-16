interface ImagePathOptions {
    size?: '200x' | '200x200' | '640x' | '800x' | '1280x' | '1920x';
    format?: 'jpg' | 'png' | 'webp';
    type?: string;
}
declare const buildThumbnailUrl: (url: string, options?: ImagePathOptions) => string;
export default buildThumbnailUrl;
