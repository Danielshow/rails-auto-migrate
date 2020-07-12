# Rails Migrate

This is a simple VSCode extension that notifies the user when a new migration has been added to the codebase and gives the user the ability to run migration easily.

## Features

- Watch migration folder and notifies user about new migration
![](https://user-images.githubusercontent.com/24846513/87251582-9e4f6b00-c464-11ea-83a9-e1bf2cc49ca1.gif)
- Ability to run migration automatically
- View latest migration file.
![](https://user-images.githubusercontent.com/24846513/87251485-fafe5600-c463-11ea-8fc1-f88713deca8f.gif)



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

**Enjoy!** [https://marketplace.visualstudio.com/items?itemName=danielshow.rails-migrate](https://marketplace.visualstudio.com/items?itemName=danielshow.rails-migrate)

## WIP
