import gitP from 'simple-git/promise'
import fs from 'fs'
import path from 'path'
import groupBy from 'lodash.groupby'

// gitP('.')
//     .revparse(['@~'])
//     .then(console.log)

export default (repo, sha) =>
    gitP(repo)
        .diffSummary([sha + '~', sha])
        // .then(console.log)
        .then((summary) => {
            return summary.files.map(({ file }) => ({
                dir: path.dirname(file),
                file
            }))
        })
        .then((directories) => {
            return groupBy(directories, (x) => x.dir)
        })
        .then((dict) => Object.keys(dict))

// getChangedDirs('.', '@').then(console.log)
