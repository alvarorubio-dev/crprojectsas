declare module "*.css";
declare module "*.module.css";

// Sass / Less
declare module "*.scss";
declare module "*.module.scss";
declare module "*.sass";
declare module "*.module.sass";
declare module "*.less";
declare module "*.module.less";

// Static assets
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
declare module "*.avif";
declare module "*.svg" {
  const src: string;
  export default src;
}
declare module "*.ttf";
declare module "*.otf";
declare module "*.woff";
declare module "*.woff2";
declare module "*.eot";
