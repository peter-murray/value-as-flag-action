# value-as-flag-action

This is a Github Action that will take a value and parse it turning it into a boolean flag setting an output of the normalized boolean value for the output.

The reason you might want to do this is to ensure that the provided value is converted in to a _normalized boolean form_ so that checking and validation inside GitHub Actions Workflow jobs are consistent.

This action will also cater for situations where you may want to _default_ to a result when the provided value is not specified, is empty or is incompatible with the boolean parsing values that are internalized in this action.

A reason for this action to exist is to make it simple to have a cross platform approach to using values are flags in all workflows without having to fall back to using the various shells available for Windows, MacOS and Linux environments.


## Usage 

For details on all parameters see [action.yml](action.yml).


### Boolean Values

The action will parse for certain string values to match against `true` or `false`, ignoring any case for the provided value.

* Values that will parse in a `true` output:
  * `true`
  * `t`
  * `yes`
  * `y`
  * `1`

* Values that will parse to a `false` output:
  * `false`
  * `f`
  * `no`
  * `n`
  * `0`

If the value provided is not parsable as one of the defined `true` or `false` values (and this include not being specified) it will return the `default` value as provided in the action input.

Note that the `default` input value is constrained to only allow `true` or `false` as the value and will throw an error at runtime if you set it to any other value.


### Parsing a Secret as a Boolean Flag

You might use a GitHub Secret as a flag in your workflows that you need to check for, catering for the possibility that it may not be set.

_Note: if you use the GitHub Secrets system to host a boolean value, then the Action runner will attempt to mask all occurences of the string value that is set in that secret in the output. What this means in practice is that if you set a secret value of `no` then words like `not` will end up being masked to `***t`._

```yaml
- name: Parse secret value as flag
  id: build_container_flag
  uses: peter-murray/value-as-flag-action@0.0.1
  with:
    value: ${{ secrets.BUILD_CONTAINER }}
    default: false

- name: Build Container
  if: steps.build_container_flag.outputs.value == 'true'
  run: docker build .
```
