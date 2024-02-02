import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue2";
import Sitemap from "vite-plugin-sitemap";
import Uvc from "unplugin-vue-components/vite";
import { BootstrapVueResolver } from "unplugin-vue-components/resolvers";
import path from "path";

const config = defineConfig(({ command, mode }) => {
  const root = process.cwd();

  const envPrefix = ["VITE_", "VUE_APP_"];

  const env = loadEnv(mode, root, envPrefix);
  console.log(command, mode, env);

  return {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [
        ".mjs",
        ".js",
        ".mts",
        ".ts",
        ".jsx",
        ".tsx",
        ".json",
        ".vue",
      ],
    },
    server: {
      host: "0.0.0.0",
      proxy: {
        "^/api/": {
          target: env.VUE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
        },
      },
    },
    envPrefix,
    plugins: [
      vue(),
      Uvc({
        dts: true,
        globs: '',
        resolvers: [
          BootstrapVueResolver()
        ]
      }),
      Sitemap({
        hostname: env.VUE_APP_BASE_API,
        dynamicRoutes: [
          "/",
          "/maodina",
          "/careers",
          "/careersDetail",
          "/researchPapers",
          "/partnerships",
          "/contact",
          "/community",
          "/octopus",
          "/beehive",
          "/parrot",
          "/spider",
          "/confidentialAI",
          "/cheetah",
          "/modelServing",
          "/modelMonitoring",
          "/web3",
          "/sponsorship",
          "/aboutus",
          "/productOverview",
          "/productAIEcosystem",
          "/press",
          "/weChat",
          "/solutionUsecaseSmartCity",
          "/solutionUsecaseHealthcare",
          "/solutionUsecaseAdvertisement",
          "/solutionUsecaseGenerativeAI",
          "/solutionUsecaseLogisticsRetail",
          "/solutionUsecaseMobility",
          "/solutionUsecaseMultiCloud",
          "/solutionUsecaseWeb3Blockchain",
          "/solutionUsecaseFinTech",
          "/solutionModelComputerVision",
          "/solutionModelNLP",
          "/solutionModelRecommendation",
          "/solutionModelGenerativeAI",
          "/solutionModelGraphNeuralNetworks",
          "/modelsFedCV",
          "/modelsFedGraphNN",
          "/modelsFedIoT",
          "/modelsFedNlp",
          "/maodian",
        ],
      }),
    ],
  };
});

export default config;
