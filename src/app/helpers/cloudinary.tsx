export const cloudName = 'dqiq7slio';


function extractPublicId(url: string): string {
  if (!url) return "";

  // Match everything after 'upload/' (and strip any transformations before the version)
  const match = url.match(/\/upload\/(?:[^/]+\/)*((v\d+\/.*))/);

  if (match && match[1]) return match[1];

  // If not a full URL, assume it's already a valid public ID
  return url;
}
function buildCloudinaryUrl(publicIdOrUrl: string, transform: string) {
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;
  const publicId = extractPublicId(publicIdOrUrl);
  return `${base}/${transform}/${publicId}`;
}
export function cloudinaryLoader({ src, width, quality }: { src: string, width: number, quality?: number }) {
  return `${src}?w=${width}&q=${quality || 75}`;
}
export async function getCloudinaryUrlWithBaseIcon(input: string, isVertical = true) {
  // Ultra-lightweight transform for small icons or thumbnails (8x10 ratio)
  const fullTransform = isVertical
    ? 'c_fill,g_auto,w_160,h_200,q_auto:low,f_auto,fl_progressive,dpr_auto' // 8x10 vertical
    : 'c_fill,g_auto,w_200,h_160,q_auto:low,f_auto,fl_progressive,dpr_auto'; // 10x8 horizontal

  const blurTransform = isVertical
    ? 'c_fill,g_auto,w_12,h_15,q_1,f_auto'
    : 'c_fill,g_auto,w_15,h_12,q_1,f_auto';

  const full = buildCloudinaryUrl(input, fullTransform);
  const blurUrl = buildCloudinaryUrl(input, blurTransform);

  const blurBase64 = await fetch(blurUrl)
    .then((res) => res.arrayBuffer())
    .then((buffer) => Buffer.from(buffer).toString('base64'));

  return {
    full,
    blur: `data:image/jpeg;base64,${blurBase64}`,
  };
}


export async function getCloudinaryUrlWithBaseSmall(
  input: string,
  isVertical = true,
) {
  // Width first, then the rest of the transforms
const fullTransform = isVertical
  ? 'c_fill,g_auto,w_1200,h_1800,q_auto:eco,f_auto,fl_progressive,dpr_auto' // 2:3 scaled up
  : 'c_fill,g_auto,w_1700,h_1133,q_auto:eco,f_auto,fl_progressive,dpr_auto'; // 3:2 scaled up

  const blurTransform = isVertical
    ? 'c_fill,g_auto,w_20,h_30,q_5,f_auto'
    : 'c_fill,g_auto,w_30,h_20,q_5,f_auto';

  const full = buildCloudinaryUrl(input, fullTransform);
  const blurUrl = buildCloudinaryUrl(input, blurTransform);

  // fetch tiny image and convert to base64
  const blurBase64 = await fetch(blurUrl)
    .then(res => res.arrayBuffer())
    .then(buffer => Buffer.from(buffer).toString('base64'));

  return {
    full,
    blur: `data:image/jpeg;base64,${blurBase64}`,
  };
}
export async function getCloudinaryUrlWithBaseHero(input: string, isVertical = true) {
  // Larger dimensions and slightly higher quality for hero images
  const fullTransform = isVertical
    ? 'c_fill,g_auto,w_800,h_1200,q_auto:best,f_auto,fl_progressive,dpr_auto' // 2:3 vertical hero
    : 'c_fill,g_auto,w_1200,h_800,q_auto:best,f_auto,fl_progressive,dpr_auto'; // 3:2 horizontal hero

  const blurTransform = isVertical
    ? 'c_fill,g_auto,w_40,h_60,q_5,f_auto'
    : 'c_fill,g_auto,w_60,h_40,q_5,f_auto';

  const full = buildCloudinaryUrl(input, fullTransform);
  const blurUrl = buildCloudinaryUrl(input, blurTransform);

  const blurBase64 = await fetch(blurUrl)
    .then((res) => res.arrayBuffer())
    .then((buffer) => Buffer.from(buffer).toString('base64'));

  return {
    full,
    blur: `data:image/jpeg;base64,${blurBase64}`,
  };
}

export function getCloudinaryUrl(publicId: string, isVertical = true) {
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;

  const fullTransform = isVertical
    ? 'c_fill,g_auto,w_1500,h_2250,q_auto:best,f_auto,fl_progressive,dpr_auto'
    : 'c_fill,g_auto,h_1500,w_2250,q_auto:best,f_auto,fl_progressive,dpr_auto';

  const blurTransform = isVertical
    ? 'c_fill,g_auto,w_20,h_30,q_5,f_auto'
    : 'c_fill,g_auto,w_30,h_20,q_5,f_auto';

  return {
    full: `${base}/${fullTransform}/${publicId}`,
    blur: `${base}/${blurTransform}/${publicId}`,
  };
}

export function getCloudinaryUrl8by10(publicId: string, isVertical = true) {
  const base = `https://res.cloudinary.com/${cloudName}/image/upload`;

  const fullTransform = isVertical
    ? 'c_fill,g_auto,w_1600,h_2000,q_auto:best,f_auto,fl_progressive,dpr_auto'
    : 'c_fill,g_auto,h_1600,w_2000,q_auto:best,f_auto,fl_progressive,dpr_auto';

  const blurTransform = isVertical
    ? 'c_fill,g_auto,w_16,h_20,q_5,f_auto'
    : 'c_fill,g_auto,w_20,h_16,q_5,f_auto';

  return {
    full: `${base}/${fullTransform}/${publicId}`,
    blur: `${base}/${blurTransform}/${publicId}`,
  };
}
