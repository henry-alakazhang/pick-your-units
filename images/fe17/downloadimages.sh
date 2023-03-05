while read p; do
  filename=`echo $p | cut -d_ -f 2`
  echo $filename
  curl -X GET $p > "$filename.png"
done < imagelist.txt
