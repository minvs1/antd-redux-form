workflow "New workflow" {
  on = "release"
  resolves = ["Publish"]
}

action "Install dependencies" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  runs = "install"
}

action "Build" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Install dependencies"]
  runs = "run build"
}

action "Publish" {
  uses = "actions/npm@4633da3702a5366129dca9d8cc3191476fc3433c"
  needs = ["Build"]
  secrets = ["NPM_AUTH_TOKEN"]
  runs = "publish"
}
