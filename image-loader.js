module.exports = function customImageLoader({ src, width, quality }) {
  // When in development, use the src as is
  if (process.env.NODE_ENV === 'development') {
    return src;
  }
  
  // For production (GitHub Pages), add the correct basePath
  // Make sure the src starts with a slash
  const srcWithLeadingSlash = src.startsWith('/') ? src : `/${src}`;
  
  // Add the basePath only if the src doesn't already include it
  if (srcWithLeadingSlash.startsWith('/Resume/')) {
    return srcWithLeadingSlash;
  }
  
  return `/Resume${srcWithLeadingSlash}`;
}; 