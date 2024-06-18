# Serve Slate
main: serve

# Pull the docker image
_pull:
    docker pull slatedocs/slate

# Build the website
build: _pull
    docker run --rm --name slate -v $(pwd)/build:/srv/slate/build -v $(pwd)/docs:/srv/slate/source slatedocs/slate build

# Serve Slate
serve: _pull
    docker run --rm --name slate -p 4567:4567 -v $(pwd)/docs:/srv/slate/source slatedocs/slate serve

# Clean files (sudo)
clean:
    sudo rm -rf $(pwd)/build/
