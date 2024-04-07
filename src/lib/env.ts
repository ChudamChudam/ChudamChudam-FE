export const isDevelopment = process.env.NODE_ENV === 'development';
export const isProduction = process.env.NODE_ENV === 'production';

export const env = Object.freeze({
  BASE_API_URL: `${process.env.NEXT_PUBLIC_BASE_API_URL}`,
});
