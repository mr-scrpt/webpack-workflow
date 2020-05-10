import { DefinePlugin } from "webpack";
const { NODE_ENV } = process.env;
export const defineENVVariables = () => ({
  plugins: [
    new DefinePlugin({
      __ENV__: JSON.stringify(NODE_ENV),
      __DEV__: NODE_ENV === "development",
      __STAGE__: NODE_ENV === "stage",
      __PROD__: NODE_ENV === "production",
    }),
  ],
});
