import gitP from 'simple-git/promise'
import fs from 'fs'
import path from 'path'
import groupBy from 'lodash.groupby'

export const getChangedFiles = (repo, sha) =>
    gitP(repo)
        .diffSummary([sha + '~', sha])
        .then((summary) => summary.files.map(({ file }) => file))

export const getChangedDirs = (repo, sha) =>
    getChangedFiles(repo, sha)
        .then((files) =>
            files.map((file) => ({
                dir: path.dirname(file),
                file
            }))
        )
        .then((directories) => {
            return groupBy(directories, (x) => x.dir)
        })
        .then((dict) => Object.keys(dict))

// getChangedFiles('.', '@').then(console.log)
