import fs from 'fs';
import { sortPackageJson } from 'sort-package-json';
import gitJsonMerge from 'git-json-merge';

const { stripBom, mergeJson } = gitJsonMerge;

var encoding = 'utf-8';

export function mergeJsonFiles (oursFileName, baseFileName, theirsFileName) {
	var baseJson = stripBom(fs.readFileSync(baseFileName, encoding));
	var theirsJson = stripBom(fs.readFileSync(theirsFileName, encoding));

	var oursJson = stripBom(fs.readFileSync(oursFileName, encoding));
    const endCharacters = oursJson.slice(-1) === '\n' ? '\n' : ''
	var newOursJson = mergeJson(oursJson, baseJson, theirsJson);
	newOursJson = sortPackageJson(`${newOursJson}${endCharacters}`);
	fs.writeFileSync(oursFileName, newOursJson, encoding);
}
