<?php
// Load CSV and convert to array (similar to reader.php)
$file = fopen("energyData.csv", "r");
$data = [];
$headers = fgetcsv($file, 0, ";");

while (($row = fgetcsv($file, 0, ";")) !== false) {
    $record = array_combine($headers, $row);

    foreach ($record as $key => $value) {
        if ($value !== null && $value !== "") {
            $record[$key] = str_replace(",", ".", $value);
        }
    }

    $data[] = $record;
}

fclose($file);

// Now save the array as a PHP file
$export = "<?php\n\$data = " . var_export($data, true) . ";\n?>";

file_put_contents("data.php", $export);

echo "✅ data.php created successfully!";
?>
