import Fontmin from "fontmin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fontsDir = path.join(__dirname, "src", "assets", "fonts");

const convertFontsToWoff = () => {
    fs.readdir(fontsDir, (err, files) => {
        if (err) {
            return;
        }

        const ttfFiles = files.filter(
            (file) => path.extname(file).toLowerCase() === ".ttf"
        );

        if (ttfFiles.length === 0) {
            return;
        }

        ttfFiles.forEach((file) => {
            const srcPath = path.join(fontsDir, file);

            const fontmin = new Fontmin()
                .src(srcPath)
                .dest(fontsDir)
                .use(Fontmin.otf2ttf())
                .use(Fontmin.ttf2woff());

            fontmin.run((err) => {
                if (err) {
                    return;
                }

                fs.unlink(srcPath, (err) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log()
                    }
                });
            });
        });
    });
};

convertFontsToWoff();
