import { LightningElement, api, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getFieldValue from "@salesforce/apex/EasyIframeController.getFieldValue";


export default class EasyIframe extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api fieldName;
    @track url;
    
    @wire(getRecord, { recordId: '$recordId', fields: [fieldName] })
    record;
    error;
    
    async connectedCallback() {
        console.log("RECORD: "+ this.recordId);
        console.log("OBJECT: "+ this.objectApiName);
        console.log("FIELD: "+ this.fieldName);

        try {
            this.url = await getFieldValue({objectApiName:this.objectApiName, recordId:this.recordId, fieldApiName:this.fieldName});
        } catch (error) {
            this.error = error;
        }
    }
}