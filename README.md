# SassDoc Action

A GitHub action to build [SassDoc](http://sassdoc.com/) documentation.

## Usage

Can be combined with other actions to publish documentation to GitHub
pages:

```yaml
name: sassdoc
on:
 push:
   branches:
     - master

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1

    - name: Build
      uses: codevise/sassdoc-action@v1
      with:
        input: ./src
        output: ./docs

    # For example:
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v2
      env:
        PERSONAL_TOKEN: ${{ secrets.GITHUB_PAT }}
        PUBLISH_BRANCH: gh-pages
        PUBLISH_DIR: ./docs
```

## Inputs

Required:

| Name     | Type     | Description |
|----------|----------|-------------|
| `input`  | `String` | Input directory or files |
| `output` | `String` | A directory name to output html. |

Optional:

| Name                  | Type      | Description |
|-----------------------|-----------|-------------|
| `theme`               | `String`  | A valid theme module. |
| `themePackage`        | `String`  | Package name/url that will be passed to npm to install the theme. Defaults to `sassdoc-theme-${theme}`. |

Other [SassDoc options](http://sassdoc.com/configuration/) can be set
by placing a `.sassdocrc` file in the repository root.

## License

MIT. See `LICENSE` for more details.
