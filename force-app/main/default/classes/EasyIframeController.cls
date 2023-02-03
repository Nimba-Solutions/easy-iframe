public with sharing class EasyIframeController {
    @AuraEnabled(cacheable=true)
    public static Object getFieldValue(String objectApiName, String recordId, String fieldApiName) {
        SObject record = Database.query('SELECT ' + fieldApiName + ' FROM ' + objectApiName + ' WHERE Id = \'' + recordId + '\'');
        System.debug('fieldApiName: '+ fieldApiName);
        return record.get(fieldApiName);
    }
}