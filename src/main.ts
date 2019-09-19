import * as core from '@actions/core';
import getChangedDirs from './getChangedDirs'

async function run() {
    console.log(JSON.stringify(process.env, null, '    '))
    const dirs = await getChangedDirs('.', process.env.GITHUB_SHA)
    core.setOutput('changedDirs', JSON.stringify(dirs)) // steps.<step id>.outputs
}




run();
