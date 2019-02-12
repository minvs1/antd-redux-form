workflow "New workflow" {
  on = "release"
  resolves = ["Publish"]
}

action "Install dependencies" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  args = "install"
}

action "Build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Install dependencies"]
  args = "run build"
}

action "Publish" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Build"]
  secrets = ["NPM_AUTH_TOKEN"]
  args = "publish"
}
