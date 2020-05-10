export const filename = () => {
  const { NODE_ENV } = process.env;
  const IS_DEV = NODE_ENV === "development";
  const filename = IS_DEV
    ? "js/[name].[hash].[id].js"
    : "js/[name].[chunkhash].[id].js";

  return {
    main: filename,
    chunk: "js/[name].[chunkhash].[id].js",
  };
};
