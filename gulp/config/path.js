import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    build: {
        css: `${buildFolder}/styles/`,
        files: `${buildFolder}/`,
        images: `${buildFolder}/img/`
    },
    src: {
        scss: `${srcFolder}/styles/scss/style.scss`,
        files: `${srcFolder}/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`
    },
    watch: {
        scss: `${srcFolder}/styles/scss/**/*.scss`,
        files: `${srcFolder}/**/*.*`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}