<?php
// dashboard.php: Uses $data from reader.php
include "reader.php";

// Display last 5 rows in a table
echo "<table border='1'>";
echo "<tr>";
foreach (array_keys($data[0]) as $key) {
    echo "<th>$key</th>";
}
echo "</tr>";

$lastRows = array_slice($data, -5);

foreach ($lastRows as $row) {
    echo "<tr>";
    foreach ($row as $value) {
        echo "<td>$value</td>";
    }
    echo "</tr>";
}
echo "</table>";
?>
