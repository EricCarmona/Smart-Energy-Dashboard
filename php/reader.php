<?php
// reader.php: Reads the CSV and creates $data array

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
?>
