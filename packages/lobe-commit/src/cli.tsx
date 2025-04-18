import { render } from '@lobehub/cli-ui';
import { Command, Option } from 'commander';
import updateNotifier from 'update-notifier';

import packageJson from '@/../package.json';
import { Ai, Commit, Config, List } from '@/commands';

const notifier = updateNotifier({
  pkg: packageJson,
  shouldNotifyInNpmScript: true,
});

notifier.notify({ isGlobal: true });

const program = new Command();

program
  .name('lobe2')
  .description(packageJson.description)
  .version(packageJson.version)
  .addOption(new Option('-a, --ai', 'Generate prompts by ChatGPT'))
  .addOption(new Option('-o, --option', 'Setup lobe2 preferences'))
  .addOption(new Option('-l, --list', 'List all commit types supported'))
  .parse();

interface Flags {
  ai?: boolean;
  list?: boolean;
  option?: boolean;
}

const options: Flags = program.opts();

if (options.ai) {
  render(<Ai />);
} else if (options.option) {
  render(<Config />);
} else if (options.list) {
  render(<List />);
} else {
  render(<Commit />);
}
