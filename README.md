# Rails Migrate

This is a simple VSCode extension that notifies the user when a new migration has been added to the codebase and gives the user the ability to run migration easily.

## Features

- Notifies the user about migration
- Ability to run migration automatically
- View latest migration file.


## Requirements

This extension requires that auto-migrate.command key be added to your VSCODE settings.json file and value should be the command for running migration, if not privided it will default to

```bash
$ bundle exec rake db:migrate
```

See example below

"auto-migrate.command": "rails db:migrate"


## Known Issues

None

## Release Notes

### 1.0.0

Initial release of rails-auto-migrate

### For more information

* [Github](http://github.com/danielshow)
* [Twitter](https://twitter.com/d_showWorld)

**Enjoy!**
