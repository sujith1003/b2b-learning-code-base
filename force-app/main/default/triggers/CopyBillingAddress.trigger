trigger CopyBillingAddress on Account (before insert) {
    System.debug('copy billing address to shipping on account object');
    System.debug('Trigger.new: ' + Trigger.new);
    for (Account newAccount : Trigger.new) {
        if (newAccount.Match_Billing_Address__c == true) {
            newAccount.ShippingStreet = newAccount.BillingStreet;
            // newAccount.ShippingAddress = newAccount.BillingAddress;
            newAccount.ShippingCity = newAccount.BillingCity;
            newAccount.ShippingState = newAccount.BillingState;
            newAccount.ShippingPostalCode = newAccount.BillingPostalCode;
            newAccount.ShippingCountry = newAccount.BillingCountry;
        }
    }
}