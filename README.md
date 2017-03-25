# vuets lib for protostuffdb

### Generate code (optional, generated code is checked in)
```sh
mkdir -p target
wget -O target/fbsgen-ds.jar https://repo1.maven.org/maven2/com/dyuproject/fbsgen/ds/fbsgen-ds-fatjar/1.0.1/fbsgen-ds-fatjar-1.0.1.jar
git clone https://gitlab.com/dyu/ds-proto.git p
./codegen.sh
```

### Setup
```sh
yarn install
```

### Build
```sh
yarn run build
```
