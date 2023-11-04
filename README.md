# git-merge-packagejson

A git merge driver that use [xdiff](https://github.com/dominictarr/xdiff) to automatically resolve merge conflicts in json files. It also detects indentation automatically. This project was inspired by [git-po-merge](https://github.com/jonatanpedersen/git-merge-json).

[![NPM Version](https://img.shields.io/npm/v/git-merge-packagejson.svg)](https://www.npmjs.com/package/git-merge-packagejson)

## Install

This can be done one of two ways, globally or per-project/directory:

### Globally

Install:

```sh
npm install --global git-merge-packagejson
```

Add to `~/.gitconfig`:

```ini
[core]
    attributesfile = ~/.gitattributes
[merge "packagejson"]
    name = custom merge driver for json files
    driver = git-merge-packagejson %A %O %B
```

Create `~/.gitattributes`:

```ini
package.json merge=packagejson
```

### Single project / directory

Install:

```sh
npm install git-merge-packagejson --save-dev
```

Update git config:

```sh
git config merge.json.driver "$(npm bin)/git-merge-packagejson %A %O %B"
git config merge.json.name "custom merge driver for json files"
```

Add the same `.gitattributes` where desired and commit.
Note `.gitattributes` is only used after committed.

Helpful docs:

- http://git-scm.com/docs/gitattributes#_defining_a_custom_merge_driver
- http://stackoverflow.com/questions/28026767/where-should-i-place-my-global-gitattributes-file

Thanks:

- https://github.com/jonatanpedersen/git-merge-json
