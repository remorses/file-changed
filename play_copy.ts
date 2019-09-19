
import gitP from 'simple-git/promise'

gitP('.').revparse(['@~']).then(console.log)

gitP('.')
    .diffSummary(['HEAD'])
    .then((summary) => {
        console.log(summary)
    })
