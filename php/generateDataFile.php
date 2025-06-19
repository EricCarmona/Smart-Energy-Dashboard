<?php
ini_set('default_charset', 'UTF-8');

$file = fopen("energyData.csv", "r");
$data_by_date = [];
$headers = fgetcsv($file, 0, ";");

while (($row = fgetcsv($file, 0, ";")) !== false) {
    $record = array_combine($headers, $row);

    if (empty(trim($record['Tijdstip']))) {
        continue; // Skip empty rows
    }

    // Replace commas by dots in all values, skip empty headers
    foreach ($record as $key => $value) {
        if (trim($key) === '') {
            unset($record[$key]);
            continue;
        }
        if ($value !== null && $value !== "") {
            $record[$key] = str_replace(",", ".", $value);
        }
    }

    // Separate date and time from 'Tijdstip' (format: '14-6-2025 00:00')
    $parts = explode(' ', $record['Tijdstip']);
    $date = $parts[0];  // e.g. '14-6-2025'
    $time = $parts[1];  // e.g. '00:00'

    // Remove original 'Tijdstip' key if you want, or keep it
    // unset($record['Tijdstip']);

    // Group by date and then by time
    $data_by_date[$date][$time] = $record;
}

fclose($file);

// Optional: sort dates and times
ksort($data_by_date);
foreach ($data_by_date as &$times) {
    ksort($times);
}

// Export array
$export = "<?php\n\$data_by_date = " . var_export($data_by_date, true) . ";\n?>";
file_put_contents("data.php", $export);

echo "✅ data.php created grouped by date and time!";
?>
