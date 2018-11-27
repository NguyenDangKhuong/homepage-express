// function initMap() {
//   var jpnOffice = {lat: 35.666979, lng: 139.705599}
//   var vnOffice = {lat: 10.799215, lng: 106.722677}
//   var center = {lat: (jpnOffice.lat + vnOffice.lat) / 2, lng: (jpnOffice.lng + vnOffice.lng) / 2}
//   var branchMap = new google.maps.Map(document.getElementById('world_map'), {center: center, zoom: 3, styles: []});
//
//   var jpnContent = '<h3 class="service-group">asoview! JAPAN</h3><p class="text-left">2 Chome-7-7 Jingumae, Shibuya, Tokyo 150-0001, Japan<br />Tel:+813 - 5413 - 7784</p>';
//   var jpnInfoWindow = new google.maps.InfoWindow({content: jpnContent});
//   var jpnMarker = new google.maps.Marker({position: jpnOffice, map: branchMap, title: 'Japan office'});
//   jpnMarker.addListener('click', function() {jpnInfoWindow.open(branchMap, jpnMarker);});
//
//   var vnContent = '<h3 class="service-group">asoview! VIET NAM</h3><p class="text-left">3th Floor EBM Tower, 394 Ung Van Khiem, Ward 25, Binh Thanh Dist, Ho Chi Minh City, Viet Nam<br />Tel: +880172-1031001</p>';
//   var vnInfoWindow = new google.maps.InfoWindow({content: vnContent});
//   var vnMarker = new google.maps.Marker({position: vnOffice, map: branchMap, title: 'Viet Nam office'});
//   vnMarker.addListener('click', function() {vnInfoWindow.open(branchMap, vnMarker);});
// }