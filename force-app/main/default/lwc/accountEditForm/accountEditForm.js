import { LightningElement, api, track } from 'lwc';

import ACCOUNT_NAME from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import SLA_FIELD from '@salesforce/schema/Account.SLA__c';
import SLA_EXPIRATION_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c';
import SLA_SERIAL_NUMBER_FIELD from '@salesforce/schema/Account.SLASerialNumber__c';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class AccountEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track readOnly = "false";
    
    objectApiName = ACCOUNT_NAME;
    name = NAME_FIELD;
    phone = PHONE_FIELD;
    website = WEBSITE_FIELD;
    sla = SLA_FIELD;
    slaExpiration = SLA_EXPIRATION_FIELD;
    slaSerialNumber = SLA_SERIAL_NUMBER_FIELD;

    handleSuccess() {
        const toastEvent = new ShowToastEvent({
            title: 'Success',
            message: 'Record saved.',
            variant: 'success'

        });
        this.dispatchEvent(toastEvent);
        
        if (this.readOnly == false){
            this.readOnly = true;
        }
        else{
            this.readOnly = false;
        }
    }
}