#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

mergeDb() {
    cd ./server_fake
    OUTPUT_FILE="db.json"

    if [ ! -e "$OUTPUT_FILE" ]; then
        touch $OUTPUT_FILE
    fi

    >"$OUTPUT_FILE"

    echo "{" >>"$OUTPUT_FILE"

    files=(*.json)
    # Count valid JSON files (excluding db.json)
    valid_files=0
    for file in "${files[@]}"; do
        file_name=$(basename "$file" .json)
        if [ "$file_name" != "db" ]; then
            ((valid_files++))
        fi
    done

    processed_files=0
    for i in "${!files[@]}"; do
        file="${files[$i]}"
        file_name=$(basename "$file" .json)

        if [ "$file_name" == "db" ]; then
            continue
        fi

        SOURCE_FILE="$file_name.json"
        line_number=1
        total_lines=$(wc -l <"$SOURCE_FILE")

        echo "\"$file_name\":" >>"$OUTPUT_FILE"

        while IFS= read -r line; do
            if [ $line_number -lt $((total_lines + 1)) ]; then
                echo "$line" >>"$OUTPUT_FILE"
            fi
            ((line_number++))
        done <"$SOURCE_FILE"

        ((processed_files++))

        if [ $valid_files -gt 1 ] && [ $processed_files -lt $valid_files ]; then
            echo "," >>"$OUTPUT_FILE"
        fi

        echo "" >>"$OUTPUT_FILE"
    done

    echo "}" >>"$OUTPUT_FILE"
    echo -e "${GREEN}Merge successfully!${NC}"
}

mergeDb
