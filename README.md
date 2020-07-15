# Rails Auto Migrate

This is a simple VSCode extension that notifies the user when a new migration has been added to the codebase and gives the user the ability to run migration easily. 
It watches rails migration folder and notify the user through vscode notification.

## Features

### Watch migration folder and notifies user about new migration
![](https://user-images.githubusercontent.com/24846513/87251582-9e4f6b00-c464-11ea-83a9-e1bf2cc49ca1.gif)

### Ability to run migration automatically

### View latest migration file.
![](https://user-images.githubusercontent.com/24846513/87251485-fafe5600-c463-11ea-8fc1-f88713deca8f.gif)



## How to use 
Open vscode command pallet `⇧⌘P`

- To view Latest migration, click on `Open Latest Migration`
- To run Migration, click on `Run Rails Migration`

This migration is run with node spawn, you will recieve a notification if successful.

```bash
$ bundle exec rake db:migrate
```


## Known Issues

None

## Release Notes

### 1.0.0

Initial release of rails-auto-migrate

### 1.0.2
Fix automatic migration

### For more information

* [Github](http://github.com/danielshow)
* [Twitter](https://twitter.com/d_showWorld)

**Enjoy!** [Install the extension](https://marketplace.visualstudio.com/items?itemName=danielshow.rails-migrate&ssr=false#overview)
