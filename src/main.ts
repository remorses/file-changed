import * as core from '@actions/core'
import { getChangedDirs, getChangedFiles } from './support'

async function run() {
    console.log(JSON.stringify(process.env, null, '    '))
    if (!process.env.GITHUB_SHA) {
        core.setFailed('cannot access sha')
    }
    const dirs = await getChangedDirs('.', process.env.GITHUB_SHA)
    core.setOutput('changedDirs', dirs.join(', ')) // steps.<step id>.outputs
    core.exportVariable('changedDirs', dirs.join(', '))

    const files = await getChangedFiles('.', process.env.GITHUB_SHA)
    core.setOutput('changedFiles', files.join(', ')) // steps.<step id>.outputs
    core.exportVariable('changedFiles', files.join(', '))
}

run()
