#!/usr/bin/env node

(async function () {
  const { mergeJsonFiles } = await import('./../lib/git-json-merge.js');
  var oursFileName = process.argv[2];
  var baseFileName = process.argv[3];
  var theirsFileName = process.argv[4];

  mergeJsonFiles(oursFileName, baseFileName, theirsFileName);
})();
