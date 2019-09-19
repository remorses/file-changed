import * as core from '@actions/core';
import * as github from '@actions/github';
import git from 'isomorphic-git'




async function run() {
  try {
    let files = await git.listFiles({ dir: '/', ref: 'HEAD' })
    const myInput = core.getInput('myInput');
    core.debug(`Hello ${myInput}`);
    core.exportVariable
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
