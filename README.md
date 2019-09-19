# Export changed files to env and as outputs

## Usage

### Example using in a monorepo to execute ci only when directory changes
```yml
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: remorses/files-changed@master
```


```yml
on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v1
    - uses: remorses/files-changed@master
      id: x
    - run: echo $changedDirs
    - run: echo $changedFiles
    - run: echo $X
      env:
        X: ${{ steps.x.outputs.changedDirs }}
```