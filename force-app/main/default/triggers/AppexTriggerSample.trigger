trigger AppexTriggerSample on Account (before insert, before update) {
    for (Account a : Trigger.new) {
        if (a.Id == '0012w000029kEnfAAE') {
            System.debug('Test logger: ' + a.Id);
        }
    }
}
