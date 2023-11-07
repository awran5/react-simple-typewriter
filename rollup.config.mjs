// rollup.config.js
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import preserveDirectives from "rollup-plugin-preserve-directives";

import autoprefixer from "autoprefixer";
import glob from "glob";

import { readFileSync, writeFileSync, existsSync } from "fs";
const pkg = JSON.parse(readFileSync("package.json", { encoding: "utf8" }));

for (const css of glob.sync("src/**/*.css")) {
  const definition = `${css}.d.ts`;
  if (!existsSync(definition))
    writeFileSync(definition, "const mod: { [cls: string]: string }\nexport default mod\n");
}

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        dir: "dist",
        format: "cjs",
        sourcemap: true,
        preserveModules: true,
      },
      {
        dir: "dist",
        format: "esm",
        sourcemap: true,
        preserveModules: true,
      },
      /* {
				file: 'dist/bundle.min.js',
				format: 'iife',
				name: 'version',
				plugins: [terser()]
			} */
    ],
    external: ["react", "react-dom"],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ sourceMap: true, declarationDir: "dist" }),
      postcss({
        extract: true,
        plugins: [autoprefixer()],
        writeDefinitions: true,
      }),
      preserveDirectives.default(),
      terser(),
    ],
  },
];
