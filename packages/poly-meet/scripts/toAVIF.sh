cd docs/public/toConvert

for file in *.jpg *.png; do
  [ -e "$file" ] || continue
  
  # Извлекаем имя файла без расширения
  filename="${file%.*}"

  # Конвертируем в .avif с упрощенными параметрами
  ffmpeg -i "$file" -c:v libaom-av1 -crf 30 -cpu-used 4 "${filename}.avif"
  
  # Если конвертация завершена успешно, удаляем исходный файл
  if [ $? -eq 0 ]; then
    rm "$file"
  fi
  
  # Добавляем паузу, например, 2 секунды
  sleep 2
done


