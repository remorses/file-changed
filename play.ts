import * as core from '@actions/core'
import * as git from 'isomorphic-git'
import * as fs from 'fs'
import { TSTupleType } from '@babel/types'

const isDir = (name) => fs.existsSync(name) && fs.lstatSync(name).isDirectory()
const dir = '.'
async function run() {
    const files = await git.listFiles({ dir: '.', ref: 'HEAD', fs })
    // const dirs = files.filter()
    const sha = await git.resolveRef({dir, ref: 'master', fs})
    console.log(await git.readObject({dir: '.', fs, oid: sha }))
    const dirs = fs
        .readdirSync('.')
        .filter(isDir)
        .map((dir) => [dir, fs.readdirSync(dir).filter(x => !isDir(x))])
        .map(async ([dir, dirContents]) => {
            const changed = (dirContents as string[]).filter((name) => {
                const path = dir + '/' + name
                return !isDir(path) ? git.status({ dir: '.', filepath: path, fs }) : null
            })
            if (changed.length) console.log(dirContents)
            return changed.length ? dir : null
        })
    console.log(await Promise.all(dirs))
    console.log()
}

run()
