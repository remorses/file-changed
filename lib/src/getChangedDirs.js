"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("simple-git/promise"));
const path_1 = __importDefault(require("path"));
const lodash_groupby_1 = __importDefault(require("lodash.groupby"));
// gitP('.')
//     .revparse(['@~'])
//     .then(console.log)
exports.default = (repo, sha) => promise_1.default(repo)
    .diffSummary([sha + '~', sha])
    // .then(console.log)
    .then((summary) => {
    return summary.files.map(({ file }) => ({
        dir: path_1.default.dirname(file),
        file
    }));
})
    .then((directories) => {
    return lodash_groupby_1.default(directories, (x) => x.dir);
})
    .then((dict) => Object.keys(dict));
// getChangedDirs('.', '@').then(console.log)
