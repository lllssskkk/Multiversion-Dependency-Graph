const exec = require("child_process").exec;

function git_reset(config, op, branch_name, url) {
  const options = config[op];
  options[branch_name] = url;
  options.cmd = "git reset";
  exec(`${options.cmd} HEAD~${options.commit}`);
  // console.log(config);
}

const config = { reset: { commit: 1, branch: "main" } };
git_reset(config, "reset", "main", "origin/main");

// const config = { reset: { commit: 1, branch: "main" } };
// git_reset(config, "reset", "main", "origin/main");
