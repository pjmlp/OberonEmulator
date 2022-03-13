#!/bin/sh
set -e

./get-source.sh
./apply-emulator-patches.sh
./derive-files.sh

cp OberonFromScratch.Tool.JavaScript.txt work/OberonFromScratch.Tool.txt

[ -z "$1" ] && exit 0

./compile-image.sh "$1" FullDiskImage 'MB=?' MinimalDiskImage
