var wms_layers = [];


        var lyr_Basemap_0 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_EnslavedPopulationbyCounty_1 = new ol.format.GeoJSON();
var features_EnslavedPopulationbyCounty_1 = format_EnslavedPopulationbyCounty_1.readFeatures(json_EnslavedPopulationbyCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnslavedPopulationbyCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnslavedPopulationbyCounty_1.addFeatures(features_EnslavedPopulationbyCounty_1);
var lyr_EnslavedPopulationbyCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnslavedPopulationbyCounty_1, 
                style: style_EnslavedPopulationbyCounty_1,
                popuplayertitle: 'Enslaved Population by County',
                interactive: false,
    title: 'Enslaved Population by County<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_0.png" /> 400 - 2000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_1.png" /> 2000 - 5000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_2.png" /> 5000 - 7000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_3.png" /> 7000 - 13000<br />\
    <img src="styles/legend/EnslavedPopulationbyCounty_1_4.png" /> 13000 - 23000<br />' });
var format_MilitiaAidRequeststoPreventMilitias_2 = new ol.format.GeoJSON();
var features_MilitiaAidRequeststoPreventMilitias_2 = format_MilitiaAidRequeststoPreventMilitias_2.readFeatures(json_MilitiaAidRequeststoPreventMilitias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MilitiaAidRequeststoPreventMilitias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MilitiaAidRequeststoPreventMilitias_2.addFeatures(features_MilitiaAidRequeststoPreventMilitias_2);
var lyr_MilitiaAidRequeststoPreventMilitias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MilitiaAidRequeststoPreventMilitias_2, 
                style: style_MilitiaAidRequeststoPreventMilitias_2,
                popuplayertitle: 'Militia & Aid Requests to Prevent Militias',
                interactive: true,
                title: '<img src="styles/legend/MilitiaAidRequeststoPreventMilitias_2.png" /> Militia & Aid Requests to Prevent Militias'
            });
var format_AllegedInsurrectionsLocation_3 = new ol.format.GeoJSON();
var features_AllegedInsurrectionsLocation_3 = format_AllegedInsurrectionsLocation_3.readFeatures(json_AllegedInsurrectionsLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllegedInsurrectionsLocation_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllegedInsurrectionsLocation_3.addFeatures(features_AllegedInsurrectionsLocation_3);
var lyr_AllegedInsurrectionsLocation_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllegedInsurrectionsLocation_3, 
                style: style_AllegedInsurrectionsLocation_3,
                popuplayertitle: 'Alleged Insurrections Location',
                interactive: true,
                title: '<img src="styles/legend/AllegedInsurrectionsLocation_3.png" /> Alleged Insurrections Location'
            });

lyr_Basemap_0.setVisible(true);lyr_EnslavedPopulationbyCounty_1.setVisible(true);lyr_MilitiaAidRequeststoPreventMilitias_2.setVisible(true);lyr_AllegedInsurrectionsLocation_3.setVisible(true);
var layersList = [lyr_Basemap_0,lyr_EnslavedPopulationbyCounty_1,lyr_MilitiaAidRequeststoPreventMilitias_2,lyr_AllegedInsurrectionsLocation_3];
lyr_EnslavedPopulationbyCounty_1.set('fieldAliases', {'DECADE': 'DECADE', 'NHGISNAM': 'NHGISNAM', 'NHGISST': 'NHGISST', 'NHGISCTY': 'NHGISCTY', 'ICPSRST': 'ICPSRST', 'ICPSRCTY': 'ICPSRCTY', 'ICPSRNAM': 'ICPSRNAM', 'STATENAM': 'STATENAM', 'ICPSRSTI': 'ICPSRSTI', 'ICPSRCTYI': 'ICPSRCTYI', 'ICPSRFIP': 'ICPSRFIP', 'GISJOIN': 'GISJOIN', 'GISJOIN2': 'GISJOIN2', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'PID': 'PID', 'X_CENTROID': 'X_CENTROID', 'Y_CENTROID': 'Y_CENTROID', 'GISJOIN_2': 'GISJOIN_2', 'YEAR': 'YEAR', 'STATE_2': 'STATE_2', 'STATEA': 'STATEA', 'COUNTY_2': 'COUNTY_2', 'COUNTYA': 'COUNTYA', 'AREANAME': 'AREANAME', 'STATEICP': 'STATEICP', 'COUNTYICP': 'COUNTYICP', 'AH3001': 'AH3001', 'AH3002': 'AH3002', 'AH3003': 'AH3003', 'AH3004': 'AH3004', 'AH3005': 'AH3005', 'AH3006': 'AH3006', 'Enslaved': 'Enslaved', });
lyr_MilitiaAidRequeststoPreventMilitias_2.set('fieldAliases', {'Identifier': 'ID', 'Work_Title': 'Title', 'Identifi_1': 'Identifi_1', 'Section': 'Section', 'Section_Su': 'Section_Su', 'Page_Title': 'Page_Title', 'Page_Posit': 'Page_Posit', 'Page_URL': 'URL', 'Subject': 'Subject', 'Text': 'Text', 'Text_Type': 'Text_Type', 'External_U': 'External_U', 'Category': 'Category', 'Subject_UR': 'Subject_UR', 'Subject_La': 'Subject_La', 'Subject_Lo': 'Subject_Lo', 'Subject_De': 'Subject_De', 'Category_H': 'Category_H', 'ID': 'ID', 'Title': 'Title', 'Descriptio': 'Description', 'Creator': 'Creator', 'Date': 'Date', 'Coverage (': 'Coverage (', 'Subject_1': 'Subject_1', 'Mississipp': 'County', 'Geographic': 'Geographic', 'Resource t': 'Resource t', 'Format': 'Format', 'Language': 'Language', 'Publisher': 'Publisher', 'Contributo': 'Contributo', 'Notes': 'Notes', 'Rights': 'Rights', 'Disclaimer': 'Disclaimer', 'Contributi': 'Contributi', 'Collection': 'Collection', 'Source': 'Source', 'Digital re': 'Digital re', 'Digital co': 'Digital co', 'File exten': 'File exten', 'Repository': 'Repository', 'File size': 'File size', 'Width': 'Width', 'Height': 'Height', 'Color spac': 'Color spac', 'File name': 'File name', 'Alternate': 'Alternate', 'Record cre': 'Record cre', });
lyr_AllegedInsurrectionsLocation_3.set('fieldAliases', {'Identifier': 'ID', 'Work_Title': 'Title', 'Identifier_1': 'Identifier_1', 'Section': 'Section', 'Section_Subjects': 'Section_Subjects', 'Page_Title': 'Page_Title', 'Page_Position': 'Page_Position', 'Page_URL': 'Page_URL', 'Subject': 'Subject', 'Text': 'Text', 'Text_Type': 'Text_Type', 'External_URI': 'External_URI', 'Category': 'Category', 'Subject_URI': 'Subject_URI', 'Subject_Latitude': 'Subject_Latitude', 'Subject_Longitude': 'Subject_Longitude', 'Subject_Description': 'Subject_Description', 'Category_Hierarchy': 'Category_Hierarchy', 'ID': 'ID', 'Title': 'Title', 'Description': 'Description', 'Creator': 'Creator', 'Date': 'Date', 'Coverage (time period)': 'Coverage (time period)', 'Subject_1': 'Subject_1', 'Mississippi county': 'Mississippi county', 'Geographic location': 'Geographic location', 'Resource type': 'Resource type', 'Format': 'Format', 'Language': 'Language', 'Publisher': 'Publisher', 'Contributors': 'Contributors', 'Notes': 'Notes', 'Rights': 'Rights', 'Disclaimer': 'Disclaimer', 'Contributing institution': 'Contributing institution', 'Collection': 'Collection', 'Source': 'Source', 'Digital repository': 'Digital repository', 'Digital collection': 'Digital collection', 'File extension': 'File extension', 'Repository': 'Repository', 'File size': 'File size', 'Width': 'Width', 'Height': 'Height', 'Color space': 'Color space', 'File name': 'File name', 'Alternate ID': 'Alternate ID', 'Record created by': 'Record created by', });
lyr_EnslavedPopulationbyCounty_1.set('fieldImages', {'DECADE': 'TextEdit', 'NHGISNAM': 'TextEdit', 'NHGISST': 'TextEdit', 'NHGISCTY': 'TextEdit', 'ICPSRST': 'TextEdit', 'ICPSRCTY': 'TextEdit', 'ICPSRNAM': 'TextEdit', 'STATENAM': 'TextEdit', 'ICPSRSTI': 'Range', 'ICPSRCTYI': 'Range', 'ICPSRFIP': 'TextEdit', 'GISJOIN': 'TextEdit', 'GISJOIN2': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'PID': 'TextEdit', 'X_CENTROID': 'TextEdit', 'Y_CENTROID': 'TextEdit', 'GISJOIN_2': 'TextEdit', 'YEAR': 'TextEdit', 'STATE_2': 'TextEdit', 'STATEA': 'TextEdit', 'COUNTY_2': 'TextEdit', 'COUNTYA': 'TextEdit', 'AREANAME': 'TextEdit', 'STATEICP': 'TextEdit', 'COUNTYICP': 'TextEdit', 'AH3001': 'TextEdit', 'AH3002': 'TextEdit', 'AH3003': 'TextEdit', 'AH3004': 'TextEdit', 'AH3005': 'TextEdit', 'AH3006': 'TextEdit', 'Enslaved': 'Range', });
lyr_MilitiaAidRequeststoPreventMilitias_2.set('fieldImages', {'Identifier': 'TextEdit', 'Work_Title': 'TextEdit', 'Identifi_1': 'Hidden', 'Section': 'Hidden', 'Section_Su': 'Hidden', 'Page_Title': 'Hidden', 'Page_Posit': 'Hidden', 'Page_URL': 'Hidden', 'Subject': 'Hidden', 'Text': 'Hidden', 'Text_Type': 'Hidden', 'External_U': 'Hidden', 'Category': 'Hidden', 'Subject_UR': 'Hidden', 'Subject_La': 'Hidden', 'Subject_Lo': 'Hidden', 'Subject_De': 'Hidden', 'Category_H': 'Hidden', 'ID': 'Hidden', 'Title': 'Hidden', 'Descriptio': 'TextEdit', 'Creator': 'Hidden', 'Date': 'Hidden', 'Coverage (': 'Hidden', 'Subject_1': 'Hidden', 'Mississipp': 'TextEdit', 'Geographic': 'Hidden', 'Resource t': 'Hidden', 'Format': 'Hidden', 'Language': 'Hidden', 'Publisher': 'Hidden', 'Contributo': 'Hidden', 'Notes': 'Hidden', 'Rights': 'Hidden', 'Disclaimer': 'Hidden', 'Contributi': 'Hidden', 'Collection': 'Hidden', 'Source': 'Hidden', 'Digital re': 'Hidden', 'Digital co': 'Hidden', 'File exten': 'Hidden', 'Repository': 'Hidden', 'File size': 'Hidden', 'Width': 'Hidden', 'Height': 'Hidden', 'Color spac': 'Hidden', 'File name': 'Hidden', 'Alternate': 'Hidden', 'Record cre': 'Hidden', });
lyr_AllegedInsurrectionsLocation_3.set('fieldImages', {'Identifier': 'TextEdit', 'Work_Title': 'TextEdit', 'Identifier_1': 'Hidden', 'Section': 'Hidden', 'Section_Subjects': 'Hidden', 'Page_Title': 'Hidden', 'Page_Position': 'Hidden', 'Page_URL': 'Hidden', 'Subject': 'Hidden', 'Text': 'Hidden', 'Text_Type': 'Hidden', 'External_URI': 'Hidden', 'Category': 'Hidden', 'Subject_URI': 'Hidden', 'Subject_Latitude': 'Hidden', 'Subject_Longitude': 'Hidden', 'Subject_Description': 'Hidden', 'Category_Hierarchy': 'Hidden', 'ID': 'Hidden', 'Title': 'Hidden', 'Description': 'TextEdit', 'Creator': 'Hidden', 'Date': 'Hidden', 'Coverage (time period)': 'Hidden', 'Subject_1': 'Hidden', 'Mississippi county': 'TextEdit', 'Geographic location': 'Hidden', 'Resource type': 'Hidden', 'Format': 'Hidden', 'Language': 'Hidden', 'Publisher': 'Hidden', 'Contributors': 'Hidden', 'Notes': 'Hidden', 'Rights': 'Hidden', 'Disclaimer': 'Hidden', 'Contributing institution': 'Hidden', 'Collection': 'Hidden', 'Source': 'Hidden', 'Digital repository': 'Hidden', 'Digital collection': 'Hidden', 'File extension': 'Hidden', 'Repository': 'Hidden', 'File size': 'Hidden', 'Width': 'Hidden', 'Height': 'Hidden', 'Color space': 'Hidden', 'File name': 'Hidden', 'Alternate ID': 'Hidden', 'Record created by': 'Hidden', });
lyr_EnslavedPopulationbyCounty_1.set('fieldLabels', {'DECADE': 'no label', 'NHGISNAM': 'no label', 'NHGISST': 'no label', 'NHGISCTY': 'no label', 'ICPSRST': 'no label', 'ICPSRCTY': 'no label', 'ICPSRNAM': 'no label', 'STATENAM': 'no label', 'ICPSRSTI': 'no label', 'ICPSRCTYI': 'no label', 'ICPSRFIP': 'no label', 'GISJOIN': 'no label', 'GISJOIN2': 'no label', 'STATE': 'no label', 'COUNTY': 'no label', 'PID': 'no label', 'X_CENTROID': 'no label', 'Y_CENTROID': 'no label', 'GISJOIN_2': 'no label', 'YEAR': 'no label', 'STATE_2': 'no label', 'STATEA': 'no label', 'COUNTY_2': 'no label', 'COUNTYA': 'no label', 'AREANAME': 'no label', 'STATEICP': 'no label', 'COUNTYICP': 'no label', 'AH3001': 'no label', 'AH3002': 'no label', 'AH3003': 'no label', 'AH3004': 'no label', 'AH3005': 'no label', 'AH3006': 'no label', 'Enslaved': 'no label', });
lyr_MilitiaAidRequeststoPreventMilitias_2.set('fieldLabels', {'Identifier': 'header label - always visible', 'Work_Title': 'header label - always visible', 'Descriptio': 'header label - always visible', 'Mississipp': 'header label - always visible', });
lyr_AllegedInsurrectionsLocation_3.set('fieldLabels', {'Identifier': 'header label - always visible', 'Work_Title': 'header label - always visible', 'Description': 'header label - always visible', 'Mississippi county': 'header label - always visible', });
lyr_AllegedInsurrectionsLocation_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});