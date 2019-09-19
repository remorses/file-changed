import * as core from '@actions/core';
import getChangedDirs from './getChangedDirs'

async function run() {
    console.log(JSON.stringify(process.env, null, '    '))
    if (!process.env.GITHUB_SHA) {
        core.setFailed('cannot access sha')
    }
    const dirs = await getChangedDirs('.', process.env.GITHUB_SHA)
    core.setOutput('changedDirs', JSON.stringify(dirs)) // steps.<step id>.outputs
    core.exportVariable('changedDirs', dirs.join(', '))
}




run();
