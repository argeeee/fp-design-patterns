import fs from 'fs/promises';
import path from 'path';

async function listFilesOf(directoryPath: string): Promise<string[]> {
	return (await Promise.all(
		(await fs.readdir(directoryPath))
			.map(async (item) => {
				const itemPath = path.join(directoryPath, item);
				const stat = await fs.stat(itemPath);
		
				if (stat.isDirectory()) {
					return listFilesOf(itemPath);
				} else if (stat.isFile()) {
					return itemPath;
				}
			})
		))
		.flat() as string[];
}

(async () => {
	(await listFilesOf(__dirname))
		.filter((filename) => __filename !== filename)
		.map((filename) => require(filename))
		.map(({ default: moduleFn }) => {
			moduleFn();
		})
})();
