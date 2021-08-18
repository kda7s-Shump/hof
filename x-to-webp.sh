#!/bin/bash

to_wepb(){
    for file in `\find . -maxdepth 5 -name "*${1}"`; do
        file_name=$(basename $file $1)
        dir_name=$(dirname $file)
        cwebp -q 82 $file -o "${dir_name}/${file_name}.webp"
        rm $file
    done
}

to_wepb ".png"
to_wepb ".jpg"
to_wepb ".jpeg"
to_wepb ".JPEG"
