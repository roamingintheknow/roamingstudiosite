export const cloudName = 'dqiq7slio';

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
