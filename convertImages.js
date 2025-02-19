import sharp from "sharp";
import fs from "fs";
import path from "path";
import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

const inputDir = "./src/assets/img";

async function processDirectory(dir) {
    fs.readdirSync(dir).forEach(async (file) => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await processDirectory(filePath);
        } else {
            const extname = path.extname(file).toLowerCase();

            if (
                extname === ".jpg" ||
                extname === ".jpeg" ||
                extname === ".png"
            ) {
                const outputFilePath = filePath.replace(
                    /\.(jpg|jpeg|png)$/,
                    ".webp"
                );

                await sharp(filePath)
                    .webp({
                        lossless: false,
                        smartSubsample: true,
                    })
                    .toFile(outputFilePath);

                await imagemin([outputFilePath], {
                    destination: path.dirname(outputFilePath),
                    plugins: [
                        imageminWebp({
                            quality: 95,
                        }),
                    ],
                });

                fs.unlink(filePath, (err) => {
                    if (err) throw err;
                });
            }
        }
    });
}

processDirectory(inputDir);