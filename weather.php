<?php

     $headers[] = 'Connection: Keep-Alive';
     $headers[] = 'Content-Type: application/cap+xml;charset=utf-8';
     $headers[] = 'Accept: application/cap+xml';

     $userAgent = 'php';

     $url = 'https://api.weather.gov/alerts/active/region/land';

     $cURL = curl_init();

     curl_setopt($cURL, CURLOPT_URL, $url);
     curl_setopt($cURL, CURLOPT_HTTPHEADER, $headers);
     curl_setopt($cURL, CURLOPT_USERAGENT, $userAgent);
     curl_setopt($cURL, CURLOPT_RETURNTRANSFER, true);
     curl_setopt($cURL, CURLOPT_HTTPGET, true);

     $result = curl_exec($cURL);

      print_r($result);

     curl_close($cURL);

?>
