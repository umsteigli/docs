# Start the dev server (default)
main: start

# Install yarn dependencies
_install:
    yarn install

# Build the production ready website
build: _install
    yarn run build

# Start dev server
start: _install
    yarn run start

# Serve production ready site
serve: build
    yarn run serve

# Publish docs site
deploy: _install
    yarn run deploy

# Clean files (sudo)
clean:
    rm -rf build/ .docusaurus/
